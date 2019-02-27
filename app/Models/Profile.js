'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Profile extends Model {
  static getProfile(id) {
    return this.findBy('user_id', id);
  }

  static addProfile(data) {
    return this.create(data);
  }

  static async updateProfile(data, id) {
    const profile = await this.getProfile(id);

    if (profile) {
      profile.merge(data);
      await profile.save();
      return {
        message: 'Update Success',
        profile
      };
    }
  }
}

module.exports = Profile;
