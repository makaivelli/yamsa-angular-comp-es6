import template from './movies.html';
import controller from './movies.controller';
import './movies.sass';

const moviesComponent = {
    bindings: {
        moviesData: '<'
    },
    template,
    controller,
    controllerAs: 'moviesCtrl'
};

export default moviesComponent;
