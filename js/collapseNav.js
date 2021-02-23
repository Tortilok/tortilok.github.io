const collapseButton = document.getElementById('collapseButtonId');
const collapseNav = document.getElementById('collapseNaigation');
collapseButton.onclick = () => {
    collapseButton.classList.toggle("collapseButtonActive")
    collapseNav.classList.toggle("navCollapseActive")
}
