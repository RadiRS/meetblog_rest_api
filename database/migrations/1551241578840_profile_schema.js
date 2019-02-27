'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ProfileSchema extends Schema {
  up() {
    this.create('profiles', table => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users');
      table.string('full_name', 125).notNullable();
      table.string('gender', 10).notNullable();
      table.string('date_of_birth').notNullable();
      table.string('avatar', 125);
      table.timestamps();
    });
  }

  down() {
    this.drop('profiles');
  }
}

module.exports = ProfileSchema;
