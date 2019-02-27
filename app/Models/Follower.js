'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Follower extends Model {
  static getFollower(id) {
    return this.findBy('user_id', id);
  }

  static addFollower(data) {
    return this.create(data);
  }

  users() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Follower;
