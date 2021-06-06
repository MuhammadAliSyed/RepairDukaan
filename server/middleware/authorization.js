const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = async(req,res, next) => {
    const jwtToken = req.header("token");
    if(!jwtToken){
        console.log('hello')
        return res.status(403).json("Not Authorize");
    }
    try{
        const payload = jwt.verify(jwtToken,process.env.jwtSecret);
        req.user = payload.user;
        console.log(req.user)
        next()
    }
    catch(err){
        console.log(jwtToken)
        console.log(err)
        return res.status(400).json("Not Authorize");
    }
};
