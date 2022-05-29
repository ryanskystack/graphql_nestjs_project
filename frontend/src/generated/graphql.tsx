import { gql } from '@apollo/client';

export const ArticlesList = gql`
  query GetAll {
    getAllPosts {
      post_id
      title
    }
  }
`;

export const TenList = gql`
  query GetTen {
    getTenPosts {
      post_id
      title
      excerpt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategories {
      category_id
      category_name
    }
  }
`;

export const GetPostById = gql` 
 query GetPostById($post_id: Number) {
  getPostById(post_id: $post_id){
    post_id
    title
    content
    excerpt
    createdAt
    categories
    author_id
    author_name
    author_country
  }
}
 `;




// export const CREATE_POST = gql`
//   mutation createPost($create_input: CreatePostInput!) {
//     createPost(input: $create_input) {
//       title
//       content
//       excerpt
//       createdAt
//       categories{
//         category_name
//       }[]
//       author_name
//       author_country
//     }
//   }
// `;

export const CREATE_POST = gql`
  mutation createPost($create_input: CreatePostInput!) {
    createPost(input: $create_input) {
      title
      content
      excerpt
      createdAt
      categories
      author_name
      author_country
    }
  }
`;

// export const CREATE_POST = gql`
//   mutation createPost($create_input: CreateInput{
//     title: String
//     content: String
//     excerpt: String
//     # createdAt: DateConstructor
//     createdAt: Date
//     categories: { category_name: string }[]
//     author_name: String
//     author_country: String
//   }) {
//     createPost(input: $create_input) {
//       title
//       content
//       excerpt
//       createdAt
//       categories
//       author_name
//       author_country
//     }
//   }
// `;

// export const CREATE_POST = gql`
//   mutation CreatePost(
//     $title: String!,
//     $content:String!,
//     $excerpt:String!,
//     # $createdAt:Date|null,
//     $createdAt:Date,
//     $categories:{ category_name:String!}[],
//     $category_name:String!,
//     $author_name:String!,
//     $author_country:String!
//   ) {
//     createPost(
//       title: $title,
//       content:$content,
//       excerpt:$excerpt,
//       createdAt:$createdAt,
//       categories:$categories,
//       author_name:$author_name,
//       author_country:$author_country
//     ) {
//       title
//       content
//       excerpt
//       createdAt
//       categories
//       author_name
//       author_country
//       }
//   }
// `;

// export const createPostDocument = gql`
//    mutation createPost(
//      $title: String!
//      $content:String!
//      $excerpt:String!
//      $createdAt:String!
//      $categories:{
//         category_name
//       }[]
//      $author_name:String!
//      $author_country:String!
//    )
// {
//   title
//   content
//   excerpt
//   createdAt
//   category_name
//   author_name
//   author_country

//      }   

// `;





// const defaultOptions = {}
// // export type ArticleListQueryVariables = {
// // { const [key: string]: never; };
// // }

// // export type Query = {
// //   __typename?: 'Query';
// //   articles: string[];
// // };

// export type ArticleListQuery = {
//   __typename?: 'Query';

//     post_id: number,
//     title: string



// };

// export type ArticleQueryVariables = {
//   id: String;
// };

// export type ArticleQuery = {
//   __typename?: 'Query';
//   post_id: number;
//   title: String;
//   content: String;
//   excerpt: String;
//   createdAt: String;
//   category_id: number;
//   category_name: String;
//   author_id: number;
//   author_name: String;
//   author_country: String;
// };

// export type LatestQuery = {
//   __typename?: 'Query';
//   post_id: number;
//   title: String;
//   excerpt: String;
// };

// export type fiveMoreQuery = {
//   __typename?: 'Query';
//   post_id: number;
//   title: String;
//   excerpt: String;
// };

// export type ArticleMutation = {
//   __typename?: 'Mutation';
//   title: String;
//   content: String;
//   excerpt: String;
//   createdAt: String;
//   category_name: String;
//   author_name: String;
//   author_country: String;
// };

// export const ArticleListDocument = gql`
//     query getAllPosts {
//       getAllPosts{
//           post_id
//           title
//       }
//     }
//   `;





// export function useArticleListQuery(baseOptions?: Apollo.QueryHookOptions<ArticleListQuery
// // , ArticleListQueryVariables
// >) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<ArticleListQuery
//   // , ArticleListQueryVariables
//   >(ArticleListDocument, options);
// }
// export function useArticleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<
//   ArticleListQuery
// // , ArticleListQueryVariables
// >) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<ArticleListQuery
//   // , ArticleListQueryVariables
//   >(ArticleListDocument, options);
// }
// export type ArticleListQueryHookResult = ReturnType<typeof useArticleListQuery>;
// export type ArticleListLazyQueryHookResult = ReturnType<typeof useArticleListLazyQuery>;
// export type ArticleListQueryResult = Apollo.QueryResult<ArticleListQuery
// // , ArticleListQueryVariables
// >;





// export const ArticleDocument = gql`
//     query getPostById($id: String!) {

//   post_id(id: $id)
//   title
//   content
//   excerpt
//   createdAt
//   category_id
//   category_name
//   author_id
//   author_name
//   author_country
//   }

//     `;


// export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
// }
// export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
// }
// export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
// export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
// export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;


// export const GetFiveMoreDocument = gql`
//     query getFiveMorePosts {
//   post_id
//   title
//   excerpt

// }
//     `;

// export const GetTenDocument = gql`
//     query getTenPosts {
//   post_id
//   title
//   excerpt

// }
//     `;






// export const createPostDocument = gql`
//    mutation createPost(
//      $title: String!
//      $content:String!
//      $excerpt:String!
//      $createdAt:String!
//      $category_name:String!
//      $author_name:String!
//      $author_country:String!
//    )
// {
//   title
//   content
//   excerpt
//   createdAt
//   category_name
//   author_name
//   author_country

//      }   

// `;
