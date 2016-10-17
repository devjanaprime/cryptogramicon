// cryptogramicon.js
// by @devjana
// https://github.com/devjanaprime/cryptogramicon
var verbose = true;
if( verbose ) console.log( 'cryptogramicon.js sourced' );

var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'CryptogramiconController', [ '$scope', '$http', function( $scope, $http ){
  if( verbose ) console.log( 'NG' );

  $scope.checkLetter = function(){
    if( verbose ) console.log( 'in checkLetter' );
    var checkIndex = $scope.shuffledAlphabet.indexOf( $scope.letterIn );
    var correctIndex = $scope.shuffledAlphabet.indexOf( $scope.correctLetter );
    if( verbose ) console.log( 'check:', checkIndex, 'correct:', correctIndex );
    if( checkIndex === correctIndex ){
      return true;
    }
    else{
      return false;
    }
  } // end checkLetter

  $scope.getQuote = function(){
    if( verbose ) console.log( 'in getQuote' );
    $scope.quote = { quote: 'aw shucks', author: 'some random redneck' };
    console.log( '$scope.quote.quote :', $scope.quote.quote.split( "" )  );
  }; //end getQuote

  $scope.init = function(){
    if( verbose ) console.log( 'in init' );
    $scope.shuffleLetters();
  }; // end init

  $scope.shuffleLetters = function(){
    if( verbose) console.log( 'in shuffleLetters' );
    $scope.shuffledAlphabet = shuffle( alphabet );
    if( verbose) console.log( $scope.shuffledAlphabet );
  }; // end shuffle

  $scope.init();

}]); // end CryptogramiconController
