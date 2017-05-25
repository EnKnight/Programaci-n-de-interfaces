'use strict';

/**
 * @ngdoc service
 * @name proyectoFinalApp.api
 * @description
 * # api
 * Factory in the proyectoFinalApp.
 */
angular.module('proyectoFinalApp')
  .factory('api', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      signIn: function (login, success, failure) {
        var apiReq = {
            method: 'POST',
            url: route + '/api/login',
            headers: {
                'Content-Type': "application/json"
            },
            data: {
                username: login.email,
                password: login.password
            }
        };

        // var chronosReq = {
        //     method: 'POST',
        //     url: 'https://ondecode-chronos.herokuapp.com/authentication/authenticate',
        //     headers: {
        //         'Content-Type': "application/json"
        //     },
        //     data: {
        //         email: login.email,
        //         password: login.password
        //     }
        // };

        // $http(apiReq).then(function (response) {
        //     console.log(response);
        //     User.setUser(response.data);
        //     $cookies.put('id', response.data.id);
        //     return $http(chronosReq);
        // }).then(function (response) {
        //     console.log('Logged in from chronos');
        //     token = response.data.auth_token;
        //     $cookies.put('token', token);
        //     success(response.data);
        // }).catch(function (error) {
        //     console.log('error', error);
        //     failure(error);
        // });
      }
    };
  });
