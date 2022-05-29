import { ObjectType, Field, ID,createUnionType } from '@nestjs/graphql';

// @ObjectType()
// class CategoryItem {
//   @Field({ nullable: true })
//   category_id: number;
//   @Field({ nullable: true })
//   category_name: string;
// }

// @ObjectType()
// class CategoryId {
//   @Field({ nullable: true })
//   category_id: number;
// }

// @ObjectType()
// class CategoryName {
//   @Field({ nullable: true })
//   category_name: string;
// }


@ObjectType()
 class CategoryItem {
  @Field({ nullable: true })
  category_id: number;

  @Field({ nullable: true })
  category_name: string;
}

// @ObjectType()
// class CategoryItem {
//   @Field({ nullable: true })
//   categories: [CategoryId, CategoryName]
// }

// export const CategoryItem = createUnionType({
//   name: 'CategoryItem',
//   types: () => [CategoryId, CategoryName] ,
// });

// const CategoryItem = categoryItemType({
//   name: 'CategoryItem',
//   types: () => [CategoryId, CategoryName] as const,
// });

// @ObjectType()
// class CategoryItem {
//   @Field({ nullable: true })
//   category_id: number;
//   @Field({ nullable: true })
//   category_name: string;
// }

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
  // @Field(() => ID,{ nullable: true })
  // readonly category_id: number;
  // @Field({ nullable: true })
  // readonly category_name: string;
  // @Field(type => [],{ nullable: true })
  // readonly categories: Array<{ category_id: number, category_name: string}>
  @Field(returns => [CategoryItem],{ nullable: true })
  readonly categories: Array<typeof CategoryItem>
  // readonly categories:CategoryItem[]
  //  readonly categories:[]
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
  // @Field(() => ID,{ nullable: true })
  // readonly category_id: number;
  @Field(returns => [CategoryItem],{ nullable: true })
  readonly categories: Array<typeof CategoryItem>
  // readonly categories: Array<{ CategoryItem: any }>
  // readonly categories:CategoryItem[]
  // readonly categories: Array<typeof CategoryItem>
  // @Field(type => [CategoryItem],{ nullable: true })
  // // readonly categories: Array<{ CategoryItem: any }>；
  // readonly categories:CategoryItem[]
  @Field(() => ID,{ nullable: true })
  readonly author_id: number;
  @Field({ nullable: true })
  readonly author_name: string;
  @Field({ nullable: true })
  readonly author_country: string;
}
// function categoryItemType(arg0: { name: string; types: () => readonly [typeof CategoryId, typeof CategoryName]; }) {
//   throw new Error('Function not implemented.');
// }

