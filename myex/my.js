// var menuApp = angular.module('messMenu',[]);
// menuApp.controller('menuController',function($scope){
//   $scope.menu = []
// });



localStorage.clear();
      var sample_url = "https://spreadsheets.google.com/pub?key=1WbRAAJUxlhcmgIT17TQBMxEOyhrSkazX0CDYarThZic &hl=en&output=html";
      var url_parameter = document.location.search.split(/\?url=/)[1]
      var url = url_parameter || sample_url;
      var googleSpreadsheet = new GoogleSpreadsheet();
      googleSpreadsheet.url(url);
      googleSpreadsheet.load(function(result) {
        $('#results').html(JSON.stringify(result).replace(/,/g,",\n"));
      });