/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	username: {
  		type: 'string',
  		required: true
  	},
  	email: {
      type: 'string',
      unique: true,
      required: true,
      email: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    },
    projects: {
    	collection: 'project',
    	via: 'user'
    }
  }
  
};

