const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next)=>{
        try{
            const { authorization } = req.headers;
            // (asi nos manda desde headers) Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMmIzY2E2ZmY0MjI4MzY5Y2Q1MzZlNiIsImVtYWlsIjoiNTU1QGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiI1NTUiLCJleHAiOjE1OTY3NTMzNDcsImlhdCI6MTU5Njc0OTc0N30.nUMQMnCwyKU4VEpt99l885cvS9nqA4bZbd9vRwAviqs
            // authorization.split -> ['Bearer',  eyJhbGci]
            const token = authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.decoded = decoded;
            next();
        }catch(err){
            res.status(401).json({ message: 'Auth error', err })
        }
    },
};