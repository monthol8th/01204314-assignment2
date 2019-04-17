google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'GDP(2017)'],
        ['Morocco', 113185572739],
        ['South Africa', 349000000000],
        ['Kenya', 82200000000],
        ['Cameroon', 29720000000],
        ['Egypt', 231000000000],
    ]);

    var options = {
        // chart: {
            title: 'Gross Domestic Product',
            subtitle: 'in dollars (USD)',
            // backgroundColor: '#f1f8e9',
        // }, 
        // width: 400,
        legend: 'none',
        height: 550,
        region: '002',
        colors: ['#F4A460', '#CD853F', '#8B4513', '#A52A2A'],
        datalessRegionColor: '#A9A9A9',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-gdp-div'));

    chart.draw(data, options);
}