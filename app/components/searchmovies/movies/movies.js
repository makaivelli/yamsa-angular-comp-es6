import angular from 'angular';
import movieItemModule from './movieItem/movieItem';
import moviesComponent from './movies.component';

const MoviesModule = angular.module('movies', [
        movieItemModule.name
    ])
    .component('movies', moviesComponent);

export default MoviesModule;
