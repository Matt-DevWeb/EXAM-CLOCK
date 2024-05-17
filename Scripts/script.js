document.addEventListener('DOMContentLoaded', function () {
    function startExam(event) {
        event.preventDefault();

        let examTime = document.getElementById('timesetup').value;
        let durationHours = document.getElementById('DurationHours').value;
        let durationMinutes = document.getElementById('DurationMinutes').value;
        let typeofexam = document.getElementById('typeofexam').value;
        let autorisationSortieElement =
            document.getElementById('autorisationSortie');
        let autorisationSortieLabel = document.getElementById(
            'autorisationSortieLabel'
        );
        let calculatrice = document.getElementById('calculatrice').checked;
        let notes = document.getElementById('notes').checked;

        let autorisationSortie = '';
        if (!autorisationSortieElement.hidden) {
            autorisationSortie = autorisationSortieElement.value;
            autorisationSortieLabel.hidden = false;
        } else {
            autorisationSortieLabel.hidden = true;
        }

        let queryString = `?examTime=${examTime}&durationHours=${durationHours}&durationMinutes=${durationMinutes}&typeofexam=${typeofexam}&autorisationSortie=${autorisationSortie}&calculatrice=${calculatrice}&notes=${notes}`;
        window.location.href = `../HTML/count.html${queryString}`;
    }

    function handleTypeOfExamChange() {
        let typeofexam = document.getElementById('typeofexam').value;
        let autorisationSortieElement =
            document.getElementById('autorisationSortie');
        let autorisationSortieLabel = document.getElementById(
            'autorisationSortieLabel'
        );

        if (typeofexam == '3' || typeofexam == '4') {
            autorisationSortieElement.hidden = false;
            autorisationSortieLabel.hidden = false;
        } else {
            autorisationSortieElement.hidden = true;
            autorisationSortieLabel.hidden = true;
        }
    }

    document.getElementById('start').addEventListener('click', startExam);
    document
        .getElementById('typeofexam')
        .addEventListener('change', handleTypeOfExamChange);

    // Initialize the visibility of autorisationSortie and its label based on the initial selection
    handleTypeOfExamChange();
});
// Path: EXAM%20CLOCk/EXAM-CLOCK/Scripts/count.js
