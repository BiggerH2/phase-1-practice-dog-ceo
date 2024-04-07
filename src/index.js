console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function () {
    // Challenge 1: Fetch images and render them
    fetchImages();

    // Challenge 2: Fetch breeds and render them
    fetchBreeds();

    // Challenge 3: Change font color on click
    document.querySelector('#dog-breeds').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue'; // Change color to blue
        }
    });

    // Challenge 4: Filter breeds
    document.getElementById('breed-dropdown').addEventListener('change', function () {
        const selectedLetter = this.value;
        filterBreeds(selectedLetter);
    });
});

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                document.getElementById('dog-image-container').appendChild(img);
            });
        })
        .catch(error => console.log(error));
}

function fetchBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                document.getElementById('dog-breeds').appendChild(li);
            });
        })
        .catch(error => console.log(error));
}

function filterBreeds(letter) {
    const breedList = document.getElementById('dog-breeds');
    const breeds = breedList.getElementsByTagName('li');
    Array.from(breeds).forEach(breed => {
        if (breed.textContent.charAt(0) !== letter) {
            breed.style.display = 'none';
        } else {
            breed.style.display = 'list-item';
        }
    });
}
