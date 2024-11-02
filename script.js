document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveFavorite');


    saveButton.addEventListener('click', function () {
        const favoriteDish = 'Sushi';  // Default favorite dish
        localStorage.setItem('favoriteDish', favoriteDish);
        alert('Your favorite dish has been saved as ' + favoriteDish);
    });


    // Fetch favorite dish from local storage on page load
    const savedFavoriteDish = localStorage.getItem('favoriteDish');
    if (savedFavoriteDish) {
        alert('Your saved favorite dish is ' + savedFavoriteDish);
    }
});
