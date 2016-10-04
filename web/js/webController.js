/**
 * Created by David on 2016-08-17.
 */

angular.module('myApp',['PCFactory'])
    .constant("CONFIG",{
//        host: "http://121.199.75.153:9909",//Ourway服务器地址(必须，不然会出现连接服务器失败错误)
        host: "http://192.168.1.101:9909",//本机测试地址(可变)
        version:'1.0.0'//版本
    })
    .controller('new1Ctrl',function($scope,photo) {

        $scope.name = "John Doe";
        photo.getAllInfo({},function(data){

            var fPhoto = [];
            for(var i=0;i<data.data.length;i++ ){
                var new_1item = {
                    id: data.data[i].id,
                    myName: data.data[i].myName,
                    friendPhoto: {
                        type:'image/png',
                        data:data.data[i].friendPhoto
                    },
                    sayMe: data.data[i].sayMe,
                    sayWords: data.data[i].sayWords,
                    knowTime: data.data[i].knowTime,
                    friendName: data.data[i].friendName
                };
                fPhoto.push(new_1item);
//                var id = .id;
//                var myName = data.data[i].myName;
//                var sayMe = data.data[i].sayMe;
//                var sayWords = data.data[i].sayWords;
//                var knowTime = data.data[i].knowTime;
//                var friendName = data.data[i].friendName;
                var friendPhoto = new Blob([data.data[i].friendPhoto], {
                    type: 'image/png'
                });
            }
            $scope.names = fPhoto;

        });



    });
