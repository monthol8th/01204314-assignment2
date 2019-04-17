// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['line']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGDPLineChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function select_1_change() {
  var listbox = document.getElementById("select-1");
  var selValue = listbox.options[listbox.selectedIndex].value;
  switch (selValue) {
    case "GDP":
      drawGDPLineChart();
      break;
    case "Revenue":
      drawRevenueLineChart();
      break;
  } 
}

function drawRevenueLineChart() {

  var revenue_data = new google.visualization.DataTable();
  revenue_data.addColumn('string', 'year');
  revenue_data.addColumn('number', 'southafrica');
  revenue_data.addColumn('number', 'morocco');
  revenue_data.addColumn('number', 'egypt');
  revenue_data.addColumn('number', 'cameroon');
  revenue_data.addColumn('number', 'kenya');
  revenue_data.addRows([
    ['2002', 296839, 119968, 77661, 1296964, 188086],
    ['2003', 308398, 125925, 88660, 1376757, 207666],
    ['2004', 357027, 137291, 100993, 1377102, 235753],
    ['2005', 427721, 153332, 110067, 1676028, 324873],
    ['2006', 483147, 177404, 150616, 1990021, 348419],
    ['2007', 582116, 202306, 179989, 2139383, 394168],
    ['2008', 651853, 240185, 221042, 2370945, 512751],
    ['2009', 642070, 229343, 282294, 2037629, 550767],
    ['2010', 697525, 244956, 267948, 2029934, 573806],
    ['2011', 785643, 265605, 265101, 2475143, 641648],
    ['2012', 878336, 281143, 302944, 2567947, 714185]
  ]);


  var revenue_data_options = {
    chart: {
      title: 'Revenue',
      subtitle: 'in millions of dollars (USD)'
    },
    height: 500
  };

  var chart = new google.charts.Line(document.getElementById('chart-1-div'));
  chart.draw(revenue_data, google.charts.Line.convertOptions(revenue_data_options));
}

function drawGDPLineChart() {

  var gdp_data = new google.visualization.DataTable();
  gdp_data.addColumn('string', 'year');
  gdp_data.addColumn('number', 'morocco');
  gdp_data.addColumn('number', 'south africa');
  gdp_data.addColumn('number', 'kenya');
  gdp_data.addColumn('number', 'Cameroon');
  gdp_data.addColumn('number', 'Eygpt');
  gdp_data.addRows([
    ['1995', 33101001242, 161189430502, 12774698452, 9191298206, 60163453271],
    ['1996', 35760256149, 151428337249, 10482233294, 10534427868, 67632270941],
    ['1997', 34002076271, 147028077987, 12625079616, 10391793274, 75864545847],
    ['1998', 40007109272, 141248198506, 18535836323, 9432411510, 84821296816],
    ['1999', 39041247433, 125484232818, 7405737845, 10350251866, 89941520468],
    ['2000', 37108648455, 133441191200, 13510238873, 9468163784, 97953658501],
    ['2001', 38455601030, 125184084349, 11678804090, 9837148343, 90284419834],
    ['2002', 41639689401, 117003942237, 8268159096, 10903348849, 84828442975],
    ['2003', 49067866578, 176140460099, 22368129224, 13642618160, 71356787355],
    ['2004', 56459648846, 233017872334, 19880499936, 15895510908, 78231292517],
    ['2005', 59462065914, 253962887666, 17016157002, 15724223820, 92977882142],
    ['2006', 65864174346, 273210966121, 26029291867, 18104497946, 108000000000],
    ['2007', 79027956115, 291603544219, 27602291367, 20799093779, 132000000000],
    ['2008', 92555685107, 294488607455, 36730290337, 23227082670, 165000000000],
    ['2009', 92906351020, 300832700288, 38124200062, 24056354893, 190000000000],
    ['2010', 93175951911, 368919858143, 42822083339, 23096389915, 216000000000],
    ['2011', 102036000000, 420122000000, 43009806948, 26502688873, 237000000000],
    ['2012', 97294591857, 395290000000, 47984339863, 26254082829, 276000000000],
    ['2013', 107462000000, 364254000000, 56343934224, 29749740118, 285000000000],
    ['2014', 109813000000, 352133000000, 62679475582, 32209515747, 305000000000],
    ['2015', 101204000000, 316633000000, 62663157565, 28653552542, 331000000000],
    ['2016', 103707000000, 297410000000, 70403903910, 29053272775, 306000000000],
    ['2017', 113227000000, 346900000000, 78092798921, 29572531323, 231000000000]
  ]);

  var gdp_data_options = {
    chart: {
      title: 'Gross Domestic Product',
      subtitle: 'in dollars (USD)'
    },
    height: 500
  };

  var chart = new google.charts.Line(document.getElementById('chart-1-div'));
  chart.draw(gdp_data, google.charts.Line.convertOptions(gdp_data_options));
}