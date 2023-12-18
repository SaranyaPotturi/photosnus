document.addEventListener('DOMContentLoaded', function () {
    // Add your image URLs here
    const imageUrls = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        // Add more image URLs as needed
    ];

    const galleryContainer = document.querySelector('.gallery');

    imageUrls.forEach((imageUrl, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = `Image ${index + 1}`;
        image.dataset.lightbox = 'gallery';

        thumbnail.appendChild(image);
        galleryContainer.appendChild(thumbnail);
    });
});
