// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, GET_CATEGORIES } from "../generated/graphql";
import '../style.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { Theme, useTheme } from '@mui/material/styles';

interface UpdateNewPost {
    title: String
    content: String
    excerpt: String
    createdAt: Date | null
    categories: String[]
    // categories: { category_name: string; }[]
    author_name: String
    author_country: String
}

interface NewPost {
    title: String
    content: String
    excerpt: String
    createdAt: Date | null
    categories: String[]
    // categories: { category_name: string }[]
    author_name: String
    author_country: String
}

const ManagementPage = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [createDate, setCreateDate] = useState<Date | null>(null);
    const [categories, setCategories] = useState<string[]>([]);
    const [names, setNames] = useState<string[]>([]);
    const [newCategory, setNewCategory] = useState('');
    const [isValidated, setIsValidated] = useState(false);

    const theme = useTheme();
    const inputValidation=()=>{
        if (

            title!==''  && author!==''  && categories.length > 0 && content!=='' &&  createDate!==null
        ) {
            setIsValidated(true)
        }

    }

    const titleChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
        // if (

        //     title !== '' && author !== '' && categories.length !== 0 && content !== ''
        // ) {
        //     setIsValidated(true)
        // }
        inputValidation()
    };
    const authorChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setAuthor(event.target.value);
        // if (
        //     title !== '' && author !== '' && categories.length !== 0 && content !== ''
        // ) {
        //     setIsValidated(true)
        // }
        inputValidation()
    };
    const contentChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setContent(event.target.value);
        // if (
        //     title !== '' && author !== '' && categories.length !== 0 && content !== ''
        // ) {
        //     setIsValidated(true)
        // }
        inputValidation()
    };
    const newCategoryChangeHandler = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewCategory(event.target.value);
    };

    const getStyles = (name: string, categoryName: readonly string[], theme: Theme) => {
        return {
            fontWeight:
                categoryName.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    };


    const CategoriesChangeHandler = (event: SelectChangeEvent<typeof categories>) => {
        const {
            target: { value },
        } = event;
        setCategories(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log('setCategory categories:',categories)
        // if (
        //     title !== '' && author !== '' && categories.length !== 0 && content !== ''
        // ) {
        //     setIsValidated(true)
        // }
        inputValidation()
    };

    const addHandler = (event: { target: any; }) => {

        if (newCategory !== '') {
            let newCategories = categories.concat(newCategory);
            setCategories(newCategories);
        };
        setNewCategory('');
    }
    let excerpt: string;
    if (content.length >= 20) {
        excerpt = content.substr(0, 20);
    } else {
        excerpt = content;
    }
    let author_country = 'Australia';
    let categoriesArr: any[] = [];

    categories.map((category) => {
      return  categoriesArr.push( { "category_name": category });
    })

    console.log('999title:',title)
    console.log('999title type:',typeof title)
    const NewPost = Object.assign(
        {},
        {
            title: title,
            content: content,
            excerpt: excerpt,
            createdAt: createDate?.toString(),
            categories: categoriesArr,
            author_name: author,
            author_country: author_country,
        }

    );
    console.log("NewPost:", NewPost)

    const [createPost, create_post] = useMutation
    // <
        // { createPost: UpdateNewPost },
        // { input: NewPost }
        // const [createPost, create_post] = useMutation<
        // { createPost: UpdateNewPost },
        // { input: NewPost }
    // >
    // (CREATE_POST);
    (CREATE_POST, {
        variables: { input: NewPost },
        refetchQueries: [
            GET_CATEGORIES, // DocumentNode object parsed with gql
            'getCategories' // Query name
        ],
    });
    console.log('create_post:', create_post)

    const createDateOnchange=(newValue: Date | null)=>{
        setCreateDate(newValue);
        if (

            title!==''  && author!==''  && categories.length > 0 && content!=='' &&  newValue!==null
        ) {
            setIsValidated(true)
        }
    }



    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("777NewPost:", NewPost)
        createPost({ variables: { input: NewPost } })
        //  createPost(
        //     {
        //         variables: {
        //             title: title,
        //             content:content,
        //             excerpt:excerpt,
        //             createdAt:createDate,
        //             categories:categoriesArr,
        //             author_name:author,
        //             author_country:author_country,
        //         }
        //     }
        // )
            .then(result => console.log('add result:', result))
            .catch(e => console.log(e));
        // setTitle('');
        // setAuthor('');
        // setContent('');
        // setCreateDate(new Date());
        // setCategories([]);
        // console.log('666createPost():', createPost(            {
        //     variables: {
        //         input: NewPost
        //     }
        // }));
       

    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const { data } = useQuery(GET_CATEGORIES);

    useEffect(() => {
        if (typeof data !== 'undefined') {
            setNames(names => names.concat(data.getCategories));
        };
    }, [data]);

    console.log('validate:',   title!==''  && author!==''  && categories.length > 0 && content!=='' &&  createDate!==null)
    console.log('isValidated:',isValidated)
    return (
        <div>
            < div >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {create_post.loading ? <Alert severity='info'>Submitting...</Alert> : <></>}
                    {(create_post?.called&&create_post.error) ? <Alert severity='error'>{'Submission error!'}</Alert> : <></>}
                    {create_post.data ? <Alert severity='success'>Article Created!</Alert> : <></>}
                </Stack>
            </div >
            <div style={{ marginLeft: '40px' }}>
                <h2 style={{ textAlign: 'center' }}>Management Page</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '50ch' },
                    }}
                    // noValidate
                    autoComplete="off"
                >
                    <div>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="title-input-helper">Title*</InputLabel>
                            <Input
                                id="title-input-helper"
                                value={title}
                                onChange={titleChangeHandler}
                                aria-describedby="title-input-helper-text"
                            />
                            <FormHelperText id="title-input-helper-text">
                                Please input article title
                            </FormHelperText>
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="author-input-helper">Author Name*</InputLabel>
                            <Input
                                id="author-input-helper"
                                value={author}
                                onChange={authorChangeHandler}
                                aria-describedby="author-input-helper-text"
                            />
                            <FormHelperText id="author-input-helper-text">
                                Please input full name
                            </FormHelperText>
                        </FormControl>
                        <FormControl disabled variant="standard">
                            <InputLabel htmlFor="country-disabled">Country</InputLabel>
                            <Input id="country-disabled" value={'Australia'} />
                        </FormControl>
                    </div>
                    <div>
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Category Name*</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    multiple
                                    value={categories}
                                    onChange={CategoriesChangeHandler}
                                    input={<OutlinedInput id="select-multiple-category" label="Category" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))
                                            }
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name: any) => (
                                        <MenuItem
                                            key={name.category_id}
                                            value={name.category_name}
                                            style={getStyles(name.category_name, categories, theme)}
                                        >
                                            {name.category_name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-helperText"
                            label="New Category"
                            value={newCategory}
                            onChange={newCategoryChangeHandler}
                            helperText="Input new category name"
                        />
                        <Box sx={{ '& button': { m: 1 } }}>
                            <div>
                                <Button variant="contained" size="small"
                                    onClick={addHandler}
                                >Create
                                </Button>
                            </div>
                        </Box>
                    </div>

                    <TextField
                        id="content-input"
                        label="Acticle Content*"
                        multiline
                        rows={6}
                        value={content}
                        onChange={contentChangeHandler}
                    />
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="createAt*"
                                value={createDate}
                                // onChange={(newValue: Date | null) => {
                                //     setCreateDate(newValue);
                                //     if (
                                //         // title !== '' && author !== '' && categories.length !== 0 && content !== ''
                                //         title  && author  && categories.length !== 0 && content
                                //     ) {
                                //         setIsValidated(true)
                                //     }
                                // }}
                                onChange={createDateOnchange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    {!isValidated ? (<Stack direction="row" spacing={2}>
                        <Button variant="contained" color="error">
                            Input
                        </Button>
                    </Stack>) :
                        (
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleFormSubmit}
                                >
                                    Submit
                                </Button>

                            </Stack>
                        )
                    }
                </Box>
            </div>
        </div>
    );
};




export default ManagementPage;