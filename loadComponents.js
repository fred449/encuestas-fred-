function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error cargando el archivo:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    loadHTML('partials/header.html', 'header');
    loadHTML('partials/footer.html', 'footer');
});
