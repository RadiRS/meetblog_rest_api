'use strict';

const Follower = use('App/Models/Follower');

class FollowerController {
  // Get all follower by user id
  async show({ params: { id } }) {
    try {
      return await Follower.getFollower(id);
    } catch (error) {
      return error;
    }
  }

  // Create follower
  async create({ request }) {
    try {
      return await Follower.addFollower(request.all());
    } catch (error) {
      return { error: 'Create failed' };
    }
  }
}

module.exports = FollowerController;
