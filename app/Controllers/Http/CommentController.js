'use strict';

const Comment = use('App/Models/Comment');
const { validate } = use('Validator');

class CommentController {
  // Get all comment
  // async comments() {
  //   return await comment.getcomments();
  // }

  // Get comment by user id
  // async show({ params: { id } }) {
  //   try {
  //     return await comment.getcomment(id);
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // Create comment
  async create({ request }) {
    const rules = {
      content: 'required'
    };

    const messages = {
      'content.required': 'Content is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Comment.addComment(request.all());
    } catch (error) {
      return { error: 'Create failed' };
    }
  }

  // Update comment
  async update({ request, params: { id } }) {
    const rules = {
      content: 'required'
    };

    const messages = {
      'content.required': 'Content is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Comment.updateComment(request.all(), id);
    } catch (error) {
      console.log(error);
      return { error: 'Update failed' };
    }
  }

  // Delete comment
  async delete({ params: { id } }) {
    return await comment.deletecomment(id);
  }
}

module.exports = CommentController;
