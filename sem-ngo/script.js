function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="openTab('${tabId}')"]`).classList.add('active');
}
