define('<%=componentService %>', [
    'angular'
], function(angular) {
    return function(app, elem, attrs, scope) {
        app.factory('<%=componentServiceName %>', ['$rootScope', '$http', 'G', function($rootScope, $http, G) {
            var urlMaps = {
                get: '/<%=componentName %>/get',
                add: '/<%=componentName %>/add',
                del: '/<%=componentName %>/del',
                update: '/<%=componentName %>/update'
            };
            return {
                get: function(opts) {
                    opts.url = urlMaps.get;
                    opts = G.getReqOpts(opts);
                    return $http(opts);                     
                },
                add: function(opts) {
                    opts.url = urlMaps.add;
                    opts = G.getReqOpts(opts);
                    return $http(opts);                     
                },
                del: function(opts) {
                    opts.url = urlMaps.del;
                    opts = G.getReqOpts(opts);
                    return $http(opts);                     
                },
                update: function(opts) {
                    opts.url = urlMaps.update;
                    opts = G.getReqOpts(opts);
                    return $http(opts);                     
                }
            };
        }]);
    }
});