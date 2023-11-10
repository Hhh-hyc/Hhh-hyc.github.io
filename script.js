// script.js
const pages = document.querySelectorAll('.page-container');
let currentPageIndex = 0;

function turnPage() {
    if (currentPageIndex < pages.length) {
        pages[currentPageIndex].style.animationDirection = 'normal';
        pages[currentPageIndex].classList.add('flipped');
        currentPageIndex++;

        // Set a timeout to turn the next page
        setTimeout(turnPage, 2000); // Adjust the delay (in milliseconds) as needed
    }
}

// Start turning pages when the page loads
window.addEventListener('load', () => {
    setTimeout(turnPage, 2000); // Adjust the initial delay as needed
});
