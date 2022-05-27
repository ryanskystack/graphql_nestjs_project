// import { printSchema } from "graphql";

// const pcs=[
//     { post_id: 1, category_id: 2 },
//     { post_id: 1, category_id: 18 },
//     { post_id: 1, category_id: 19 },
//     { post_id: 2, category_id: 3 },
//     { post_id: 2, category_id: 5 },
//     { post_id: 2, category_id: 6 },
//     { post_id: 2, category_id: 7 },
//     { post_id: 2, category_id: 12 },
//     { post_id: 2, category_id: 13 },
//     { post_id: 2, category_id: 14 },
//     { post_id: 3, category_id: 15 },
//     { post_id: 4, category_id: 20 },
//     { post_id: 20, category_id: 13 },
//     { post_id: 21, category_id: 14 },
//     { post_id: 22, category_id: 5 },
//     { post_id: 23, category_id: 6 },
//     { post_id: 24, category_id: 7 },
//     { post_id: 25, category_id: 8 },
//     { post_id: 26, category_id: 9 },
//     { post_id: 27, category_id: 10 },
//     { post_id: 28, category_id: 5 },
//     { post_id: 29, category_id: 11 },
//     { post_id: 30, category_id: 12 }
//   ]

//   const categories=[
//     { category_id: 2, category_name: 'sports' },
//     { category_id: 3, category_name: 'music' },
//     { category_id: 4, category_name: 'science' },
//     { category_id: 5, category_name: 'fashion' },
//     { category_id: 6, category_name: 'travel' },
//     { category_id: 7, category_name: 'geography' },
//     { category_id: 8, category_name: 'history' },
//     { category_id: 9, category_name: 'technology' },
//     { category_id: 10, category_name: 'math' },
//     { category_id: 11, category_name: ' literature' },
//     { category_id: 12, category_name: 'food' },
//     { category_id: 13, category_name: 'gourmet' },
//     { category_id: 14, category_name: 'city' },
//     { category_id: 15, category_name: 'biology' },
//     { category_id: 16, category_name: 'finance' },
//     { category_id: 17, category_name: 'economy' },
//     { category_id: 18, category_name: 'soccer' },
//     { category_id: 19, category_name: 'swimming' },
//     { category_id: 20, category_name: 'shopping' }
//   ]

//   const posts=[
//     {
//       post_id: 1,
//       title: 'hello world',
//       author_id: 2,
//       content: '"<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>',
//       excerpt: 'Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus ',
//       createdAt: '1999-01-01'
//     },
//     {
//       post_id: 2,
//       title: 'welcome',
//       author_id: 2,
//       content: '<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>',
//       excerpt: 'Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus.',
//       createdAt: '2021-10-27'
//     },
//     {
//       post_id: 23,
//       title: 'hellooooo',
//       author_id: 1,
//       content: 'Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti',
//       excerpt: 'Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti',
//       createdAt: '2018-07-15'
//     },
//     {
//       post_id: 24,
//       title: 'There',
//       author_id: 2,
//       content: 'pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       excerpt: 'pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient pellen',
//       createdAt: '2021-06-30'
//     },
//     {
//       post_id: 25,
//       title: 'animal world',
//       author_id: 4,
//       content: 'Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras ',
//       excerpt: 'Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras ',
//       createdAt: '2021-09-30'
//     },
//     {
//       post_id: 26,
//       title: 'soccer club',
//       author_id: 1,
//       content: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       excerpt: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       createdAt: '2021-10-08'
//     },
//     {
//       post_id: 3,
//       title: 'Beauty',
//       author_id: 1,
//       content: '<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>',
//       excerpt: 'Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor ',
//       createdAt: '2020-05-18'
//     },
//     {
//       post_id: 4,
//       title: 'finance',
//       author_id: 1,
//       content: '<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>',
//       excerpt: 'Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. ',
//       createdAt: '2018-06-27'
//     },
//     {
//       post_id: 20,
//       title: 'Time',
//       author_id: 4,
//       content: 'Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit ',
//       excerpt: 'consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis ',
//       createdAt: '2020-08-01'
//     },
//     {
//       post_id: 21,
//       title: 'Space',
//       author_id: 5,
//       content: 'Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat v',
//       excerpt: 'Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat v',
//       createdAt: '2021-10-20'
//     },
//     {
//       post_id: 22,
//       title: 'World Cup',
//       author_id: 5,
//       content: 'pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit ',
//       excerpt: 'pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibu',
//       createdAt: '2019-05-10'
//     },
//     {
//       post_id: 27,
//       title: 'music',
//       author_id: 4,
//       content: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       excerpt: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       createdAt: '2021-03-30'
//     },
//     {
//       post_id: 28,
//       title: 'Coffee',
//       author_id: 4,
//       content: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       excerpt: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       createdAt: '2021-10-12'
//     },
//     {
//       post_id: 29,
//       title: 'Kids',
//       author_id: 5,
//       content: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       excerpt: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       createdAt: '2021-05-10'
//     },
//     {
//       post_id: 30,
//       title: 'Ocean',
//       author_id: 2,
//       content: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       excerpt: 'risque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non frin',
//       createdAt: '2020-01-10'
//     },
//     {
//       post_id: 33,
//       title: 'Dream',
//       author_id: 18,
//       content: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       excerpt: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       createdAt: '2021-09-10'
//     },
//     {
//       post_id: 34,
//       title: 'Dream',
//       author_id: 19,
//       content: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       excerpt: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       createdAt: '2021-09-10'
//     },
//     {
//       post_id: 35,
//       title: 'Dream',
//       author_id: 20,
//       content: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       excerpt: 'equat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellen',
//       createdAt: '2021-09-10'
//     }
//   ];


// //   pcs.map((pc)=>{

// //     })
    
// //   (post[i])=>{
// // return pc.filter((post)=>post[i].post_id===pc[i].post_id)
//   }  

