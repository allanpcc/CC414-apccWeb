'use strict';

/**
 * @ngdoc function
 * @name allancastroApp.controller:PerformancechartCtrl
 * @description
 * # PerformancechartCtrl
 * Controller of the allancastroApp
 */
angular.module('allancastroApp')
  .controller('PerformancechartCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var trace1 ={
      x:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      y:[100, 100, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0],
      type: 'scatter'
    };

    var data = [trace1];
    var layout = {
      title:'Homework Chart',
      xaxis: {
        title: 'Homework',
        showgrid: false,
      },
      yaxis: {
        title: 'Grade',
      }
    };
    Plotly.newPlot('myDiv', data, layout);

  });

