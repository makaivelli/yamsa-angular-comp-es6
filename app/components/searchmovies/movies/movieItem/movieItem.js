import angular from 'angular';
import movieItemComponent from './movieItem.component';

const MovieItemModule = angular.module('movieItem', [])
    .component('movieItem', movieItemComponent);

export default MovieItemModule;
