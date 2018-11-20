// Load google charts
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_google_pie_chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Technology', 'Count'],
  ['PHP ', 41],
  ['NERDS Stack', 35],
  ['Ruby on Rails', 29],
  ['LAMP Stack', 25],
  ['MERN Stack', 24],
  ['MEAN Stack', 45]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Which languages/technology does GA developers end up getting job?', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', '2018 Developers GA Site',],
        ['New York City', 14],
        ['San Francisco', 12],
        ['Phoenix', 15],
        ['Los Angeles', 16],
        ['Chicago', 13],
        ['Dallas', 13],
        ['Washington D.C.', 8],
        ['Austin', 9],
        ['Denver', 15],
        ['San Diego',10],
        ['Detroit',17],
        ['Seattle',14],
        ['Atlanta', 13],
        ['Boston',  15],
        ['Miami',  15]
      ]);

      var options = {
        title: 'General Assembly Sites Students enrolled',
        height:500,
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number of Students',
          minValue: 0
        },
        vAxis: {
          title: 'General Assembly Site'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
