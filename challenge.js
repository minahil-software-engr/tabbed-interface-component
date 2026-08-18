function showTab(event, tabId) {
    // 1. Tamam content panels ko chhupana
    const panels = document.querySelectorAll('.tab-panel');
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }

    // 2. Tamam buttons se 'active' class hatana
    const buttons = document.querySelectorAll('.tab-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // 3. Click kiye gaye panel ko show karna
    document.getElementById(tabId).style.display = "block";

    // 4. Challenge Requirement: Jis button par click hua hai, usay 'active' class dena
    event.currentTarget.classList.add('active');
}