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
var checkMae;
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
    var cookieNames = ['Land', 'Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November',
        'Dezember'];
    var count;
    for (count = 0; count < cookieNames.length; count++) {
        if (count === 0)
            checkLand = getCookie(cookieNames[count]);
        else
            window['check' + cookieNames[count].substring(0, 3)] = getCookie(cookieNames[count])
    }
    if (checkLand !== "" && checkLand !== land) {
        dataset.push({
            label: checkLand,
            data: [parseInt(checkJan), parseInt(checkFeb), parseInt(checkMae), parseInt(checkApr), parseInt(checkMai), parseInt(checkJun), parseInt(checkJul), parseInt(checkAug), parseInt(checkSep), parseInt(checkOkt), parseInt(checkNov), parseInt(checkDez)],
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
            }
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
    if (!navigator.cookieEnabled) {
        alert('Für diese Funktion müssen Cookies in deinem Browser aktiviert sein.');
        return;
    }
    if (page)
        page.window.close();
    page = window.open('', 'Ein Land hinzufügen', 'width=257,height=414');
    page.document.write(
        '<link type="text/css" href="css/addData.css" rel="stylesheet">' +
        '<script>' +
        'function generateLand() {' +
        'var allItems = [' +
        '{' +
        'name:"Land",' +
        'element:"land"' +
        '},{' +
        'name:"Januar",' +
        'element:"jan"' +
        '}, {' +
        'name:"Februar",' +
        'element:"feb"' +
        '}, {' +
        'name:"Maerz",' +
        'element:"mae"' +
        '},{' +
        'name:"April",' +
        'element:"apr"' +
        '},{' +
        'name:"Mai",' +
        'element:"mai"' +
        '},{' +
        'name:"Juni",' +
        'element:"jun"' +
        '},{' +
        'name:"Juli",' +
        'element:"jul"' +
        '},{' +
        'name:"August",' +
        'element:"aug"' +
        '},{' +
        'name:"September",' +
        'element:"sep"' +
        '},{' +
        'name:"Oktober",' +
        'element:"okt"' +
        '},{' +
        'name:"November",' +
        'element:"nov"' +
        '},{' +
        'name:"Dezember",' +
        'element:"dez"' +
        '}];' +
        'for(var count = 0; count < allItems.length; count++) {' +
        'document.cookie = allItems[count].name + "=" + document.getElementById(allItems[count].element).value' +
        '}' +
        'alert("Damit die Änderungen wirksam werden, muss das Fenster neu geladen werden (Strg + R).");' +
        'window.close();' +
        '}' +
        '</script>' +
        '<form onsubmit="generateLand();">Land:<input type="text" id="land" placeholder="Land" required><br><br>' +
        '<table>' +
        '<tr>' +
        '<th>Monat</th>' +
        '<th>Grad</th>' +
        '</tr>' +
        '<tr>' +
        '<th>Januar</th>' +
        '<td><input type="number" value="0" id="jan" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Februar</th>' +
        '<td><input type="number" value="0" id="feb" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>März</th>' +
        '<td><input type="number" value="0" id="mae" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>April</th>' +
        '<td><input type="number" value="0" id="apr" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Mai</th>' +
        '<td><input type="number" value="0" id="mai" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Juni</th>' +
        '<td><input type="number" value="0" id="jun" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Juli</th>' +
        '<td><input type="number" value="0" id="jul" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>August</th>' +
        '<td><input type="number" value="0" id="aug" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>September</th>' +
        '<td><input type="number" value="0" id="sep" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Oktober</th>' +
        '<td><input type="number" value="0" id="okt" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>November</th>' +
        '<td><input type="number" value="0" id="nov" step="0.01"></td>' +
        '</tr>' +
        '<tr>' +
        '<th>Dezember</th>' +
        '<td><input type="number" value="0" id="dez" step="0.01"></td>' +
        '</tr>' +
        '</table>' +
        '<button type="submit">Generieren</button>' +
        '</form>');
}

$(document).focus(function () {
    page.window.close();
});

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