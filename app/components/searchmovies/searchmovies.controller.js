class SearchMoviesController {
    constructor(OmdbService, $log) {
        'ngInject';
        this.OmdbService = OmdbService;
        this.$log = $log;
        this.showError = false;
        this.onProgress = false;
    }

    onQuery(searchTerm) {
        // prevent query after backspace
        if (searchTerm.searchTerm) {
            this.showError = false;
            this.onProgress = true;
            var that = this;
            this.$log.log('onQuery', searchTerm);
            let title = searchTerm.searchTerm;
            this.OmdbService.getMovies(searchTerm)
                .then(
                    movies => {
                        this.onProgress = false;
                        this.data = movies;
                    }
                )
                .catch(
                    err => {
                        this.showError = true;
                        this.onProgress = false;
                        this.errorMessage = err.statusText;
                    });
        }
    }

}

export default SearchMoviesController;
