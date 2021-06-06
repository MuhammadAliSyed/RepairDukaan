const router = require("express").Router();
const user = require("../models/User")
//onst repairs = require("../models/Repair")
//const authorization = require("../middleware/authorization");
//const { Router } = require("express");

router.put("/api/user/updateprofile/:id", (req, res) => {
    const { firstName, lastName, phoneNumber } = req.body;

    user.findByIdAndUpdate(req.params.id, { first_name: firstName, last_name: lastName, phone_number: phoneNumber }, {new: true}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json({
                "first_name": docs.first_name,
                "last_name": docs.last_name,
            })
        }
    }).lean();
});
module.exports = router;