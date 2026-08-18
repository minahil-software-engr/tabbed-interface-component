function showTab(index) {
    const container = document.getElementById('content-container');

    container.innerHTML = '';
    const templates = [
        document.getElementById('tab1-content'),
        document.getElementById('tab2-content'),
        document.getElementById('tab3-content')
    ];
    const clone = templates[index].content.cloneNode(true);
    container.appendChild(clone);
}
