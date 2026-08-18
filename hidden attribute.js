function showTab(tabId) {
    // 1. Tamam content panels ko select karna
    const panels = document.querySelectorAll('div[id^="content"]');
    
    // 2. Loop chala kar sab panels par hidden attribute lagana (chhipa dena)
    for (let i = 0; i < panels.length; i++) {
        panels[i].hidden = true;
    }
    
    // 3. Sirf us panel se hidden attribute hatana jo user ne click kiya hai
    const targetPanel = document.getElementById(tabId);
    if (targetPanel) {
        targetPanel.hidden = false;
    }
}