function showTab(tabId) {
    // 1. Tamam content panels ko select karna
    const panels = document.querySelectorAll('div[id^="content"]');
    
    // 2. Loop chala kar sab panels ko display: none kar dena (chhipa dena)
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }
    
    // 3. Sirf us panel ko display: block karna jo user ne click kiya hai
    const targetPanel = document.getElementById(tabId);
    if (targetPanel) {
        targetPanel.style.display = "block";
    }
}