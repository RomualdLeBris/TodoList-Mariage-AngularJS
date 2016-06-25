angular.module('todoListApp')
    .directive('todos',function () {
        return {
            templateUrl : 'templates/todos.html',
            controller : 'mainCtrl',
            replace: false // False pour afficher la directive sous forme d'élément dans mon fichier html et true pour afficher directement le html dans mon doc sans les balises <todos></todos>
        }
    });