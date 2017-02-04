import SearchTemplate from './search.html';
import SearchModule from './search';
import SearchController from './search.component';

describe('Search', () => {
    let component, $componentController, scope;

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    describe('Module', () => {
        it('s name is correct', () => {
            expect(SearchModule.name).toEqual('search');
        });
    });

    describe('Template', () => {
        it('is matching', () => {
            expect(SearchTemplate).toContain('ng-model="$ctrl.searchTerm" ng-model-options="{debounce: 1000}"');
        });
    });
/*
    describe('Controller', () => {
        it('is not searching under 3 chars', () => {

          let model = {searchTerm:'12'};

          component = $componentController('search', model);

          console.log($componentController);

          spyOn(component, 'onChange').and.callThrough();

          component.$onInit();

          expect(SearchController.onUpdate).toHaveBeenCalled(false);
        });
    });
*/
});
