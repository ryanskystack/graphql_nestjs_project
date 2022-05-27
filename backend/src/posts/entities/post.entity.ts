import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class CategoryItem {
  @Field()
  category_name: string;
}

@ObjectType()
export class PostEntity {
  @Field(() => ID,{ nullable: true })
  readonly post_id: number;
  @Field({ nullable: true })
  readonly title: string;
  @Field({ nullable: true })
  readonly content: string;
  @Field({ nullable: true })
  readonly excerpt: string;
  @Field({ nullable: true })
  readonly createdAt: string;
  @Field(() => ID,{ nullable: true })
  readonly category_id: number;
  @Field({ nullable: true })
  readonly category_name: string;
  // @Field(type => [Category],{ nullable: true })
  // readonly categories: Array<{ category_name: string }>
  @Field(() => ID,{ nullable: true })
  readonly author_id: number;
  @Field({ nullable: true })
  readonly author_name: string;
  @Field({ nullable: true })
  readonly author_country: string;
}

@ObjectType()
export class InputEntity {
  @Field(() => ID,{ nullable: true })
  readonly post_id:number;
  @Field({ nullable: true })
  readonly title: string;
  @Field({ nullable: true })
  readonly content: string;
  @Field({ nullable: true })
  readonly excerpt: string;
  @Field({ nullable: true })
  readonly createdAt: string;
  @Field(() => ID,{ nullable: true })
  readonly category_id: number;
  @Field(type => [CategoryItem],{ nullable: true })
  readonly categories: Array<{ category_name: string }>
  @Field(() => ID,{ nullable: true })
  readonly author_id: number;
  @Field({ nullable: true })
  readonly author_name: string;
  @Field({ nullable: true })
  readonly author_country: string;
}
