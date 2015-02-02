/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res){
		var params = req.params.title;
		console.log(params);
		Project.create(params, function(err, project){
			if(err) return next(err);
			if (project){
				res.json(project);
			}
			else {
				res.send(400, 'nothing created');
			}
		})
	}
};

