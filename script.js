// Navbar scroll active link logic
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`header nav a[href*=${id}]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-x');
  navBar.classList.toggle('active');
};

// EmailJS Send Message
emailjs.init("th93Zmc5Qk-Ygb8Nr"); // Replace with your actual EmailJS public key

const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = contactForm.querySelector('input[placeholder="Full Name"]').value;
  const email = contactForm.querySelector('input[placeholder="Email"]').value;
  const phone = contactForm.querySelector('input[placeholder="Phone Number"]').value;
  const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
  const message = contactForm.querySelector("textarea").value;
  const time = new Date().toLocaleString();

  if (!fullName || !email || !message) {
    alert("Please fill in at least your name, email, and message.");
    return;
  }

  emailjs.send("service_idx2igm", "template_nb47tgy", {
    name: fullName,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    time: time
  })
  .then(() => {
    alert("Message sent successfully!");
    contactForm.reset();
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    alert("Failed to send message. Please try again.");
  });
});



