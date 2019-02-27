'use strict';

const Like = use('App/Models/Like');

class LikeController {
  // Create like
  async create({ request }) {
    const { user_id } = request.post();

    try {
      const like = await Like.getLike(user_id);

      if (like) {
        // return await Like.updateLike(request.all(), like.id);
        return await Like.deleteLike(like.id);
      }
      return await Like.addLike(request.all());
    } catch (error) {
      return { error: 'Create failed' };
    }
  }
}

module.exports = LikeController;
