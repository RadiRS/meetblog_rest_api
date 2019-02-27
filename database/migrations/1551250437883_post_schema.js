'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PostSchema extends Schema {
  up() {
    this.create('posts', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table.string('title', 125).notNullable();
      table.text('slug').notNullable();
      table.text('content').notNullable();
      table.string('img_content', 125);
      table.integer('status').notNullable();
      table.integer('type').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('posts');
  }
}

module.exports = PostSchema;
