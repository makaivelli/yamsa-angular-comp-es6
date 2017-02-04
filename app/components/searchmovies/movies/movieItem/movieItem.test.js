import MovieItemModule from './movieItem';
import MovieItemController from './movieItem.controller';
import MovieItemComponent from './movieItem.component';
import MovieItemTemplate from './movieItem.html';

describe('MovieItem', () => {
    let component, $componentController, OmdbService;

    beforeEach(() => {
        window.module('movieItem');

        window.module($provide => {
            $provide.value('OmdbService', {
                getDescription: () => {
                    return {
                        then: () => {}
                    };
                }
            });
        });
    });

    beforeEach(inject((_$componentController_, _OmdbService_) => {
        OmdbService = _OmdbService_;
        $componentController = _$componentController_;
    }));

    describe('Module', () => {
        it('s name is correct', () => {
            expect(MovieItemModule.name).toEqual('movieItem');
        });
    });

    describe('Template', () => {
        it('includes "movie-item" class', () => {
            expect(MovieItemTemplate).toContain('class="movie-item"');
        });
    });

    describe('Controller', () => {
        it('invokes immediately OmdbService.getDescription', () => {
            var data = {
                Title: "Title",
                imdbID: 'imdb',
                Poster: "src"
            };
            var bindings = {
                movie: data
            };
            spyOn(OmdbService, 'getDescription').and.callThrough();

            component = $componentController('movieItem', OmdbService, bindings);

            component.$onInit();

            expect(OmdbService.getDescription).toHaveBeenCalled();

        });
        
    });

});
