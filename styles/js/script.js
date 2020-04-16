function changePosition( position ) {
    // обращаемя к снимкам наших сокомандников
    var teamPhotoContainer = document.getElementsByClassName('team__photo-container');
    // обращаемя к описаниям наших сокомандников
    var teamDescription    = document.getElementsByClassName('team__description')

    // удаляем активные классы, чтобы не мешались
    for (var i = 0; i < teamPhotoContainer.length; i++) {
        // teamPhotoContainer[i].style.order = 2;
        teamPhotoContainer[i].classList.remove("team__photo-container_active");
        teamDescription[i].classList.remove("team__description_active");

    }

     // добавляем активные классы
    teamPhotoContainer[position].classList.add("team__photo-container_active");
    teamDescription[position].classList.add("team__description_active");

    // обнуляем счетчик
    i = 0;
    
}
