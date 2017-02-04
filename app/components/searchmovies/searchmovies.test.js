import searchMoviesModule from './searchmovies';
import searchMoviesController from './searchmovies.controller';
import searchMoviesComponent from './searchmovies.component';
import searchMoviesTemplate from './searchmovies.html';

describe('searchMovies', () => {
    let component, $componentController, OmdbService, $q;

    beforeEach(() => {
        window.module('searchMovies');

        window.module($provide => {
            $provide.value('OmdbService', {
                getMovies: () => {
                    return 'response';
                }
            });
        });
    });

    beforeEach(inject((_$componentController_, _OmdbService_, _$q_) => {
        OmdbService = _OmdbService_;
        $componentController = _$componentController_;
        $q = _$q_;
    }));

    describe('Module', () => {
        it('s name is correct', () => {
            expect(searchMoviesModule.name).toEqual('searchMovies');
        });
    });

    describe('Template', () => {
        it('includes the search component', () => {
            expect(searchMoviesTemplate).toContain('<search on-update="searchMoviesCtrl.onQuery($event)"></search>');
        });

        it('includes movies search component', () => {
            expect(searchMoviesTemplate).toContain('<movies movies-data="searchMoviesCtrl.data"></movies>');
        });
    });

    describe('Controller', () => {
        it('gets response from OmdbService.getMovies', () => {
            expect(OmdbService.getMovies()).toBe('response');
        });
    });
});
