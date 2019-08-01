'use strict';

var tutorialApp = angular.module('tutorialApp', []);

tutorialApp.controller('LessonController', ['$scope', function($scope) {
    $scope.lessonname = "Introduction to Observability";
    $scope.sublessonname = "Hello World";
    $scope.content = "this is where you learn things";
    $scope.lessonnum = 1;
    $scope.totallessonnum = 4;
}]);
