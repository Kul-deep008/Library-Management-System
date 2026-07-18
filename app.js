var app = angular.module("libraryApp", []);

app.controller("LibraryController", function($scope){

    $scope.books = [];

    $scope.addBook = function(){

        if($scope.bookName != "" && $scope.author != ""){

            $scope.books.push({

                name:$scope.bookName,

                author:$scope.author,

                status:"Available"

            });

            $scope.bookName="";
            $scope.author="";

        }

    };

    $scope.deleteBook = function(index){

        $scope.books.splice(index,1);

    };

    $scope.toggleStatus = function(book){

        if(book.status=="Available"){

            book.status="Issued";

        }

        else{

            book.status="Available";

        }

    };

});