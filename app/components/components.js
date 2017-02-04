import angular from 'angular';
import SearchMoviesModule from './searchmovies/searchmovies'

const ComponentsModule = angular.module('components', [
    SearchMoviesModule.name
]);

export default ComponentsModule;
