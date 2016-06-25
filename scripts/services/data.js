/**
 * Created by Rew on 09/06/2016.
 */

'use strict';

angular.module('todoListApp')
    .service('dataService', function ($http) {
        this.helloConsole = function () {
            console.log("control service");
        };

        this.getTodos = function (callback) {
            $http.get('mock/todos.json')
                .then(callback)
        };

        this.deleteTodo = function(todo) {
            console.log('The' + todo.name + 'has been deleted');

        };

        this.saveTodos = function(todos) {
            console.log(todos.length + 'todos has been saved');
        };

        this.addTodo = function (todo) {
            console.log('The' + todo.name + 'has been added');
        };
    });