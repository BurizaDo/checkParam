var checkParam = function (){
    if(!arguments || arguments.length <= 2) return false;
    var req = arguments[0];
    var res = arguments[1];
    for(i = 2; i < arguments.length; ++i){
        if(!req.param(arguments[i]) && (!req.body || !req.body[arguments[i]])){
            res.send({error:-99, message:arguments[i] + 'not exist'});
            return false;
        }
    }
    return true;
}

module.exports.checkParam = checkParam;