'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Post extends Model {
  static getPosts() {
    return this.query()
      .with('users')
      .with('likes')
      .fetch();
  }

  static getPost(id) {
    return this.query()
      .where('id', id)
      .with('users')
      .fetch();
  }

  static addPost(data) {
    return this.create(data);
  }

  static async updatePost(data, id) {
    const post = await this.find(id);

    if (post) {
      post.merge(data);
      await post.save();
      return {
        message: 'Update Success',
        post
      };
    }
  }

  static async deletePost(id) {
    await this.query()
      .where('id', id)
      .delete();

    return {
      message: 'Delete Success'
    };
  }

  users() {
    return this.belongsTo('App/Models/User');
  }

  likes() {
    return this.hasMany('App/Models/Like');
  }
}

module.exports = Post;
