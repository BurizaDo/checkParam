use to check http request parameters.

usage:
    in router.post/get
    
```js
        var checkParam = require('checkparam');
        router.get('/', function(req, res, next){
            if(!checkParam.checkParam(req, res, 'param1', 'param2', 'param3')){
                return;
            }
            /////your code
        }
```
