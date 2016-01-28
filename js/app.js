"use strict";

(function(){
  angular
  .module("practice", [])
  .controller("practiceCtrl", function() {
  })
  .directive("carouselSlideshow", function() {
    return {
      restrict: "E",
      templateUrl: "shared/carouselSlideshow.html"
    }
  });











})(); // Ends IFFE
