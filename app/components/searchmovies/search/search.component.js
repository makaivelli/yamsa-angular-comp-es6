import template from './search.html';
//import controller from './search.controller';
import './search.sass';

const searchComponent = {
    bindings: {
        searchTerm: '<',
        onUpdate: '&'
    },
    template,
    controller: class SearchController {
        constructor() {}
        onChange() {
            this.onUpdate({
                $event: {
                    searchTerm: this.searchTerm
                }
            });
        };
    }
}

export default searchComponent;
