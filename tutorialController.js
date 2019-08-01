'use strict';

var tutorialApp = angular.module('tutorialApp', []);

tutorialApp.controller('LessonController', ['$scope', function($scope) {

    // lesson content
    $scope.lesson = {
      name:"Introduction to Observability",
      sublessons: [ //sl = sublesson name
        {
          slname:"Hello World",
          content:["In this first exercise, you'll learn how to instantiate a Tracer. What is Instantiation? To instantiate is to create an instance of an object. An instantiated object is given a name and created in memory or on disk using the structure described within a class declaration. What is a Tracer? Tracers let you track and measure spans of execution in a distributed software system. You can instrument almost anything with a tracer - a method in your software, a service call, a network request, a shell command execution, a script, and any other thing that can happen in a computer system. Once you instrument something with tracers, you can monitor how long it takes to complete, you can observe the system activity taking place within a span, or you can trace how it progresses through your system.",
          "A tracer is a marker for a point in time in execution. Tracers always come in pairs: an entry tracer, which delimits the beginning of a span, and a corresponding exit tracer, which closes the span. A span, therefore, is the interval of execution delimited by two corresponding tracers. Spans can be nested, which means that a span can contain layers of other spans. The root of a span tree is called a trace."]
        },
        {
          slname:"Bye World",
          content:["one","two"]
        }
      ]
    };

    // initialize things
    $scope.curr_lesson = 0;
    var curr_sublesson = 0;
    var max_lesson = $scope.lesson.sublessons.length;
    var max_sublesson = $scope.lesson.sublessons[$scope.curr_lesson].content.length;
    $scope.sublessonname = $scope.lesson.sublessons[0].slname;
    $scope.content = $scope.lesson.sublessons[0].content[0];

    console.log(max_lesson + " " + max_sublesson);

    // navigate bw pages
    $scope.back = function() {
      if ($scope.curr_lesson >= 1) {
        $scope.curr_lesson -= 1;
        console.log($scope.curr_lesson);
      }
    }
    $scope.next = function() {
      if (curr_sublesson < max_sublesson-1) {
        curr_sublesson += 1;
      } else if ($scope.curr_lesson < max_lesson-1) {
        $scope.curr_lesson += 1;
        curr_sublesson = 0;
      }

      $scope.sublessonname = $scope.lesson.sublessons[$scope.curr_lesson].slname;
      $scope.content = $scope.lesson.sublessons[$scope.curr_lesson].content[curr_sublesson];
      console.log($scope.curr_lesson + " " + curr_sublesson);
    }
}]);
