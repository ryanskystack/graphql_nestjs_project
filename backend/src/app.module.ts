import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PostsResolver } from './posts/posts.resolver';
import { PostsService } from './posts/posts.service';


@Module({
  imports:
    [ConfigModule.forRoot(
      {
        isGlobal: true,
      }
    ),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        debug: true,
        playground: true,
        autoSchemaFile: 'schema.gql',
        tracing: true,
        include: [PostsModule],
      }),
    }),
      PostsModule
    ],
  controllers: [AppController],
  providers: [PostsService, PostsResolver, AppService,],
})
export class AppModule { }
