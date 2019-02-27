'use strict';

const Route = use('Route');

// Router Grouped
Route.group(() => {
  // Users
  Route.get('user/self/:id', 'UserController.self').middleware('auth');
  Route.post('user/register', 'UserController.register');
  Route.post('user/login', 'UserController.login');

  // User Profile
  Route.get('user/self/profile', 'ProfileController.show').middleware('auth');
  Route.get('user/profile/:id', 'ProfileController.show').middleware('auth');
  Route.post('user/profile', 'ProfileController.create').middleware('auth');
  Route.patch('user/profile/:id', 'ProfileController.update').middleware(
    'auth'
  );

  // Posts2
  Route.get('posts', 'PostController.posts').middleware('auth');
  Route.get('post/:id', 'PostController.show').middleware('auth');
  Route.patch('post/:id', 'PostController.update').middleware('auth');
  Route.post('post', 'PostController.create').middleware('auth');
  Route.delete('post/:id', 'PostController.delete').middleware('auth');

  // Likes
  Route.post('like', 'LikeController.create').middleware('auth');
}).prefix('api/v1');
