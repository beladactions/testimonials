// Shuffle testimonials
const container = document.querySelector('.testimonial-container');
for (let i = container.children.length; i >= 0; i--) {
  container.appendChild(container.children[Math.random() * i | 0]);
}
