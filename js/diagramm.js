var ctx = document.getElementById("line").getContext("2d");
var type = 'line';
var clearChart;
var page;
document.cookie = 'cookieCount=0';

function checkFirstVisit() {
    if (document.cookie.indexOf('mycookie') === -1) {
        document.cookie = 'mycookie=1';
    }
    else {
    }
}

var land;
var checkLand;
var checkJan;
var checkFeb;
var checkMar;
var checkApr;
var checkMai;
var checkJun;
var checkJul;
var checkAug;
var checkSep;
var checkOkt;
var checkNov;
var checkDez;

var dataset = [
    {
        label: 'Deutschland',
        data: [2.1, 3.5, 7.4, 11.7, 16.8, 20, 21.8, 21.7, 18.3, 13.2, 7, 3.4],
        borderColor: 'Black',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }, {
        label: 'USA',
        data: [3, 7, 11, 16, 22, 29, 34, 32, 27, 19, 10, 4],
        borderColor: 'Green',
        backgroundColor: 'rgba(0, 121, 23, 0.4)'
    }, {
        label: 'Schweiz',
        data: [3.8, 5.3, 9.4, 13.5, 17.6, 21.4, 24.1, 23, 19.6, 14, 8.4, 4.7],
        borderColor: 'Red',
        backgroundColor: 'rgba(160, 2, 1, 0.4)'
    }
];
newChart();

function newChart() {
    checkLand = getCookie('Land');
    checkJan = getCookie('Januar');
    checkFeb = getCookie('Februar');
    checkMar = getCookie('Maerz');
    checkApr = getCookie('April');
    checkMai = getCookie('Mai');
    checkJun = getCookie('Juni');
    checkJul = getCookie('Juli');
    checkAug = getCookie('August');
    checkSep = getCookie('September');
    checkOkt = getCookie('Oktober');
    checkNov = getCookie('November');
    checkDez = getCookie('Dezember');
    if (checkLand !== "" && checkLand !== land) {
        dataset.push({
            label: checkLand,
            data: [parseInt(checkJan), parseInt(checkFeb), parseInt(checkMar), parseInt(checkApr), parseInt(checkMai), parseInt(checkJun), parseInt(checkJul), parseInt(checkAug), parseInt(checkSep), parseInt(checkOkt), parseInt(checkNov), parseInt(checkDez)],
            borderColor: 'Black',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
        });
        land = checkLand;
    }
    clearChart = new Chart(ctx, {
        type: type,
        data: {
            labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            datasets: dataset
        },
        options: {
            title: {
                display: true,
                text: 'Durchschnittstemparatur'
            },
        }

    });
}

var error = 'Das Diagramm ist bereits ein';

function showLineChart() {
    if (type !== 'line') {
        clearChart.destroy();
        type = 'line';
        newChart();
    } else
        alert(error + ' Liniendiagramm!')
}

function showBarChart() {
    if (type !== 'bar') {
        clearChart.destroy();
        type = 'bar';
        newChart();
    } else
        alert(error + ' Säulendiagramm!')
}

function addLand() {
    page = window.open('', 'Ein Land hinzufügen', 'width=257,height=414');
    page.dataset = dataset;
    page.document.write(
        '<script>' +
        'function generateLand() {' +
        'document.cookie = \'cookieCount=\';' +
        'document.cookie = \'Land=\';' +
        'document.cookie = \'Januar=\';' +
        'document.cookie = \'Februar=\';' +
        'document.cookie = \'Maerz=\';' +
        'document.cookie = \'April=\';' +
        'document.cookie = \'Mai=\';' +
        'document.cookie = \'Juni=\';' +
        'document.cookie = \'Juli=\';' +
        'document.cookie = \'August=\';' +
        'document.cookie = \'September=\';' +
        'document.cookie = \'Oktober=\';' +
        'document.cookie = \'November=\';' +
        'document.cookie = \'Dezember=\';' +
        'document.cookie = \'Land=\' + document.getElementById(\'land\').value;' +
        'document.cookie = \'Januar=\' + document.getElementById(\'jan\').value;' +
        'document.cookie = \'Februar=\' + document.getElementById(\'feb\').value;' +
        'document.cookie = \'Maerz=\' + document.getElementById(\'mar\').value;' +
        'document.cookie = \'April=\' + document.getElementById(\'apr\').value;' +
        'document.cookie = \'Mai=\' + document.getElementById(\'mai\').value;' +
        'document.cookie = \'Juni=\' + document.getElementById(\'jun\').value;' +
        'document.cookie = \'Juli=\' + document.getElementById(\'jul\').value;' +
        'document.cookie = \'August=\' + document.getElementById(\'aug\').value;' +
        'document.cookie = \'September=\' + document.getElementById(\'sep\').value;' +
        'document.cookie = \'Oktober=\' + document.getElementById(\'okt\').value;' +
        'document.cookie = \'November=\' + document.getElementById(\'nov\').value;' +
        'document.cookie = \'Dezember=\' + document.getElementById(\'dez\').value;' +
        'window.close();' +
        '}' +
        '</script>' +
        '<form onsubmit="generateLand();">Land:<input type="text" id="land" placeholder="Land" required><br>' +
        '<table>' +
        '<tr>' +
        '<th>Monat</th>' +
        '<th>Grad</th>' +
        '</tr>' +
        '<tr>' +
        '<th>Januar</th>' +
        '<td><input type="number" value="0" id="jan"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Februar</th>' +
        '<td><input type="number" value="0" id="feb"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>März</th>' +
        '<td><input type="number" value="0" id="mar"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>April</th>' +
        '<td><input type="number" value="0" id="apr"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Mai</th>' +
        '<td><input type="number" value="0" id="mai"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Juni</th>' +
        '<td><input type="number" value="0" id="jun"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Juli</th>' +
        '<td><input type="number" value="0" id="jul"><br></td>' +
        '</tr>' +
        '<tr>' +
        '<th>August</th>' +
        '<td><input type="number" value="0" id="aug"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>September</th>' +
        '<td><input type="number" value="0" id="sep"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Oktober</th>' +
        '<td><input type="number" value="0" id="okt"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>November</th>' +
        '<td><input type="number" value="0" id="nov"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Dezember</th>' +
        '<td><input type="number" value="0" id="dez"></td>' +
        '</tr>' +
        '</table>' +
        '<button type="submit">Generieren</button>' +
        '</form>');
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}