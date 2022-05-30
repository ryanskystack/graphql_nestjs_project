
const { Sequelize, DataTypes } = require("sequelize");
const DATABASE_URI = "postgres://whktcalcfxaozo:28c1ee0fe107da0d8d192123a003ca8d406adedb1caf64ce6ce0a6bcde6f0a38@ec2-54-164-56-10.compute-1.amazonaws.com:5432/da1si5vp3hl089";
// Passing a connection URI
const db = new Sequelize(DATABASE_URI, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
        keepAlive: true,
    },
    ssl: true,
});

db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Author = db.define(
    'author',
    {
        // Model attributes are defined here
        author_id: {
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false,
            type: DataTypes.INTEGER,
        },
        author_name: {
            type: DataTypes.STRING,
            unique: true
        },

        author_country: DataTypes.STRING
    },
    {
        timestamps: false,
        freezeTableName: true,
        raw: true
    },
);

const Post = db.define(
    'post',
    {
        // Model attributes are defined here
        post_id: {
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false,
            type: DataTypes.INTEGER,
        },
        title: DataTypes.STRING,
        author_id: DataTypes.INTEGER,
        content: DataTypes.STRING,
        excerpt: DataTypes.STRING,
        createdAt: DataTypes.STRING,
    },
    {
        timestamps: false,
        freezeTableName: true,
        raw: true
    },
);

const Category = db.define(
    'category',
    {
        // Model attributes are defined here
        category_id: {
            primaryKey: true,
            autoIncrement: true,
            // allowNull: false,
            type: DataTypes.INTEGER,
        },
        category_name: {
            type: DataTypes.STRING,
            unique: true
        },
    },
    {
        underscored: true,
        timestamps: false,
        freezeTableName: true,
        raw: true
    },
);


const Post_Category = db.define(
    'post_category',
    {
        post_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
    },
    {
        underscored: true,
        timestamps: false,
        freezeTableName: true,
        raw: true
    }
);

// associations can be defined here
Author.hasMany(Post, { foreignKey: 'author_id', as: 'post', });
Post.belongsTo(Author, { foreignKey: 'author_id', as: 'author', });
Post.belongsToMany(Category, { as: 'post-category', through: 'post_category', foreignKey: 'post_id', constraints: false });
Category.belongsToMany(Post, { through: 'post_category', foreignKey: 'category_id', constraints: false });

//generate instances
const pc = Post_Category.findAll({ raw: true });
const authors = Author.findAll({ raw: true });
const categories = Category.findAll({ raw: true });
const posts = Post.findAll({ raw: true });

//ORM with query according to business logic

const getPosts = async (num, index) => {
    return await Post.findAll(
        {
            'attributes': ['post_id', 'title', 'excerpt'], //retrieve titles and excerpts
            'limit': num,    //limit 10 posts
            'offset': index,   //limit 5 posts  but other than the latest 10
            'order': [
                ['createdAt', 'DESC'],
                ['title'],     // sort the posts as data DESC
            ],
            raw: true
        }
    ).then(result => {
        return result;
    });
};

// getPosts(5,10).then(value => {
//     console.log(value);
// })

const getCategories = async () => {
    return await Category.findAll(
        {
            'order': [
                ['category_id'],
            ],
            raw: true
        }
    ).then(result => {
        console.log('getCategories result:', result);
        return result;
    });
};
// getCategories().then(value => {
//     console.log(value);
// })


// const getAllPosts = async () => {

//     return await Post.findAll(
//         {
//             'attributes':
//             {
//                 include: [
//                     [Sequelize.col('post-category.category_id'), 'category_id'],
//                     [Sequelize.col('post-category.category_name'), 'category_name'],
//                     [Sequelize.col('author.author_name'), 'author_name'],
//                     [Sequelize.col('author.author_country'), 'author_country'],
//                 ],
//                 exclude: [
//                 ]
//             },
//             'include': [
//                 {
//                     association: 'post-category',
//                     attributes: [
//                     ],
//                     through: { attributes: [] },
//                     required: false
//                 },
//                 {
//                     'model': 'category',
//                     'attributes': [
//                     ],
//                     all: true,
//                     nested: true,
//                     required: false
//                 },
//                 {
//                     'model': 'author',
//                     'attributes': [
//                     ]
//                 },

//             ],
//             'order': [
//                 ['createdAt', 'DESC'],
//                 ['title'],     // sort the posts as data DESC
//             ],
//             raw: true,

//         }
//     ).then(result => {
//         console.log('allTitles result:', result);
//         return result;
//     });
// };

const getAllPosts = async () => {

    return await Post.findAll(
        {

            'order': [
                ['createdAt', 'DESC'],
                ['title'],     // sort the posts as data DESC
            ],
            raw: true,

        }
    ).then((result) => {
        console.log('allTitles result:', result);
        return result;
    });
};

getAllPosts().then(value => {
    console.log('getAllPosts result:',value);
})

// combine categories for the objects that have the same post_id
const processCategory = (objectArray:any[]) => 
// const processCategory = (objectArray) => 
{
	let postMap = new Map() ;
  for (let i = 0 ; i < objectArray.length ; i++) 
  {
 		let cur = objectArray[i] ;
    // console.log(cur) ; // debug
		if (postMap.has(cur.post_id)) 
    {
    	let exist = postMap.get(cur.post_id);
      exist.categories.push({category_id: cur.category_id, category_name: cur.category_name});
    }
    else
    {
    	cur.categories = [{category_id: cur.category_id, category_name: cur.category_name}];
      delete cur.category_id;
      delete cur.category_name;
      postMap.set(cur.post_id, cur) ; 
    }
  }
  let result = [];
  postMap.forEach(value => {
  	result.push(value) ;
  });
//   console.log('combineArray:',result) ; // debug
  return result;
}



// const getPostById = async (id) => {
const getPostById = async (id:number) => {
    return await Post.findAll(
        {
            'attributes':
            {
                include: [
                    [Sequelize.col('post-category.category_id'), 'category_id'],
                    [Sequelize.col('post-category.category_name'), 'category_name'],
                    [Sequelize.col('author.author_name'), 'author_name'],
                    [Sequelize.col('author.author_country'), 'author_country'],
                ],
                exclude: [
                ]
            },
            'include': [
                {
                    association: 'post-category',
                    attributes: [
                        // 'post_id','categoty_id'
                        // ['category_name']
                    ],
                    through: { attributes: [] },
                    required: false
                },
                {
                    'model': 'category',
                    'attributes': [
                    ],
                    all: true,
                    // nested: true,
                    required: false
                },
                {
                    'model': 'author',
                    'attributes': [
                    ]
                },

            ],
            'where': {
                'post_id': id
            },
            raw: true,

        }
    ).then((result: any) => {
        // ).then((result) => {
            console.log('getPostById result:', result);
       let combinedCategoriesResult= processCategory(result) ;

        console.log('combinedCategoriesResult result:', combinedCategoriesResult);
        return combinedCategoriesResult;
    });
};

// const getPostById = async (id) => {

//     return await Post.findAll(
//                 {
//                     'attributes':
//                     {
//                         include: [
//                             [Sequelize.col('post-category.category_id'), 'category_id'],
//                             [Sequelize.col('post-category.category_name'), 'category_name'],
//                             [Sequelize.col('author.author_name'), 'author_name'],
//                             [Sequelize.col('author.author_country'), 'author_country'],
//                         ],
//                         exclude: [
//                         ]
//                     },
//                     'include': [
//                         {
//                             association: 'post-category',
//                             attributes: [
//                                 // 'post_id','categoty_id'
//                                 // ['category_name']
//                             ],
//                             through: { attributes: [] },
//                             required: false
//                         },
//                         {
//                             'model': 'category',
//                             'attributes': [
//                             ],
//                             all: true,
//                             nested: true,
//                             required: false
//                         },
//                         {
//                             'model': 'author',
//                             'attributes': [
//                             ]
//                         },
        
//                     ],
//                     'where': {
//                         'post_id': id
//                     },
//                     raw: true,
        
//                 }
//     ).then(result => {
//         console.log('getPostById result:', result);
//         return result;
//     });
// };

// getPostById(2).then(value => {
//     console.log('getPostById:',value);
// })

const createPost = async (
    title,
    content,
    excerpt,
    createdAt,
    categoryName,
    authorName,
    anthorCountry
) => {
    //retrive whether Author name existed
    let create_author = await Author.findAll({
        'where': {
            'author_name': authorName
        }
    }).then(result => {
        console.log('createPost result:', result);
        if (result.length === 0) {
            //insert author name & country
            Author.create(
                {
                    'author_name': authorName,
                    'author_country': anthorCountry
                },
            ).then(result => result).catch(err => err);
        } else {
            return '-1';
        }
    }).catch(err => console.log(err));

    let create_post = await Post.findAll({
        'where': {
            'title': title,
            'content': content,
            'excerpt': excerpt,
            'createdAt': createdAt,
        }
    }).then(result => {
        console.log('result:', result);
        if (result.length = 0 || create_author !== '-1') {
            //insert into post table
            create_author.createPost(
                {
                    'title': title,
                    'content': content,
                    'excerpt': excerpt,
                    'createdAt': createdAt,
                },
            );
        } else {
            console.log('category_name existed');
        }
    });

    let create_category = await categoryName.forEach(name => {
        Category.findAll({
            'where': {
                'category_name': name
            }
        }).then(result => {
            if (!result) {
                //insert category
                Category.create(
                    { 'category_name': name }
                );
            } else {
                console.log('category_name existed');
            }
        });
    });

    console.log('created create_author: ' + create_author);
    console.log('created create_post: ' + create_post);
    console.log('created create_category: ' + create_category);
};

module.exports = { db, getCategories, getPosts, getAllPosts, getPostById, createPost };