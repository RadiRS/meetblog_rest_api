'use strict';

const Profile = use('App/Models/Profile');
const { validate } = use('Validator');

class ProfileController {
  // Get profile by user id
  async show({ params: { id } }) {
    try {
      return await Profile.getProfile(id);
    } catch (error) {
      return error;
    }
  }

  // Create profile
  async create({ request }) {
    const rules = {
      full_name: 'required',
      gender: 'required',
      date_of_birth: 'required'
    };

    const messages = {
      'full_name.required': 'Full name is required',
      'gender.required': 'Gender is required',
      'date_of_birth.email': 'Date of birth is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Profile.addProfile(request.all());
    } catch (error) {
      error;
    }
  }

  // Update profile
  async update({ request, params: { id } }) {
    const rules = {
      full_name: 'required',
      gender: 'required',
      date_of_birth: 'required'
    };

    const messages = {
      'full_name.required': 'Full name is required',
      'gender.required': 'Gender is required',
      'date_of_birth.email': 'Date of birth is required'
    };

    const validation = await validate(request.all(), rules, messages);

    if (validation.fails()) {
      return { error: validation._errorMessages[0].message };
    }

    try {
      return await Profile.updateProfile(request.all(), id);
    } catch (error) {
      error;
    }
  }
}

module.exports = ProfileController;

/*
  const profile = await Profile.getProfile(id);
    if (profile) {
    profile.merge(request.all());
    await profile.save();
    return profile;
  }
*/
