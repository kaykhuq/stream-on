google.charts.load('current', {'packages':['bar','line','corechart']});
google.charts.setOnLoadCallback(drawCurveTypes);
google.charts.setOnLoadCallback(drawAxisTickColors);
function drawCurveTypes() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Sales'],
        ['Jan',  120000],
        ['Feb',  125000],
        ['Mar',  20000],
        ['Apr',  70000],
        ['May',  70000],
        ['Jun',  70000],
        ['Jul',  70000],
        ['Aug',  120000],
        ['Sep',  60000],
        ['Oct',  65000],
        ['Nov',  10000],
        ['Dec',  70000],

    ]);


    var options = {

        series: {
            1: {curveType: 'function'},
            0: { color: '#e2431e' }
        },
        color: '#777777'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}


function drawAxisTickColors() {
    var data2 = google.visualization.arrayToDataTable([
        ['Month', 'Impressions', 'Requests'],
        ['Jan',  1000, 400],
        ['Feb',  1170, 460],
        ['Mar',  660, 1120],
        ['Apr',  1030, 540],
        ['May',  1000, 400],
        ['Jun',  1170, 460],
        ['Jul',  1000, 400],
        ['Aug',  1030, 540],
        ['Sep',  1030, 540],
        ['Oct',  1000, 400],
        ['Nov',  1030, 540],
        ['Dec',  660, 1120]
    ]);

    var options = {
        bar: {groupWidth: "15%"},
        series: {
            0: {
                color: '#FF5257'
            },
            1: {
                color: '#B30010'
            }
        }

    };

    var chart2 = new google.visualization.ColumnChart(document.getElementById('column_chart_div'));
    chart2.draw(data2, options);
}