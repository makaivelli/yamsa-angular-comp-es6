import angular from 'angular';
import OmdbService from './services/omdb';

const CommonModule = angular.module('common', [])
    .service('OmdbService', OmdbService);

export default CommonModule;
