import { constants } from "../constants.js";

//its a middleware which handle error
const errorhandler = ((err, req, res, next) => {
    const statuscode = res.statuscode ? res.statuscode : 500
    switch (statuscode) {

        case constants.VALIDATION_ERROR:
            res.json({ 
            title: "validation failed", 
            massage: err.massage, 
            stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:
            res.json({ 
            title: "not found", 
            massage: err.massage, 
            stackTrace: err.stack })
            break;
        
        case constants.FORBIDDEN:
            res.json({ 
            title: "FORBIDDEN", 
            massage: err.massage, 
            stackTrace: err.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ 
            title: "UNAUTHORIZED", 
            massage: err.massage, 
            stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ 
            title: "SERVER_ERROR", 
            massage: err.massage, 
            stackTrace: err.stack })
            break;
        default:
            console.log("no error");
            break;
    }
    res.json({ title: "not found", massage: err.massage, stackTrace: err.stack })

})

export { errorhandler }