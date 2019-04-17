google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Revenue(2016)'],
        ['Morocco', 303.62],
        ['South Africa', 1263],
        ['Kenya', 1332.64],
        ['Cameroon', 3097.57],
        ['Egypt', 491.11],
    ]);

    var options = {
        legend: 'none',
        height: 550,
        region: '002',
        colors: ['#F4A460', '#CD853F', '#8B4513', '#A52A2A'],
        datalessRegionColor: '#A9A9A9',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-revenue-div'));

    chart.draw(data, options);
}