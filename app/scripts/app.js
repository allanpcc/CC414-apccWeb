'use strict';

/**
 * @ngdoc overview
 * @name allancastroApp
 * @description
 * # allancastroApp
 *
 * Main module of the application.
 */
angular
  .module('allancastroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/homework', {
        templateUrl: 'views/homework.html',
        controller: 'HomeworkCtrl',
        controllerAs: 'homework'
      })
      .when('/homework/hw1', {
        templateUrl: 'views/hwviews/hw1.html',
        controller: 'HwviewsHw1Ctrl',
        controllerAs: 'hwviews/hw1'
      })
      .when('/homework/hw2', {
        templateUrl: 'views/hwviews/hw2.html',
        controller: 'HwviewsHw2Ctrl',
        controllerAs: 'hwviews/hw2'
      })
      .when('/homework/hw3', {
        templateUrl: 'views/hwviews/hw3.html',
        controller: 'HwviewsHw3Ctrl',
        controllerAs: 'hwviews/hw3'
      })
      .when('/homework/hw4', {
        templateUrl: 'views/hwviews/hw4.html',
        controller: 'HwviewsHw4Ctrl',
        controllerAs: 'hwviews/hw4'
      })
      .when('/homework/hw5', {
        templateUrl: 'views/hwviews/hw5.html',
        controller: 'HwviewsHw5Ctrl',
        controllerAs: 'hwviews/hw5'
      })
      .when('/homework/hw6', {
        templateUrl: 'views/hwviews/hw6.html',
        controller: 'HwviewsHw6Ctrl',
        controllerAs: 'hwviews/hw6'
      })
      .when('/homework/hw7', {
        templateUrl: 'views/hwviews/hw7.html',
        controller: 'HwviewsHw7Ctrl',
        controllerAs: 'hwviews/hw7'
      })
      .when('/performancechart', {
        templateUrl: 'views/performancechart.html',
        controller: 'PerformancechartCtrl',
        controllerAs: 'performancechart'
      })

      .when('/homework/hw8', {
        templateUrl: 'views/hwviews/hw8.html',
        controller: 'HwviewsHw8Ctrl',
        controllerAs: 'hwviews/hw8'
      })
      .when('/homework/hw9', {
        templateUrl: 'views/hwviews/hw9.html',
        controller: 'HwviewsHw9Ctrl',
        controllerAs: 'hwviews/hw9'
      })
      .when('/homework/hw10', {
        templateUrl: 'views/hwviews/hw10.html',
        controller: 'HwviewsHw10Ctrl',
        controllerAs: 'hwviews/hw10'
      })
      .when('/homework/hw11', {
        templateUrl: 'views/hwviews/hw11.html',
        controller: 'HwviewsHw11Ctrl',
        controllerAs: 'hwviews/hw11'
      })
      .when('/homework/hw12', {
        templateUrl: 'views/hwviews/hw12.html',
        controller: 'HwviewsHw12Ctrl',
        controllerAs: 'hwviews/hw12'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
