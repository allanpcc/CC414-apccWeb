'use strict';

/**
 * @ngdoc function
 * @name allancastroApp.controller:HwviewsHw4Ctrl
 * @description
 * # HwviewsHw4Ctrl
 * Controller of the allancastroApp
 */
angular.module('allancastroApp')
  .controller('HwviewsHw4Ctrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      method: 'GET',
      url: "https://tiwhs4uwcl.execute-api.us-east-1.amazonaws.com/dev/characters"
    }).then(function successCallback(data) {
      //console.log(data.data);
      data=data.data[0];
      console.log(data)
      for(var i=0; i < data.length; i++) {
        $("#character1").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
        $("#character2").append("<option value='"+data[i].id+"'>"+data[i].name+"</option>");
      }
    }, function errorCallback(data) {
    });
/*    $http({
      method: 'POST',
      url: "https://tiwhs4uwcl.execute-api.us-east-1.amazonaws.com/dev/common/comics"
    })*/

   /* var data = {"results": [
      {"name": "Spiderman", "id": "55", "comics": "Spiderman 1", "series": "Spiderman"},
      {"name": "Ironman", "id": "56", "comics": "Ironman 1", "series": "Ironman"},
      {"name": "Stan Lee", "id": "57", "comics": ["Spiderman 1", "Ironman 1"], "series": ["Spiderman", "Ironman"]},
      {"name": "Venom", "id": "58", "comics": "Spiderman 1", "series": "Spiderman"}
    ]}*/







  });
