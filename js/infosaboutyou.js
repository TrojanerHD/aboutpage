var cookies;
var java;
var lang = navigator.language;
if (navigator.cookieEnabled)
    cookies = 'Aktiviert';
else
    cookies = 'Nicht aktiviert';
if (navigator.javaEnabled())
    java = 'Aktiviert';
else
    java = 'Deaktiviert';
if(lang === 'de')
    lang = 'Deutsch';
    document.write('<div style="text-align: center;"><table><tr><th>Browser</th><th>Cookies</th><th>Version</th><th>Plattform</th><th>Browsersprache</th><th>Java</th><th>' +
        'Auflösung des Bildschirms</th></tr><tr><td>' + navigator.appCodeName + '</td><td>' + cookies + '</td><td>' + navigator.userAgent +
        '</td><td>' + navigator.platform + '</td><td>' + lang + '</td><td>' + java + '</td><td>' +
        screen.width + 'x' + screen.height + '</td></tr></table></div>');