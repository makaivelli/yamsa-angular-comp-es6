import template from './movies.html';
import './movies.sass';

const moviesComponent = {
    bindings: {
        moviesData: '<'
    },
    template,
    controllerAs: 'moviesCtrl'
};

export default moviesComponent;
