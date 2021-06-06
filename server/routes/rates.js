const router = require("express").Router()
let Rates = require("../models/Rates")

router.post('/api/rates/add', async (req, res) => {
    try {
        const {repair_type, rate} = req.body
        const rateExist = await Rates.findOne({repair_type})

        if (rateExist) {
            res.status(401).json({
                "header" : {
                    "error": 1,
                    "message": "Repair Type already exists!"
                }
            })
        }

        let newRate = await Rates.create({
            "repair_type": repair_type,
            "rateOfRepair": rate
        })
        res.status(200).json({
            "header": {
                "error": 0,
                "message": "Successfully added!"
            }
        })
    }
    catch (error) {
        res.status(500).json({
            "header": {
                "error": 1,
                "message": error
            }
        })
    }
})

router.get('/api/rates/get', async (req, res) => {
    Rates.find({}, function (error, rates) {
        if (error) {
            res.status(500).json({
                "header": {
                    "error": 1,
                    "message": error
                }
            })
        }
        else {
            res.status(200).json({
                "header": {
                    "error": 0,
                    "message": "Success"
                },
                "data": {
                    rates
                }
            })
        }
    })
})

module.exports = router
