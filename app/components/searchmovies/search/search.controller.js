class SearchController {
  constructor($rootScope) {
    'ngInject';
    this.searchTerm = '';
    var ctrl = this;
  }

  /*  $onChanges($event) {
      console.log($event); // Get updated value
      //console.log($event.this.searchTerm.previousValue); // Get previous value
    } */

    onChange(){
    onSearch();
      console.log('searchChanged', this.searchTerm);
    };
}

export default SearchController;
