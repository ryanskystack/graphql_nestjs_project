import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { InputEntity, PostEntity } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { ID, Int } from 'type-graphql';




@Resolver(of => PostEntity)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  //get 10 latests
  @Query(returns => [PostEntity])
  async getTenPosts(): Promise<PostEntity[]> {
    console.log(this.postsService.getPosts(10, 0));
    return await this.postsService.getPosts(10, 0);
  }

  //get all 
  @Query(() => [PostEntity])
  async getCategories(): Promise<PostEntity[]> {
    return await this.postsService.getCategories();
  };

  @Query(() => [PostEntity])
  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postsService.getAllPosts();
  };

  //search one
  @Query(() => PostEntity)
  async getPostById(@Args('post_id', { type: () => ID }) post_id: number): Promise<PostEntity[]> {
     console.log("byID:",await this.postsService.getPostById(post_id))
    return await this.postsService.getPostById(post_id);
  }

  //add new one
  @Mutation(() => InputEntity)
  async createPost(@Args('input') createPostInput: CreatePostInput): Promise<InputEntity> {
    console.log("mutation:",await this.postsService.createPost(createPostInput))
    return await this.postsService.createPost(createPostInput);
  };

}
