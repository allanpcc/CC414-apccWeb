'use strict';

/**
 * @ngdoc function
 * @name allancastroApp.controller:HwviewsHw4Ctrl
 * @description
 * # HwviewsHw4Ctrl
 * Controller of the allancastroApp
 */
angular.module('allancastroApp')
  .controller('HwviewsHw4Ctrl', ['$scope', '$http', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      method: 'GET',
      url: "https://tiwhs4uwcl.execute-api.us-east-1.amazonaws.com/dev/characters",
      headers: {'x-api-key': 'plnPrSrfio24uDjIqjmIqaXL5xRYiGis3SGqTqfv'}
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

    $scope.GetCommons = function(){
      var firstCharacterId = $("#character1").val();
      var secondCharacterId = $("#character2").val();
      $("#SeriesList").empty();
      $("#ComicsList").empty();
      $("#latencia").empty();

      var allComicsUrl = "https://tiwhs4uwcl.execute-api.us-east-1.amazonaws.com/dev/common/comics";
      var allSeriesUrl = "https://tiwhs4uwcl.execute-api.us-east-1.amazonaws.com/dev/common/series";
      var t0 = performance.now(); //Inicia cronometro para latencia

      $scope.postCommon(allSeriesUrl, "#SeriesList", firstCharacterId, secondCharacterId, t0);
      $scope.postCommon(allComicsUrl, "#ComicsList", firstCharacterId, secondCharacterId, t0);
    }


    $scope.postCommon = function (url, list, Id1, Id2, t0) {
      $http({
        method: 'PUT',
        url: url,
        data: '{"firstCharacterId": '+Id1+', "secondCharacterId": '+Id2+'}',
        headers: {'x-api-key': 'plnPrSrfio24uDjIqjmIqaXL5xRYiGis3SGqTqfv'}
      }).then(function successCallback(data) {
        //console.log(data.data);
        data = data.data;
        console.log(data);
        for(var i=0; i < data.length; i++){
          $(list).append("<li>"+data[i]+"</li>");
        }
        var t1 = performance.now();
        $("#latencia").append("<li>"+list+": "+((t1-t0)/1000)+" s"+"</li>")
      }, function errorCallback(data) {
        $(list).append("<li> Access Denied </li>");
      });
    }



  }]);
