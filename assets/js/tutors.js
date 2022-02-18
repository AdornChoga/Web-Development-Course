const tutors = [{
  img: './assets/images/Micheal.png',
  alt: 'Tutor: Michael Pearson',
  tutorName: 'Michael Pearson',
  skill: 'Front-End Accessibility Expert',
  description: `Has extensive experience with crafting font-end
  technologies that support accessibility 
  requirements and standards.`,
}, {
  img: './assets/images/Lindsey.png',
  alt: 'Tutor: Lindsey Holie',
  tutorName: 'Lindsey Holie',
  skill: 'Front-End Engineer',
  description: `Experience in computer science and using this skill in
  front-end development.`,
}, {
  img: './assets/images/Amanda.png',
  alt: 'Tutor: Amanda Simons',
  tutorName: 'Amanda Simons',
  skill: 'Front-End Dev Ops',
  description: `Extensive experience with software development pertaining
  to collaborations, integration, automation, and quality.`,
}, {
  img: './assets/images/Cody.png',
  alt: 'Tutor: Cody James',
  tutorName: 'Cody James',
  skill: 'U.I Developer',
  description: 'Highly skilled in interaction design skills.',
}, {
  img: './assets/images/John.png',
  alt: 'Tutor: John Mahn',
  tutorName: 'John Mahn',
  skill: 'Back-End Developer',
  description: `Experience in computer science and using this skill in
  front-end development.`,
}, {
  img: './assets/images/Hannah.png',
  alt: 'Tutor: Hannah Eugne',
  tutorName: 'Hanna Eugne',
  skill: 'Front-End Engineer',
  description: `Experience in computer science and using this skill in
  front-end development.`,
}];

function loadTutors() {
  const section = document.querySelector('.tutors');
  const title = '<p class="tutors-title">Our Tutors</p>';
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

  section.innerHTML += '<button type="button" class="more-tutors">More <i class="fas fa-angle-down"></i></button>';
}

window.addEventListener('load', loadTutors);