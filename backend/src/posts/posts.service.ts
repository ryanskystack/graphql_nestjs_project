import { Injectable } from '@nestjs/common';

//import ORM of methods for service
const { getPosts, getAllPosts, getPostById, createPost,getCategories } = require("../../database/models/post.provider");

@Injectable()
export class PostsService {

  //define ORM objects
  // constructor( private databaseModule: typeof DatabaseModule) {}
  // constructor(
  //   @Inject('PostsRepository') private readonly postsRepository: typeof Post
  // ) { }

  
  // constructor(private readonly postModule: Type<any>) {} 

  getCategories:any=getCategories;
  getPosts: any = getPosts;
  getAllPosts: any = getAllPosts;
  getPostById: any = getPostById;
  createPost: any = createPost;

}
