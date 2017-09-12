angular
  .module('toDoApp', [])
  .factory('storage', ['$window', function( $window ){
    return {
      memorize: function( value ){
        try{
          if( $window.Storage ){
            $window.sessionStorage.setItem( 'tasks', $window.JSON.stringify( value ) );
            return true;
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
        return false;
      },
      recall: function( ){
        try{
          if( $window.Storage ){
            return $window.JSON.parse( $window.sessionStorage.getItem( 'tasks' ) )
          } else {
            return false;
          }
        } catch( error ){
          console.error( error, error.message );
        }
        return false;
      }
    }
  }])
  .controller('ToDoController', ['$scope', 'storage', function ( $scope, storage ) {
    $scope.tasks = [];
    //flag for later steps to prevent unnecessary calling
    //if the Storage is not available
    $scope.store = false;

    var tasks = storage.recall();
    if( tasks != false ){
      if( tasks != null ){
        $scope.tasks = tasks;
        delete( tasks );
      }
      $scope.store = true;
    } else {
      $scope.store = false;
    }
    
    $scope.editIndex = false;
    $scope.addTask = function () {
      if( $scope.editIndex === false){
        var task = { task: $scope.task, done: false };
        $scope.tasks.push( task );
        if( $scope.store ){ 
          storage.memorize( $scope.tasks );
        }
      } else {
        $scope.tasks[$scope.editIndex].task = $scope.task;
        if( $scope.store ){ 
          storage.memorize( $scope.tasks );
        }
      }
      $scope.editIndex = false;
      $scope.task = '';
    }
        
    $scope.editTask = function (index) {
      $scope.task = $scope.tasks[index].task;
      $scope.editIndex = index;
    }
    $scope.doneTask = function (index) {
      $scope.tasks[index].done = true;
      if( $scope.store ){ 
        storage.memorize( $scope.tasks );
      }
    }
    $scope.unDoneTask = function (index) {
      $scope.tasks[index].done = false;
      if( $scope.store ){ 
        storage.memorize( $scope.tasks );
      }
    }
    $scope.deleteTask = function (index) {
      $scope.tasks.splice(index, 1);
      if( $scope.store ){ 
        storage.memorize( $scope.tasks );
      }
    }
  }])