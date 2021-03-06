"use strict";

(function(){
  var app = angular.module("practice", [
    "ui.router"
  ]);
  app.controller("practiceCtrl", ["$scope", function($scope) {
    $scope.showMap = false;
    $scope.showTestimonials = false;
    $scope.testimonialDirection = "Read more";
    $scope.showHideTestimonials = function() {
      if ($scope.showTestimonials === false) {
        $scope.showTestimonials = true;
        $scope.testimonialDirection = "Hide";
      } else {
        $scope.showTestimonials = false;
        $scope.testimonialDirection = "Read more";
      }
    };

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
      .state("facial-rejuvenation", {
        url: "/facial-rejuvenation",
        templateUrl: "partials/facialRejuvenation.html"
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
    };
  })
  .directive("navBar", function() {
    return {
      restrict: "E",
      templateUrl: "shared/navigation/navBar.html"
    };
  })
  .directive("visionMission", function() {
    return {
      restrict: "E",
      templateUrl: "shared/vision_mission/visionMission.html"
    };
  })
  .directive("testimonials", function() {
    return {
      restrict: "E",
      templateUrl: "shared/testimonials/testimonials.html"
    };
  })
  .directive("description", function() {
    return {
      restrict: "E",
      templateUrl: "shared/description/description.html"
    };
  })
  .directive("contact", function() {
    return {
      restrict: "E",
      templateUrl: "shared/contact/contact.html"
    };
  })
  .directive("locations", function() {
    return {
      restrict: "E",
      templateUrl: "shared/locations/locations.html"
    };
  });





})(); // Ends IFFE

// Type "http-server" in Terminal to start server.

// Type "sass --watch assets/scss/style.scss:assets/css/style.css"  in Terminal to compile SASS.
