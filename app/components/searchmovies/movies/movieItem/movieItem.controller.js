class MoviesController {
    constructor(OmdbService) {
        'ngInject';
        this.OmdbService = OmdbService;
    }

    $onInit() {
        this.OmdbService.getDescription(this.movie.imdbID)
            .then(x => {
                this.movie.Description = x
            });
    }

}

export default MoviesController;
