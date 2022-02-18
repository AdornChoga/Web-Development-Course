import tutors from '../app-data/tutors.js';

function loadTutors() {
  const section = document.querySelector('.tutors');
  const title = '<h1 class="tutors-title">Our Tutors</h1>';
  const container = document.createElement('div');
  container.classList.add('grid-tutors');
  const underline = '<hr>';
  section.innerHTML = title;
  section.innerHTML += underline;
  section.appendChild(container);

  for (let i = 0; i < tutors.length; i += 1) {
    container.innerHTML += `
    <div class="grid-profiles tutor${i + 1}">
      <div class="image-container">
      <img src= ${tutors[i].img} alt="${tutors[i].alt}" class="grid-pro-1">
      </div>
      <div class="profile-info">
        <p class="grid-pro-2">${tutors[i].tutorName}</p>
        <p class="grid-pro-3">${tutors[i].skill}</p>
        <p class="grid-pro-4">${tutors[i].description}</p>
      <div>
    </div>`;
  }

  section.innerHTML += `
  <button type="button" class="more-tutors">
    More
    <i class="fas fa-angle-down"></i>
  </button>
  `;
}

export default loadTutors;