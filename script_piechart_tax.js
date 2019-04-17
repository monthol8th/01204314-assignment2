google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

var chart_country = "cameroon";

function select_country(country) {
    chart_country = country;
    drawChart(chart_country);
}

function drawChart(country) {
    var dataset = {};
    dataset["cameroon"] = {};
    dataset["cameroon"]["data"] = new google.visualization.DataTable();
    dataset["cameroon"]["data"].addColumn('string', 'Ratio of Tax Revenue');
    dataset["cameroon"]["data"].addColumn('number', 'Tax Revenue');
    dataset["cameroon"]["data"].addRows([
        ['Taxes on income, profits and capital gains', 479335.5188],
        ['Social security contributions (SSC)', 30652.19335],
        ['Taxes on property', 17085.80476],
        ['Taxes on goods and services', 939692.9381],
        ['Other taxes', 24276.70282]
    ]);
    dataset["cameroon"]["options"] = {
        height: 500
    };

    dataset["egypt"] = {};
    dataset["egypt"]["data"] = new google.visualization.DataTable();
    dataset["egypt"]["data"].addColumn('string', 'Ratio of Tax Revenue');
    dataset["egypt"]["data"].addColumn('number', 'Tax Revenue');
    dataset["egypt"]["data"].addRows([
        ['Taxes on income, profits and capital gains', 72885.367],
        ['Social security contributions (SSC)', 25640.61636],
        ['Taxes on property', 2197.555],
        ['Taxes on goods and services', 64520.78482]   
    ]);
    dataset["egypt"]["options"] = {
        height: 500
    };

    dataset["kenya"] = {};
    dataset["kenya"]["data"] = new google.visualization.DataTable();
    dataset["kenya"]["data"].addColumn('string', 'Ratio of Tax Revenue');
    dataset["kenya"]["data"].addColumn('number', 'Tax Revenue');
    dataset["kenya"]["data"].addRows([    
        ['Taxes on income, profits and capital gains', 232223.0375],
        ['Social security contributions (SSC)', 5690.84533],
        ['Taxes on property', 5507.887188],
        ['Taxes on goods and services', 296189.8869]
    ]);
    dataset["kenya"]["options"] = {
        height: 500
    };

    dataset["morocco"] = {};
    dataset["morocco"]["data"] = new google.visualization.DataTable();
    dataset["morocco"]["data"].addColumn('string', 'Ratio of Tax Revenue');
    dataset["morocco"]["data"].addColumn('number', 'Tax Revenue');
    dataset["morocco"]["data"].addRows([
        ['Taxes on income, profits and capital gains', 57728.38706],
        ['Social security contributions (SSC)', 30790.07],
        ['Taxes on property', 11774.633],
        ['Taxes on goods and services', 84112.49371],
        ['Other taxes', 1906.031118]
    ]);
    dataset["morocco"]["options"] = {
        height: 500
    };

    dataset["south_africa"] = {};
    dataset["south_africa"]["data"] = new google.visualization.DataTable();
    dataset["south_africa"]["data"].addColumn('string', 'Ratio of Tax Revenue');
    dataset["south_africa"]["data"].addColumn('number', 'Tax Revenue');
    dataset["south_africa"]["data"].addRows([
        ['Taxes on income, profits and capital gains', 342386.3912],     
        ['Social security contributions (SSC)', 10658.94773],
        ['Taxes on property', 32614.62994],
        ['Taxes on goods and services', 245650.6291]
    ]);
    dataset["south_africa"]["options"] = {
        height: 500
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(dataset[chart_country]["data"], dataset[chart_country]["options"]);
}