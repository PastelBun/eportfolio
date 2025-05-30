function autoSizing() {
    let a = document.getElementById("qualifications").offsetHeight;
    document.documentElement.style.setProperty('--gridHeight', `${a}px`);
}

window.addEventListener('load', autoSizing);
window.addEventListener('resize', autoSizing);