'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Like extends Model {
  static getLike(id) {
    return this.findBy('user_id', id);
  }

  static addLike(data) {
    this.create(data);
    return {
      message: 'Like',
      like: data
    };
  }

  static async updateLike(data, id) {
    const like = await this.find(id);

    if (like) {
      like.merge(data);
      await like.save();
      return {
        message: 'Update Success',
        like
      };
    }
  }

  static async deleteLike(id) {
    const like = await this.find(id);
    like.delete();

    return {
      message: 'Unlike',
      like
    };
  }

  posts() {
    return this.belongsTo('App/Models/Post');
  }
}

module.exports = Like;
