var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': '8noYLiJ3WeWAODPNRgAWhX5mqlBrtnpi7fxpnpEr', 'X-Parse-REST-API-Key': 's2GBcwxKApjNWb3WSXjyyJn4BQcHrtVyoZbut8kJ'};
            return config;
        }
    };
});