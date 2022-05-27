import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
// const { db } = require("../../database/models/post.provider");

@Module({
  // imports: [db],
  providers: [PostsResolver, PostsService],
})
export class PostsModule { }
