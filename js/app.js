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