const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtonsContainer = document.querySelector('.tab-buttons');

tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tab = this.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      this.classList.add('active');
      document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');

      document.querySelector('.tab-contents').scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

tabButtons[0].classList.add('active');
  tabContents[0].classList.add('active');



  // FILTER SEARCH BAR 

  // get input field and add 'keyup' event listener
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);

// get all title
let titles = document.querySelectorAll('.main .title');
let searchTerm = '';
let tit = '';

function search(e) {
  // get input fieled value and change it to lower case
  searchTerm = e.target.value.toLowerCase();

  titles.forEach((title) => {
    // navigate to p in the title, get its value and change it to lower case
    tit = title.textContent.toLowerCase();
    // it search term not in the title's title hide the title. otherwise, show it.
    tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';
  });
}



// Detail page review section


function starsReducer(state, action) {
  switch (action.type) {
    case 'HOVER_STAR': {
      return {
        starsHover: action.value,
        starsSet: state.starsSet
      }
    }
    case 'CLICK_STAR': {
      return {
        starsHover: state.starsHover,
        starsSet: action.value
      }
    }
      break;
    default:
      return state
  }
}

var StarContainer = document.getElementById('rating');
var StarComponents = StarContainer.children;

var state = {
  starsHover: 0,
  starsSet: 4
}

function render(value) {
  for(var i = 0; i < StarComponents.length; i++) {
    StarComponents[i].style.fill = i < value ? '#f39c12' : '#808080'
  }
}

for (var i=0; i < StarComponents.length; i++) {
  StarComponents[i].addEventListener('mouseenter', function() {
    state = starsReducer(state, {
      type: 'HOVER_STAR',
      value: this.id
    })
    render(state.starsHover);
  })

  StarComponents[i].addEventListener('click', function() {
    state = starsReducer(state, {
      type: 'CLICK_STAR',
      value: this.id
    })
    render(state.starsHover);
  })
}

StarContainer.addEventListener('mouseleave', function() {
  render(state.starsSet);
})

var review = document.getElementById('review');
var remaining = document.getElementById('remaining');
review.addEventListener('input', function(e) {
  review.value = (e.target.value.slice(0,999));
  remaining.innerHTML = (999-e.target.value.length);
})

var form = document.getElementById("review-form")

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let post = {
    stars: state.starsSet,
    review: form['review'].value,
    name: form['name'].value,
    city: form['city'].value,
    email: form['email'].value
  }

  console.log(post)
})

document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('submitForm').click();
})

var reviews = {
  reviews: [
    {
      stars: 3,
      name: 'bob',
      city: 'Noosk',
      review: '1 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
    },{
      stars: 4,
      name: 'bobbo',
      city: 'WinNoosk',
      review: '2 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
    },{
      stars: 2,
      name: 'bobster',
      city: 'NooSKI',
      review: '3 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our'
    },
  ]
}

function ReviewStarContainer(stars) {
  var div = document.createElement('div');
  div.className = "stars-container";
  for (var i = 0; i < 5; i++) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('viewBox',"0 12.705 512 486.59");
    svg.setAttribute('x',"0px");
    svg.setAttribute('y',"0px");
    svg.setAttribute('xml:space',"preserve");
    svg.setAttribute('class',"star");
    var svgNS = svg.namespaceURI;
    var star = document.createElementNS(svgNS,'polygon');
    star.setAttribute('points', '256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566');
    star.setAttribute('fill', i < stars ? '#f39c12' : '#808080');
    svg.appendChild(star);
    div.appendChild(svg);
  }
  return div;
}

function ReviewContentContainer(name, city, review) {

  var reviewee = document.createElement('div');
  reviewee.className = "reviewee footer";
  reviewee.innerHTML  = '- ' + name + ', ' + city

  var comment = document.createElement('p');
  comment.innerHTML = review;

  var div = document.createElement('div');
  div.className = "review-content";
  div.appendChild(comment);
  div.appendChild(reviewee);

  return div;
}

function ReviewsContainer(review) {
  var div = document.createElement('blockquote');
  div.className = "review";
  div.appendChild(ReviewStarContainer(review.stars));
  div.appendChild(ReviewContentContainer(review.name,review.city,review.review));
  return div;
}

for(var i = 0; i < reviews.reviews.length; i++) {
  document.getElementById('review-container').appendChild(ReviewsContainer(reviews.reviews[i]))
}





// profile menu script

function menuToggle() {
  const toggleMenu = document.querySelector(".menu2");
  toggleMenu.classList.toggle("active");
}


// let toggleBtn = document.getElementById('toggle-btn');
// let body = document.body;
// let darkMode = localStorage.getItem('dark-mode');

// const enableDarkMode = () =>{
//    toggleBtn.classList.replace('fa-sun', 'fa-moon');
//    body.classList.add('dark');
//    localStorage.setItem('dark-mode', 'enabled');
// }

// const disableDarkMode = () =>{
//    toggleBtn.classList.replace('fa-moon', 'fa-sun');
//    body.classList.remove('dark');
//    localStorage.setItem('dark-mode', 'disabled');
// }

// if(darkMode === 'enabled'){
//    enableDarkMode();
// }

// toggleBtn.onclick = (e) =>{
//    darkMode = localStorage.getItem('dark-mode');
//    if(darkMode === 'disabled'){
//       enableDarkMode();
//    }else{
//       disableDarkMode();
//    }
// }
 
// let profile = document.querySelector('.navbar .profile');

// document.querySelector('#user-btn').onclick = () =>{
//    profile.classList.toggle('active');
//    search.classList.remove('active');
// }

// let search = document.querySelector('.navbar .search-form');

// document.querySelector('#search-btn').onclick = () =>{
//    search.classList.toggle('active');
//    profile.classList.remove('active');
// }

// let sideBar = document.querySelector('.side-bar');

// document.querySelector('#menu-btn').onclick = () =>{
//    sideBar.classList.toggle('active');
//    body.classList.toggle('active');
// }

// document.querySelector('#close-btn').onclick = () =>{
//    sideBar.classList.remove('active');
//    body.classList.remove('active');
// }

// window.onscroll = () =>{
//    profile.classList.remove('active');
//    search.classList.remove('active');

//    if(window.innerWidth < 1200){
//       sideBar.classList.remove('active');
//       body.classList.remove('active');
//    }
// }