"use strict";

(function(){
  var app = angular.module("practice", [
    "ui.router"
  ]);
  app.controller("practiceCtrl", ["$scope", function($scope) {
    $scope.showMap = false;
    // $scope.initMap = function() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 8
    //   });
    // }
  }]);
  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "partials/home.html"
      })
      .state("acupuncture", {
        url: "/acupuncture",
        templateUrl: "partials/acupuncture.html"
      })
      .state("chinese-herbal-medicine", {
        url: "/chinese-herbal-medicine",
        templateUrl: "partials/chineseHerbalMedicine.html"
      })
      .state("bio", {
        url: "/bio",
        templateUrl: "partials/bio.html"
      })
  })
  .directive("carouselSlideshow", function() {
    return {
      restrict: "E",
      templateUrl: "shared/carousel/carouselSlideshow.html"
    }
  })
  .directive("navBar", function() {
    return {
      restrict: "E",
      templateUrl: "shared/navigation/navBar.html"
    }
  })
  .directive("visionMission", function() {
    return {
      restrict: "E",
      templateUrl: "shared/vision_mission/visionMission.html"
    }
  })
  .directive("testimonials", function() {
    return {
      restrict: "E",
      templateUrl: "shared/testimonials/testimonials.html"
    }
  })
  .directive("contact", function() {
    return {
      restrict: "E",
      templateUrl: "shared/contact/contact.html"
    }
  });





})(); // Ends IFFE
