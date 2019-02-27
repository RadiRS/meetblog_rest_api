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
  Route.get('user/profile/:id', 'ProfileController.show');
  Route.post('user/profile', 'ProfileController.create').middleware('auth');
  Route.patch('user/profile/:id', 'ProfileController.update').middleware(
    'auth'
  );
  // Posts
  Route.post('post', 'PostController.create').middleware('auth');
  // Route.patch('users/:id', 'UserController.update');
  // Route.get('users/user', 'UserController.profile');
  // Route.get('users/user/posts', 'UserController.show');

  // Posts
}).prefix('api/v1');
