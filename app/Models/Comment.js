'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Comment extends Model {
  static addComment(data) {
    return this.create(data);
  }

  static async updateComment(data, id) {
    const comment = await this.find(id);

    if (comment) {
      comment.merge(data);
      await comment.save();
      return {
        message: 'Update Success',
        comment
      };
    }
  }

  static async deleteComment(id) {
    await this.query()
      .where('id', id)
      .delete();

    return {
      message: 'Delete Success'
    };
  }
}

module.exports = Comment;
