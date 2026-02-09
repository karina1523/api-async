// function startLoading() {
//   console.log("Dastur boshlandi...");
  
//   setTimeout(function() {
//     console.log("Loading users...");
    
//     setTimeout(function() {
//       console.log("Loading posts...");
      
//       setTimeout(function() {
//         console.log("Done!");
//         console.log("Barcha ishlar yakunlandi!");
//       }, 1000);
      
//     }, 1000);
    
//   }, 1000);
// }

// startLoading();




// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then(users => {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
//   })
//   .then(res => res.json())
//   .then(posts => {
//     const firstFive = posts.slice(0, 5);
//     console.log('First 5 posts:');
//     firstFive.forEach(post => console.log(post.title));
//     return firstFive;
//   })
//   .catch(error => console.error('Xato:', error));






// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Promise.all([
//   fetch(`${BASE_URL}/users`).then(res => res.json()),
//   fetch(`${BASE_URL}/posts`).then(res => res.json()),
//   fetch(`${BASE_URL}/comments`).then(res => res.json())
// ])
// .then(([users, posts, comments]) => {
  
//   console.log(`Users: ${users.length}`);
//   console.log(`Posts: ${posts.length}`);
//   console.log(`Comments: ${comments.length}`);
  
//   return { users, posts, comments }; 
// })
// .then(data => {
//   console.log('Jami ma\'lumotlar:', {
//     users: data.users.length,
//     posts: data.posts.length,
//     comments: data.comments.length
//   });
// })
// .catch(error => {
//   console.error('Xato yuz berdi:', error.message);
// });