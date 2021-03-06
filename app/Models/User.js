'use strict';
const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  static addUser(data) {
    return this.create(data);
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  followers() {
    return this.hasMany('App/Models/Follower');
  }

  profile() {
    return this.hasOne('App/Models/Profile');
  }

  posts() {
    return this.hasMany('App/Models/Post');
  }

  // static getUser(id) {
  //   return this.query().select('name')
  // }
}

module.exports = User;
