function showTab(event, tabId) {
    const panels = document.querySelectorAll('.tab-panel');
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }
    const buttons = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add('active');
}
