function hideChart() {
    if ($('#hideChart')[0].style.display === 'block')
        $('#hideChart')[0].style.display = 'none';
    else
        $('#hideChart')[0].style.display = 'block';
    // document.getElementById('hideChart').style.display = 'block'
}

$(document).ready(function () {
    $('#jqueryLink').click(function (event) {
        alert("The link will no longer take you to jquery.com");
        event.preventDefault();
    });
    $('h1').fadeIn();
});