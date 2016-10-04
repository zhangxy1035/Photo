/**
 * Created by David on 2016-08-17.
 */

angular.module('PCMapInput',['PCFactory'])
    .constant("CONFIG",{
//        host: "http://121.199.75.153:9909",//Ourway服务器地址(必须，不然会出现连接服务器失败错误)
        host: "http://192.168.1.101:9909",//本机测试地址(可变)
        version:'1.0.0'//版本
    })
    .controller('new1Ctrl',function($scope,photo) {

        photo.getAllInfo({},function(data){
            for(var i=0;i<data.data.length;i++ ){

            }

        });



    });
