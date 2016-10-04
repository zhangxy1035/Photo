/**
 * Created by David on 2016-08-20.
 */

angular.module('PCFactory',[])
    .factory('photo',function($http,CONFIG){

        var getAllInfo = function (query,success) {
            $http.post(CONFIG.host + '/getAllInfo',query)
                .success(function(data){
                    success(data);
                });
        };
        return {
            getAllInfo : getAllInfo
        };
    });