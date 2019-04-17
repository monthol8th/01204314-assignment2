// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart','line']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGDPLineChart);
google.charts.setOnLoadCallback(drawChart2);

// Chart 2
var chart2_category = "GDP";
var chart2_country = "cameroon";

function set_chart2_category(category) {
  chart2_category = category;
  drawChart2();
}

function set_chart2_country(country) {
  chart2_country = country;
  drawChart2();
}

function drawChart2() {
  if (chart2_category == "GDP") {
    drawGDPChart(chart2_country);
  } else {
    drawRevenueChart(chart2_country);
  }
}

function drawRevenueChart(country) {

  var dataset = {};
  dataset["cameroon"] = {};
  dataset["cameroon"]["data"] = new google.visualization.DataTable();
  dataset["cameroon"]["data"].addColumn('string', 'year');
  dataset["cameroon"]["data"].addColumn('number', 'real');
  dataset["cameroon"]["data"].addColumn('number', 'predicted');
  dataset["cameroon"]["data"].addRows([
    ['2005', 1676028, 1686366],
    ['2006', 1990021, 1978383],
    ['2007', 2139383, 2134013],
    ['2008', 2370945, 2380271],
    ['2009', 2037629, 2043980],
    ['2010', 2029934, 2035023],
    ['2011', 2475143, 2477223],
    ['2012', 2567947, 2567662],
    ['2013', 2862826, 2852412],
    ['2014', 3040074, 3041082],
    ['2015', 3292684, 3294103],
    ['2016', 3097565, 3097471]
  ]);
  dataset["cameroon"]["options"] = {
    title: 'Cameroon\'s Revenue in millions of dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["eygpt"] = {};
  dataset["eygpt"]["data"] = new google.visualization.DataTable();
  dataset["eygpt"]["data"].addColumn('string', 'year');
  dataset["eygpt"]["data"].addColumn('number', 'real');
  dataset["eygpt"]["data"].addColumn('number', 'predicted');
  dataset["eygpt"]["data"].addRows([
    ['2005', 110067, 109748],
    ['2006', 150616, 151015],
    ['2007', 179989, 179949],
    ['2008', 221042, 220622],
    ['2009', 282294, 282332],
    ['2010', 267948, 268159],
    ['2011', 265101, 265081],
    ['2012', 302944, 303015],
    ['2013', 349771, 349743],
    ['2014', 456137, 456124],
    ['2015', 464571, 464557],
    ['2016', 491112, 491102]
  ]);
  dataset["eygpt"]["options"] = {
    title: 'Eygpt\'s Revenue in millions of dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["kenya"] = {};
  dataset["kenya"]["data"] = new google.visualization.DataTable();
  dataset["kenya"]["data"].addColumn('string', 'year');
  dataset["kenya"]["data"].addColumn('number', 'real');
  dataset["kenya"]["data"].addColumn('number', 'predicted');
  dataset["kenya"]["data"].addRows([
    ['2005', 324873, 321017],
    ['2006', 348419, 356774],
    ['2007', 394168, 394260],
    ['2008', 512751, 506204],
    ['2009', 550767, 552572],
    ['2010', 573806, 568185],
    ['2011', 700866, 706837],
    ['2012', 770888, 772706],
    ['2013', 870601, 866800],
    ['2014', 1045958, 1051042],
    ['2015', 1190676, 1187545],
    ['2016', 1332639, 1332470]
  ]);
  dataset["kenya"]["options"] = {
    title: 'Kenya\'s Revenue in millions of dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["morocco"] = {};
  dataset["morocco"]["data"] = new google.visualization.DataTable();
  dataset["morocco"]["data"].addColumn('string', 'year');
  dataset["morocco"]["data"].addColumn('number', 'real');
  dataset["morocco"]["data"].addColumn('number', 'predicted');
  dataset["morocco"]["data"].addRows([
    ['2005', 153332, 153685],
    ['2006', 177404, 178069],
    ['2007', 202307, 200933],
    ['2008', 240185, 240852],
    ['2009', 229343, 228626],
    ['2010', 244956, 244588],
    ['2011', 265605, 266240],
    ['2012', 281143, 282134],
    ['2013', 289529, 288221],
    ['2014', 284334, 285527],
    ['2015', 294635, 293813],
    ['2016', 303624, 303736]
  ]);
  dataset["morocco"]["options"] = {
    title: 'Morocco\'s Revenue in millions of dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["south_africa"] = {};
  dataset["south_africa"]["data"] = new google.visualization.DataTable();
  dataset["south_africa"]["data"].addColumn('string', 'year');
  dataset["south_africa"]["data"].addColumn('number', 'real');
  dataset["south_africa"]["data"].addColumn('number', 'predicted');
  dataset["south_africa"]["data"].addRows([
    ['2005', 427721, 424002],
    ['2006', 483147, 487089],
    ['2007', 582116, 581981],
    ['2008', 651853, 651291],
    ['2009', 642070, 645687],
    ['2010', 697525, 694467],
    ['2011', 785643, 782731],
    ['2012', 878336, 871513],
    ['2013', 978396, 981935],
    ['2014', 1070731, 1070881],
    ['2015', 1188432, 1195067],
    ['2016', 1263004, 1259401]
  ]);
  dataset["south_africa"]["options"] = {
    title: 'South Africa\'s Revenue in millions of dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };


  var chart = new google.visualization.LineChart(document.getElementById('chart-2-div'));
  chart.draw(dataset[country]["data"], dataset[country]["options"]);
}

function drawGDPChart(country) {

  var dataset = {};
  dataset["cameroon"] = {};
  dataset["cameroon"]["data"] = new google.visualization.DataTable();
  dataset["cameroon"]["data"].addColumn('string', 'year');
  dataset["cameroon"]["data"].addColumn('number', 'real');
  dataset["cameroon"]["data"].addColumn('number', 'predict');
  dataset["cameroon"]["data"].addRows([
    ['1995', 9040000000, 9191298206],
    ['1996', 10300000000, 10534427868],
    ['1997', 10300000000, 10391793274],
    ['1998', 9880000000, 9432411510],
    ['1999', 10400000000, 10350251866],
    ['2000', 9290000000, 9468163784],
    ['2001', 9640000000, 9837148343],
    ['2002', 10900000000, 10903348849],
    ['2003', 13600000000, 13642618160],
    ['2004', 15800000000, 15895510908],
    ['2005', 16600000000, 15724223820],
    ['2006', 18000000000, 18104497946],
    ['2007', 20400000000, 20799093779],
    ['2008', 23300000000, 23227082670],
    ['2009', 23400000000, 24056354893],
    ['2010', 23600000000, 23096389915],
    ['2011', 26600000000, 26502688873],
    ['2012', 26500000000, 26254082829],
    ['2013', 29600000000, 29749740118],
    ['2014', 32100000000, 32209515747],
    ['2015', 28400000000, 28653552542],
    ['2016', 29300000000, 29053272775],
    ['2017', 29700000000, 29572531323]
  ]);
  dataset["cameroon"]["options"] = {
    title: 'Cameroon\'s GDP in dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["eygpt"] = {};
  dataset["eygpt"]["data"] = new google.visualization.DataTable();
  dataset["eygpt"]["data"].addColumn('string', 'year');
  dataset["eygpt"]["data"].addColumn('number', 'real');
  dataset["eygpt"]["data"].addColumn('number', 'predict');
  dataset["eygpt"]["data"].addRows([
    ['1995', 60163453271, 60163453271],
    ['1996', 67632270941, 67632270941],
    ['1997', 75864545847, 75864545847],
    ['1998', 84821296816, 84821296816],
    ['1999', 89941520468, 89941520468],
    ['2000', 97953658501, 97953658501],
    ['2001', 90284419834, 90284419834],
    ['2002', 84828442975, 84828442975],
    ['2003', 71356787355, 71356787355],
    ['2004', 78231292517, 78231292517],
    ['2005', 92977882142, 92977882142],
    ['2006', 108000000000, 108000000000],
    ['2007', 132000000000, 132000000000],
    ['2008', 165000000000, 165000000000],
    ['2009', 190000000000, 190000000000],
    ['2010', 216000000000, 216000000000],
    ['2011', 237000000000, 237000000000],
    ['2012', 276000000000, 276000000000],
    ['2013', 285000000000, 285000000000],
    ['2014', 305000000000, 305000000000],
    ['2015', 331000000000, 331000000000],
    ['2016', 306000000000, 306000000000],
    ['2017', 231000000000, 231000000000]
  ]);
  dataset["eygpt"]["options"] = {
    title: 'Eygpt\'s GDP in dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["kenya"] = {};
  dataset["kenya"]["data"] = new google.visualization.DataTable();
  dataset["kenya"]["data"].addColumn('string', 'year');
  dataset["kenya"]["data"].addColumn('number', 'real');
  dataset["kenya"]["data"].addColumn('number', 'predict');
  dataset["kenya"]["data"].addRows([
    ['1995', 11800000000, 12774698452],
    ['1996', 11900000000, 10482233294],
    ['1997', 13200000000, 12625079616],
    ['1998', 13700000000, 18535836323],
    ['1999', 12800000000, 7405737845],
    ['2000', 12600000000, 13510238873],
    ['2001', 13000000000, 11678804090],
    ['2002', 13100000000, 8268159096],
    ['2003', 14900000000, 22368129224],
    ['2004', 16100000000, 19880499936],
    ['2005', 18800000000, 17016157002],
    ['2006', 25800000000, 26029291867],
    ['2007', 32000000000, 27602291367],
    ['2008', 35300000000, 36730290337],
    ['2009', 37000000000, 38124200062],
    ['2010', 39700000000, 42822083339],
    ['2011', 40800000000, 43009806948],
    ['2012', 50800000000, 47984339863],
    ['2013', 56100000000, 56343934224],
    ['2014', 62400000000, 62679475582],
    ['2015', 63800000000, 62663157565],
    ['2016', 69300000000, 70403903910],
    ['2017', 82200000000, 78092798921]
  ]);
  dataset["kenya"]["options"] = {
    title: 'Kenya\'s GDP in dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["morocco"] = {};
  dataset["morocco"]["data"] = new google.visualization.DataTable();
  dataset["morocco"]["data"].addColumn('string', 'year');
  dataset["morocco"]["data"].addColumn('number', 'real');
  dataset["morocco"]["data"].addColumn('number', 'predict');
  dataset["morocco"]["data"].addRows([
    ['1995', 32985271777, 33101001242],
    ['1996', 36638853755, 35760256149],
    ['1997', 33414383940, 34002076271],
    ['1998', 40021694882, 40007109272],
    ['1999', 39734021300, 39041247433],
    ['2000', 37060118958, 37108648455],
    ['2001', 37766168274, 38455601030],
    ['2002', 40473658422, 41639689401],
    ['2003', 49819100558, 49067866578],
    ['2004', 56948657518, 56459648846],
    ['2005', 59534602974, 59462065914],
    ['2006', 65625170501, 65864174346],
    ['2007', 79041217398, 79027956115],
    ['2008', 92506959386, 92555685107],
    ['2009', 92897320376, 92906351020],
    ['2010', 93217221947, 93175951911],
    ['2011', 101370787559, 102036000000],
    ['2012', 98265798872, 97294591857],
    ['2013', 107027500595, 107462000000],
    ['2014', 110032818074, 109813000000],
    ['2015', 101231659836, 101204000000],
    ['2016', 103579918451, 103707000000],
    ['2017', 113185572739, 113227000000]
  ]);
  dataset["morocco"]["options"] = {
    title: 'Morocco\'s GDP in dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };

  dataset["south_africa"] = {};
  dataset["south_africa"]["data"] = new google.visualization.DataTable();
  dataset["south_africa"]["data"].addColumn('string', 'year');
  dataset["south_africa"]["data"].addColumn('number', 'real');
  dataset["south_africa"]["data"].addColumn('number', 'predict');
  dataset["south_africa"]["data"].addRows([
    ['1995', 155000000000, 161189430502],
    ['1996', 148000000000, 151428337249],
    ['1997', 153000000000, 147028077987],
    ['1998', 138000000000, 141248198506],
    ['1999', 137000000000, 125484232818],
    ['2000', 136000000000, 133441191200],
    ['2001', 122000000000, 125184084349],
    ['2002', 116000000000, 117003942237],
    ['2003', 175000000000, 176140460099],
    ['2004', 229000000000, 233017872334],
    ['2005', 258000000000, 253962887666],
    ['2006', 272000000000, 273210966121],
    ['2007', 299000000000, 291603544219],
    ['2008', 287000000000, 294488607455],
    ['2009', 296000000000, 300832700288],
    ['2010', 375000000000, 368919858143],
    ['2011', 416000000000, 420122000000],
    ['2012', 396000000000, 395290000000],
    ['2013', 367000000000, 364254000000],
    ['2014', 351000000000, 352133000000],
    ['2015', 318000000000, 316633000000],
    ['2016', 296000000000, 297410000000],
    ['2017', 349000000000, 346900000000]
  ]);
  dataset["south_africa"]["options"] = {
    title: 'South Africa\'s GDP in dollars (USD)',
    height: 500,
    series: {
      0: {  },
      1: { lineDashStyle: [10, 2] }
    }
  };


  var chart = new google.visualization.LineChart(document.getElementById('chart-2-div'));
  chart.draw(dataset[country]["data"], dataset[country]["options"]);
}

// Chart 1

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
  revenue_data.addColumn('number', 'eygpt');
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
    ['2011', 785643, 265605, 265101, 2475143, 700866],
    ['2012', 878336, 281143, 302944, 2567947, 770888]
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