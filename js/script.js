
const destinationImg = document.getElementById("img-destination-id");
const destinationTitle = document.getElementById("title-destination-id");
const destinationDescription = document.getElementById("destination-description-id");
const travelDistance = document.getElementById("travel-distance");
const travelTime = document.getElementById("travel-time");
const moonNav = document.getElementById("moon-nav");
const marsNav = document.getElementById("mars-nav");
const europaNav = document.getElementById("europa-nav");
const titanNav = document.getElementById("titan-nav");

const crewImg = document.getElementById("crew-img");
const crewRole = document.getElementById("crew-role-id");
const crewName = document.getElementById("title-crew-id");
const crewBio = document.getElementById("crew-description-id");
const crewSelector1 = document.getElementById("selector1");
const crewSelector2 = document.getElementById("selector2");
const crewSelector3 = document.getElementById("selector3");
const crewSelector4 = document.getElementById("selector4");

const techImg = document.getElementById("tech-img");
const techTitle = document.getElementById("title-tech-id");
const techDescription = document.getElementById("tech-description-id");
const techPicker1 = document.getElementById("picker1");
const techPicker2 = document.getElementById("picker2");
const techPicker3 = document.getElementById("picker3");

let currentPos = 0;

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

function douglasClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        crewName.innerHTML = data.crew[0].name.toUpperCase();
        crewImg.src = data.crew[0].images.webp;
        crewRole.innerHTML = data.crew[0].role.toUpperCase();
        crewBio.innerHTML = data.crew[0].bio;
        activateSelector(crewSelector1);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function markClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        crewName.innerHTML = data.crew[1].name.toUpperCase();
        crewImg.src = data.crew[1].images.webp;
        crewRole.innerHTML = data.crew[1].role.toUpperCase();
        crewBio.innerHTML = data.crew[1].bio;
        activateSelector(crewSelector2);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function victorClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        crewName.innerHTML = data.crew[2].name.toUpperCase();
        crewImg.src = data.crew[2].images.webp;
        crewRole.innerHTML = data.crew[2].role.toUpperCase();
        crewBio.innerHTML = data.crew[2].bio;
        activateSelector(crewSelector3);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function anoClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        crewName.innerHTML = data.crew[3].name.toUpperCase();
        crewImg.src = data.crew[3].images.webp;
        crewRole.innerHTML = data.crew[3].role.toUpperCase();
        crewBio.innerHTML = data.crew[3].bio;
        activateSelector(crewSelector4);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function tech1OnClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        techTitle.innerHTML = data.technology[0].name.toUpperCase();
        verifyWindowSize(techImg,data,0);
        currentPos = 0;
        techDescription.innerHTML = data.technology[0].description;
        activePicker(techPicker1);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function tech2OnClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        techTitle.innerHTML = data.technology[1].name.toUpperCase();
        verifyWindowSize(techImg,data,1);
        currentPos = 1;
        techDescription.innerHTML = data.technology[1].description;
        activePicker(techPicker2);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function tech3OnClick(){
    fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        techTitle.innerHTML = data.technology[2].name.toUpperCase();
        verifyWindowSize(techImg,data,2);
        currentPos = 2;
        techDescription.innerHTML = data.technology[2].description;
        activePicker(techPicker3);
    })
    .catch(function(err){
        console.log(err);
    });    
}

function verifyWindowSize(elem,data, pos){
    if(window.innerWidth < 1340 || document.documentElement.clientWidth < 1340){
        elem.src = data.technology[pos].images.landscape;
    }else{
        elem.src = data.technology[pos].images.portrait;  
    }
}


window.addEventListener('resize', function(event) {
    switch(currentPos){
        case 0:
            tech1OnClick();
            break;

        case 1:
            tech2OnClick();
            break;

        case 2:
            tech3OnClick();
            break;
    }

}, true);

function activePicker(elem){
    let elems = document.querySelectorAll('.picker-active');
    [].forEach.call(elems, function(el) {
      el.classList.remove('picker-active');
    });
    elem.classList.add('picker-active');
}

function activateSelector(elem){
    let elems = document.querySelectorAll('.selector-active');
  [].forEach.call(elems, function(el) {
    el.classList.remove('selector-active');
  });
  elem.classList.add('selector-active');
}

function keepActive(elem) {
    moonNav.classList.remove('active');
    marsNav.classList.remove('active');
    titanNav.classList.remove('active');
    europaNav.classList.remove('active');
    elem.classList.add('active');
}