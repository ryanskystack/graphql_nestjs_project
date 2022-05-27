import { InputType, Field } from '@nestjs/graphql';

@InputType()
class Category {
  @Field()
  category_name: string;
}


@InputType()
export class CreatePostInput {
  @Field()
  readonly title: string;
  @Field()
  readonly content: string;
  @Field()
  readonly excerpt: string;
  @Field()
  readonly createdAt: string;
  @Field(type => [Category])
  readonly categories: Array<{ category_name: string }>
  @Field()
  readonly author_name: string;
  @Field()
  readonly author_country: string;
}
