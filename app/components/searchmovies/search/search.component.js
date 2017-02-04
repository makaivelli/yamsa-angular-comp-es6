import template from './search.html';
import './search.sass';

const searchComponent = {
    bindings: {
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
