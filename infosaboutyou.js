var cookies;
var java;
if (navigator.cookieEnabled)
    cookies = 'aktiviert';
else
    cookies = 'nicht aktiviert';
debugger;
if (navigator.javaEnabled())
    java = 'aktiviert';
else
    java = 'deaktiviert';
    document.write('<div style="text-align: center;"><table><tr><th>Browser</th><th>Cookies</th><th>Version</th><th>Plattform</th><th>Browsersprache</th><th>Java</th><th>' +
        'Auflösung des Bildschirms</th></tr><tr><td>' + navigator.appCodeName + '</td><td>' + cookies + '</td><td>' + navigator.userAgent +
        '</td><td>' + navigator.platform + '</td><td>' + navigator.language + '</td><td>' + java + '</td><td>' +
        screen.width + 'x' + screen.height + '</td></tr></table></div>');