fetch('nav.html')
    .then(res => res.text())
    .then(text => {
        let placeholder = document.getElementById('navbar-placeholder');
        placeholder.innerHTML = text;
    })
    .catch(err => console.error('Error loading navigation:', err));
