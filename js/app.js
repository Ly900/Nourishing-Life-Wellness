"use strict";

(function(){
  var app = angular.module("practice", ["ui.router"]);

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "partials/home.html"
      })
      .state("acupuncture", {
        url: "/acupuncture",
        templateUrl: "acupuncture.html"
      })
      .state("chinese-herbal-medidine", {
        url: "/chinese-herbal-medicine",
        templateUrl: "chineseHerbalMedicine.html"
      })
      .state("bio", {
        url: "/bio",
        templateUrl: "bio.html"
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
  .directive("logo", function() {
    return {
      restrict: "E",
      templateUrl: "shared/logo/logo.html"
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
