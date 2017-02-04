class OmdbService {
    constructor($q, $http, $log) {
        'ngInject';
        this.$q = $q;
        this.$http = $http;
        this.$log = $log;
    }

    getMovies(obj) {
        return this.$http.get('http://www.omdbapi.com/', {
                params: {
                    s: obj.searchTerm,
                    r: 'json'
                }
            })
            .then(function(res) {
                var movies = [];
                angular.forEach(res.data.Search, function(item) {
                    movies.push(item);
                });
                this.$log.log('movies', movies);
                return movies;
            });
    }

    getDescription(id) {
        this.$log.log('id', id);
        return this.$http.get('http://www.omdbapi.com/', {
            params: {
                i: id,
                r: 'json'
            }
        })
        .then(res => {
            return res.Plot;
        })
    }
}

export default OmdbService;
