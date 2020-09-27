const config = require ('config');
const jwt = require ('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    //Check token
    if(!token) 
    return res.status(401).json({msg: 'Unauthorized - No token'})

    try {
        //verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        //Add user from payload
        req.user = decoded;
        next();    
    } catch (error) {
        res.status(400).status({msg: "Invalid token"})       
    }
}

module.exports = auth;
