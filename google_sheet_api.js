document.getElementById('openSheetBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var sheetID = document.getElementById('sheetID').value;
    if (sheetID) {
        let iframeSrc = sheetID;
        document.getElementById('sheetIframe').src = iframeSrc;
    } else {
        alert('Please enter a valid Google Sheet Link.');
    }
});

document.getElementById('openSlideBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var slideId = document.getElementById('SlideID').value;
    if (slideId) {
        let iframeSrc = slideId;
        document.getElementById('slideIframe').src = iframeSrc;
    } else {
        alert('Please enter a valid Google Slide Link.');
    }
});

document.getElementById('openformBtn').addEventListener('click', function(event) {
    event.preventDefault();
    let formId = document.getElementById('formID').value;
    if (formId) {
        let iframeSrc = formId;
        document.getElementById('formsIframe').src = iframeSrc;
    } else {
        alert('Please enter a valid Google Slide Link.');
    }
});

document.getElementById('openmeetBtn').addEventListener('click', function(event) {
    event.preventDefault();
    let meetId = document.getElementById('meetID').value;
    if (meetId) {   
        let iframeSrc = meetId;
        document.getElementById('meetIframe').src = iframeSrc;
    } else {
        alert('Please enter a valid Google Meet Link.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const todayDate = getTodayDate();
    const stepsKey = `steps-${todayDate}`;
    
    let totalSteps = parseInt(localStorage.getItem(stepsKey)) || 0;

    document.getElementById('steps-log').innerText = `Steps walked today: ${totalSteps}`;

    document.getElementById('log-steps').addEventListener('click', function() {
        const stepsInput = document.getElementById('steps-input').value;
        const steps = parseInt(stepsInput, 10);

        if (!isNaN(steps) && steps > 0) {
            totalSteps += steps;
            localStorage.setItem(stepsKey, totalSteps); 
            document.getElementById('steps-log').innerText = `Steps walked today: ${totalSteps}`;
            document.getElementById('steps-input').value = ''; 
        } else {
            alert('Please enter a valid number of steps.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const targetId = checkbox.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);

            if (targetDiv) {
                if (checkbox.checked) {
                    targetDiv.style.display = 'block';
                } else {
                    targetDiv.style.display = 'none';
                }
            }
        });
        
        const targetId = checkbox.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);

        if (targetDiv) {
            targetDiv.style.display = checkbox.checked ? 'block' : 'none';
        }
    });
});