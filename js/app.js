"use strict";

(function(){
  angular
  .module("practice", [])
  .controller("practiceCtrl", function() {
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











})(); // Ends IFFE
