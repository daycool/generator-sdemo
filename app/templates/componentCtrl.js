define('<%=componentCtrl %>', [
    'angular'
], function(
    angular
) {
    return function(app, elem, attrs, scope) {
        app.controller('<%=componentCtrlName %>', ['$http', '$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'G', '<%=componentServiceName %>', function($http, $rootScope, $scope, $state, $stateParams, $timeout, G, <%=componentServiceName %>) {

            var params = $stateParams;
            var data = $scope.data = {
                name: 'test',
                // name: params.name,
            };

            $scope.submit = function(e){
                var reqData = data || {};
                reqData.e = e.currentTarget;
                
                <%=componentServiceName %>.add(reqData)
                .success(function(resData){
                    if(resData.apistatus === 1){

                    }else{
                        console.log('加载失败');
                    }
                }).error(function(resData){
                    console.log('请求失败');
                });
            }

            
        }]);

    }
});