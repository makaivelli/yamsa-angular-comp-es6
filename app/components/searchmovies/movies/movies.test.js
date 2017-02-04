import moviesTemplate from './movies.html';
import moviesModule from './movies';

describe('Movies', () => {
    let component, $componentController;

    beforeEach(inject((_$componentController_) => {
        $componentController = _$componentController_;
    }));

    describe('Module', () => {
        it('s name is correct', () => {
            expect(moviesModule.name).toEqual('movies');
        });
    });

    describe('Template', () => {
        it('includes `movie-item` component', () => {
            expect(moviesTemplate).toContain('<movie-item movie="movie"></movie-item>');
        });
    });

});
