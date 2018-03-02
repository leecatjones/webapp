//var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
//url += "?" + $.param({
//  "api-key": "3ce00a9e38074869a53f1314913e7d29"
// });$ajax({
//  url: url,
//  method: "GET",
// }).done(function(result) {
//  console.log(result);
// }).fail(function(err) {
//  throw err;
// });
//
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "3ce00a9e38074869a53f1314913e7d29"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

//what happens if it gets data back

console.log(result);
console.log(JSON.stringify(result.status));
console.log(JSON.stringify(result.last_updateD));
console.log(JSON.stringify(result.num_results));

$('#copyright').text(result.copyright);

console.log(JSON.stringify(result.results[0].title));

$('#maintitle').text(result.results[0].title);
$('#mainauthor').text(result.results[0].byline);
$('#maindate').text(result.results[0].created_date);

$('#collection').empty();

for(i=1; i<result.results.length; i++) {

//  $('#collection').append("<h3>bleh bleh bleh</h3>")
//the end of what happens if it gets data back

var template = "<article>"
+ '<a href="https://placeholder.com"><img src="http://via.placeholder.com/190x126"></a>'
+ '<h2>' + result.results[i].title + '</h2>'
+ '<p class="author">' + result.results[i].byline + '</p>'
+ '<p class="date">' + result.results[i].created_date +'</p>'
+ '</article>';

$('#collection').append(template);
}


}).fail(function(err) {
  throw err;
});
