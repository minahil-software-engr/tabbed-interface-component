function showTab(index) {
    const container = document.getElementById('content-container');
    
    // 1. Pehle container ko khali karna (purana content remove karna)
    container.innerHTML = '';
    
    // 2. Templates mein se content uthana
    const templates = [
        document.getElementById('tab1-content'),
        document.getElementById('tab2-content'),
        document.getElementById('tab3-content')
    ];
    
    // 3. Jo tab click hua hai, uska content container ke andar insert karna
    const clone = templates[index].content.cloneNode(true);
    container.appendChild(clone);
}