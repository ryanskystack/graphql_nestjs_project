import { InputType, Field } from '@nestjs/graphql';

@InputType()
class Category {
  @Field()
  category_name: string;
}


@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field()
  content: string;
  @Field()
  excerpt: string;
  @Field()
  createdAt: string;
  @Field(returns => [Category])
  categories: Array<typeof Category>;
  // @Field(returns => [Category])
  // // readonly categories: Array<{ category_name: string }>
  // categories: [Category]
  @Field()
  author_name: string;
  @Field()
  author_country: string;
}

@InputType()
export class InputEntity {
  @Field()
  title: string;
  @Field()
  content: string;
  @Field()
  excerpt: string;
  @Field()
  createdAt: string;
  @Field(returns => [Category])
  categories: Array<typeof Category>;
  @Field()
  author_name: string;
  @Field()
  author_country: string;
}
