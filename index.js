function simpleCallbackHell() {
  console.log("Dastur boshlandi...");
  
  setTimeout(function() {
    console.log("Loading users...!");
    
    const users = [
      { id: 1, name: "Ali" },
      { id: 2, name: "Vali" }
    ];
    console.log(`Found ${users.length} users`);
    
    setTimeout(function() {
      console.log("Loading posts...!");
      
      const posts = [
        { id: 1, title: "Birinchi post", userId: 1 },
        { id: 2, title: "Ikkinchi post", userId: 1 }
      ];
      console.log(`Found ${posts.length} posts`);
      
      setTimeout(function() {
        console.log("Loading comments...!");
        
        const comments = [
          { id: 1, text: "Yaxshi!", postId: 1 },
          { id: 2, text: "Ajoyib!", postId: 1 }
        ];
        console.log(`Found ${comments.length} comments`);
        
        setTimeout(function() {
          console.log("Done!");
          console.log(`Jami: ${users.length} user, ${posts.length} post, ${comments.length} comment`);
        }, 1000);
        
      }, 1000);
      
    }, 1000);
    
  }, 1000);
}

simpleCallbackHell();





// function getUsersAPI() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         { id: 1, name: 'Ali' },
//         { id: 2, name: 'Vali' },
//         { id: 3, name: 'Hasan' }
//       ];
//       resolve(users);
//     }, 500);
//   });
// }

// function getPostsAPI(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const allPosts = [
//         { id: 1, userId: 1, title: 'Post 1' },
//         { id: 2, userId: 1, title: 'Post 2' },
//         { id: 3, userId: 1, title: 'Post 3' },
//         { id: 4, userId: 1, title: 'Post 4' },
//         { id: 5, userId: 1, title: 'Post 5' },
//         { id: 6, userId: 1, title: 'Post 6' },
//         { id: 7, userId: 2, title: 'Post 7' }
//       ];
//       const userPosts = allPosts.filter(post => post.userId === userId);
//       resolve(userPosts);
//     }, 400);
//   });
// }

// getUsersAPI()
//   .then(users => {
//     console.log('1. Userlar olindi:', users.length);
//     const firstUserId = users[0].id;
//     return getPostsAPI(firstUserId); 
//   })
//   .then(posts => {
//     console.log('2. Postlar olindi:', posts.length);
    
//     const firstFive = posts.slice(0, 5);
//     console.log('\n3. Birinchi 5 ta post:');
//     firstFive.forEach((post, i) => {
//       console.log(`   ${i + 1}. ${post.title}`);
//     });
    
//     return firstFive.length;
//   })
//   .then(count => {
//     console.log(`\n4. ${count} ta post ko'rsatildi`);
//   })
//   .catch(error => {
//     console.error('Xato:', error); 
//   });






// const data = {
//   users: ['Ali', 'Vali', 'Hasan', 'Husan'],
//   posts: ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6'],
//   comments: ['Comment 1', 'Comment 2', 'Comment 3', 'Comment 4', 'Comment 5', 'Comment 6', 'Comment 7']
// };

// function fetchUsers() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Users fetched');
//       resolve(data.users);
//     }, 1000);
//   });
// }

// function fetchPosts() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Posts fetched');
//       resolve(data.posts);
//     }, 800);
//   });
// }

// function fetchComments() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Comments fetched');
//       resolve(data.comments);
//     }, 600);
//   });
// }


// Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
//   .then(([users, posts, comments]) => {
//     console.log(`Users: ${users.length}`);
//     console.log(`Posts: ${posts.length}`);
//     console.log(`Comments: ${comments.length}`);
//   })
//   .catch(error => {
//     console.error('Xato:', error);
//   });