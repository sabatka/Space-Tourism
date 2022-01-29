
const destinationImg = document.getElementById("img-destination-id");
const destinationTitle = document.getElementById("title-destination-id");
const destinationDescription = document.getElementById("destination-description-id");
const travelDistance = document.getElementById("travel-distance");
const travelTime = document.getElementById("travel-time");
const moonNav = document.getElementById("moon-nav");
const marsNav = document.getElementById("mars-nav");
const europaNav = document.getElementById("europa-nav");
const titanNav = document.getElementById("titan-nav");

window.transitionToPage = function(href){
    document.querySelector('body').style.opacity = 0
    setTimeout(function(){
        window.location.href = href
    },500)
};

document.addEventListener('DOMContentLoaded',function(event){
    document.querySelector('body').style.opacity = 1
});

function moonClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        destinationTitle.innerHTML = data.destinations[0].name.toUpperCase();
        destinationImg.src = data.destinations[0].images.webp;
        destinationDescription.innerHTML = data.destinations[0].description;
        travelDistance.innerHTML = data.destinations[0].distance.toUpperCase();
        travelTime.innerHTML = data.destinations[0].travel.toUpperCase();
        keepActive(moonNav);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function marsClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        destinationTitle.innerHTML = data.destinations[1].name.toUpperCase();
        destinationImg.src = data.destinations[1].images.webp;
        destinationDescription.innerHTML = data.destinations[1].description;
        travelDistance.innerHTML = data.destinations[1].distance.toUpperCase();
        travelTime.innerHTML = data.destinations[1].travel.toUpperCase();
        keepActive(marsNav)
    })
    .catch(function(err){
        console.log(err);
    });    
}

function europaClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        destinationTitle.innerHTML = data.destinations[2].name.toUpperCase();
        destinationImg.src = data.destinations[2].images.webp;
        destinationDescription.innerHTML = data.destinations[2].description;
        travelDistance.innerHTML = data.destinations[2].distance.toUpperCase();
        travelTime.innerHTML = data.destinations[2].travel.toUpperCase();
        keepActive(europaNav);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function titanClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        destinationTitle.innerHTML = data.destinations[3].name.toUpperCase();
        destinationImg.src = data.destinations[3].images.webp;
        destinationDescription.innerHTML = data.destinations[3].description;
        travelDistance.innerHTML = data.destinations[3].distance.toUpperCase();
        travelTime.innerHTML = data.destinations[3].travel.toUpperCase();
        keepActive(titanNav);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function keepActive(elem) {
    moonNav.classList.remove('active');
    marsNav.classList.remove('active');
    titanNav.classList.remove('active');
    europaNav.classList.remove('active');
    elem.classList.add('active');
  }