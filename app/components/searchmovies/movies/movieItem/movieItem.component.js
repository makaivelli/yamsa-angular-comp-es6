import template from './movieItem.html';
import controller from './movieItem.controller';
import './movieItem.sass';

let movieItemComponent = {
    bindings: {
        movie: '<'
    },
    template,
    controller,
    controllerAs: 'movieItemCtrl'
};

export default movieItemComponent;
