use to check http request parameters.

usage:

var checkParam = require('checkparam');

in router.post/get

router.get('/', function(req, res, next){

    if(!checkParam.checkParam(req, res, 'param1', 'param2', 'param3')){
    
        return;
        
    }
    /////your code
}
