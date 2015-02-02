/* fetch if user is logged in 
 and allows user else throw error 403
*/
module.exports = function(req, res){
	if(req.session.user){
		req.params.user = req.session.user

		console.log(req.params.user);
	} else {
		res.send("Forbidden Access", 403);
	}
}