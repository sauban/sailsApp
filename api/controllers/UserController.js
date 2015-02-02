/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 login: function (req, res) {
   		var email = req.query.email;
   		var password = req.query.password;

   		console.log(email + ", " + password)

   		if(!email && !password){
   			return res.send('invalid entry')
   		} else {
   		
   		User.findOneByEmail(email).populate('projects').exec(function (err, user) {
	      if (err) res.send('DB error');

	      if(user) {
	        if(err) return res.send('error');

	        if (user.password === password) {
	        	req.session.user = user.id;
	        	res.send(user);
	        } else {
	        	if (req.session.user) req.session.user = null;
	        	res.send("invalid password/email combination")
	        }
	        
	      } else {
	        res.send("User Not found");
	      }

	      });
   	}


	    
	  },

	  create: function(req,res){
	  	var params = req.params.all();
			User.create(params, function(err, user){
				if(err) return next(err);
				res.status(201);
				res.json(user);
			});
	  },


	  find: function(req, res){
	  	User.find().exec(function(err, users){
	  		if(err) return err;

	  		return res.json(users);
	  	})
	  } 
};

