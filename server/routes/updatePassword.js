const router = require("express").Router();
const user = require("../models/User")
const bcrypt = require('bcrypt-nodejs');
//onst repairs = require("../models/Repair")
const authorization = require("../middleware/authorization");
//const { Router } = require("express");

router.post("/api/customer/change", authorization, async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    const user_1 = await user.findOne({_id: req.user}).lean();

    if(!user_1) {
        return res.json({
            "header": {
                "error": 1
            },
            "message": "User doesn't exist!"
        })
    }

    if(await bcrypt.compareSync(currentPassword, user_1.password)) {
        const saltRound = 10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hash = bcrypt.hashSync(newPassword, salt);

        user.findByIdAndUpdate({_id: req.user}, {password: hash}, function(err, docs) {
            if(err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    "header": {
                        "error": 0
                    },
                    "message": "Success!"
                })
            }
        }).lean()
    }
    else {
        return res.json({
            "header": {
                "error": 1
            },
            "message": "Passwords don't match!"
        })
    }
});
module.exports = router;