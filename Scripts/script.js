document.addEventListener('DOMContentLoaded', function () {
    function startExam(event) {
        event.preventDefault();
        let examTime = document.getElementById('timesetup').value;
        let durationHours = document.getElementById('DurationHours').value;
        let durationMinutes = document.getElementById('DurationMinutes').value;
        let typeofexam = document.getElementById('typeofexam').value;
        if (typeofexam == '3' || typeofexam == '4') {
            let autorisationSortie = document.getElementById(
                'autorisationdesortie'
            );
            autorisationSortie.hidden = false;
            autorisationSortie = autorisationSortie.value;
        } else {
            let autorisationSortie = '';
        }
        let calculatrice = document.getElementById('calculatrice').checked;
        let notes = document.getElementById('notes').checked;

        let queryString = `?examTime=${examTime}&durationHours=${durationHours}&durationMinutes=${durationMinutes}&typeofexam=${typeofexam}&calculatrice=${calculatrice}&notes=${notes}`;
        window.location.href = `../HTML/count.html${queryString}`;
    }
    document.getElementById('start').addEventListener('click', startExam);
});
