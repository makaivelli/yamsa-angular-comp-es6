import angular from 'angular';
import SearchModule from './search/search';
import MoviesModule from './movies/movies';
import searchMoviesComponent from './searchmovies.component';

const SearchMoviesModule = angular.module('searchMovies', [
        SearchModule.name,
        MoviesModule.name,
    ])
    .component('searchMovies', searchMoviesComponent);

export default SearchMoviesModule;
