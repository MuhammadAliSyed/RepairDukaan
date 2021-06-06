const router = require("express").Router();
const user = require("../models/User")
const authorization = require("../middleware/authorization");

router.get("/api/customer/getprofile", authorization, (req, res) => {
	user.findById({ _id: req.user }, function(err, docs) {
		if(err) {
			console.log(err)
		}
		else {
			res.status(200).json({
				"id": docs._id,
				"first_name": docs.first_name,
				"last_name": docs.last_name,
				"date_joined": docs.join_date,
				"phone_number": docs.phone_number[0]
			})
		}
	}).lean();
});

module.exports = router