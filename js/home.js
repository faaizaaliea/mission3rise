const courses = [
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/3.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/4.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/5.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/6.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/7.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/8.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/9.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/10.jpg",
    price: "Rp 300K",
  },
  {
    title: "Big 4 Auditor Financial Analyst",
    image: "assets/11.jpg",
    price: "Rp 300K",
  },
];

const grid = document.getElementById("courseGrid");

courses.forEach((course, index) => {
  grid.innerHTML += `
    <article class="course-card">
      <img class="course-image" src="${course.image}" alt="${course.title}" />
      <div class="course-body">
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan materi mendalam.</p>
        <div class="instructor">
          <span class="instructor-avatar avatar-${(index % 3) + 1}"></span>
          <div class="instructor-info">
            <strong>Jenna Ortega</strong>
            <small>Senior Accountant di Gojek</small>
          </div>
        </div>
        <div class="rating-price">
          <span class="rating"><b>★★★</b><em>★★</em> <a href="#">3.5 (86)</a></span>
          <div class="price">${course.price}</div>
        </div>
      </div>
    </article>
  `;
});
document.querySelectorAll(".footer-links h4").forEach((title) => {
  title.addEventListener("click", () => {
    const menu = title.nextElementSibling;

    menu.classList.toggle("show");
    title.classList.toggle("open");
  });
});
