function showTab(tabId) {
    const panels = document.querySelectorAll('div[id^="content"]');
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }

    const targetPanel = document.getElementById(tabId);
    if (targetPanel) {
        targetPanel.style.display = "block";
    }
}
