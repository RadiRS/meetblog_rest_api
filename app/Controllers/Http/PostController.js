'use strict';

const Post = use('App/Models/Post');
const { validate } = use('Validator');

class PostController {
  // Get post by user id
  async show({ params: { id } }) {
    try {
      return await Post.getPost(id);
    } catch (error) {
      return error;
    }
  }

  // Create post
  async create({ request }) {
    const rules = {
      title: 'required',
      slug: 'required',
      content: 'required'
    };

    const messages = {
      'title.required': 'Title is required',
      'slug.required': 'Slug is required',
      'content.required': 'Content is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Post.addPost(request.all());
    } catch (error) {
      return { error: 'Create failed' };
    }
  }

  // Update post
  async update({ request, params: { id } }) {
    const rules = {
      title: 'required',
      slug: 'required',
      content: 'required'
    };

    const messages = {
      'title.required': 'Title is required',
      'slug.required': 'Slug is required',
      'content.required': 'Content is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Post.updatePost(request.all(), id);
    } catch (error) {
      return { error: 'Update failed' };
    }
  }

  // Delete post
  async delete({ params: { id } }) {
    return await Post.deletePost(id);
  }
}

module.exports = PostController;
