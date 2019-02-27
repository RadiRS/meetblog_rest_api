'use strict';

const Route = use('Route');

// Router Grouped
Route.group(() => {
  // Users
  Route.post('user/register', 'UserController.register');
  Route.post('user/login', 'UserController.login');

  Route.get('user/self', 'UserController.show').middleware('auth');
  Route.get('user/self/profile', 'ProfileController.show').middleware('auth');

  // Route.get('user/:id', 'UserController.show');

  Route.patch('users/:id', 'UserController.update');
  Route.get('users/user', 'UserController.profile');
  Route.get('users/user/posts', 'UserController.show');

  // Posts
}).prefix('api/v1');
