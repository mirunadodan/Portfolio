const about = document.querySelector("#about");

// About button
about.addEventListener('click', function () {

    const aboutOverlay = document.getElementById('aboutOverlay');

    const popup = document.getElementById('popup');

    const closeAboutPopup = document.getElementById('closeAboutPopup');


    // Function to open the popup

    function openPopup() {

        aboutOverlay.style.display = 'block';

    }

    // Function to close the popup

    function closePopupFunc() {

        aboutOverlay.style.display = 'none';

    }


    // Event listeners

    // Trigger the popup to open (you can call this function on a button click or any other event)

    openPopup();

    // Close the popup when the close button is clicked

    closeAboutPopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content

    aboutOverlay.addEventListener('click', function (event) {

        if (event.target === aboutOverlay) {

            closePopupFunc();

        }

    });
});

