angular
  .module('books')
  .controller('BookHistoryController', BookHistoryController);

BookHistoryController.inject = ['$stateParams', 'BookHistoryService'];

function BookHistoryController($stateParams, BookHistoryService) {
  var vm = this;
  vm.bookId = $stateParams.bookId;

  if (vm.bookId) {
    BookHistoryService.getBookHistoryForBook(vm.bookId).then(successfullFetchingHistory);
  }

  function successfullFetchingHistory(bookHistory) {
    if (bookHistory.length) {
      vm.bookHistory = bookHistory[0].history;
    }
  }
}
