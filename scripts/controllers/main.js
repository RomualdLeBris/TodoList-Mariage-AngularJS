// S'assure que le fichier sera interprété en strict mode par l'interpreteur javascript.
'use strict';

angular.module("todoListApp")
    
    .controller("mainCtrl", function($scope, dataService) {
        $scope.addTodo = function () {
            var todo = {name: "Quelle est votre nouvelle tâche ?"};
            $scope.todos.unshift(todo);   // On ajoute le scope dans le tableau ng-repeat car c'est dans la boucle qu'ils sont générés. unshift ajoute l'entrée au début du tableau.
        };

        $scope.helloWorld = dataService.helloWorld;

        dataService.getTodos(function(response) {
            console.log(response.data);
            $scope.todos = response.data;
        });

        $scope.deleteTodo = function (todo, $index) {
            dataService.deleteTodo(todo);
            $scope.todos.splice($index, 1);
        };

        $scope.saveTodos = function () {
           var filteredTodos = $scope.todos.filter(function (todo) {
                if(todo.edited) {
                    return todo;
                }
            });
            dataService.saveTodos(filteredTodos);
        };

    });