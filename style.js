// JavaScript untuk menampilkan/menyembunyikan menu list saat ikon menu diklik
document.addEventListener("DOMContentLoaded",
  function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    menuIcon.addEventListener("click", function () {
      menuList.classList.toggle("hidden");
    });
  });

// Background bintang
var Stars = function () {
  var _scope = this;

  this.stars = [];
  this.vel = 1;
  this.radius = 1;
  this.alpha = 0.5;
  this.starsCounter = 300;
  var canvas, context;

  var center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  this.init = function () {
    // Create the canvas for the stars animation
    canvas = document.getElementById("stars");
    context = canvas.getContext("2d");
    context.lineCap = "round";
    this.resize();

    // Set canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", this.resize.bind(this));

    this.start();
    this.animate();
  };

  this.start = function () {
    this.stars = [];
    for (var i = 0; i < this.starsCounter; i++) {
      setTimeout(function () {
        _scope.stars.push(new Star());
      }, i * 30);
    }
  };

  this.resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center.x = canvas.width / 2;
    center.y = canvas.height / 2;
  };

  this.animate = function () {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  };

  this.render = function () {
    context.fillStyle = 'rgba(1, 4, 35, 0.8)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "white";
    for (var i = 0; i < this.stars.length; i++) this.stars[i].update();
  };

  var Star = function () {
    this.x = center.x;
    this.y = center.y;

    this.init = function () {
      this.radius = Math.random() * _scope.radius;
      this.x = center.x;
      this.y = center.y;
      this.lineWidth = 0;
      this.vel = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      };
    };

    this.update = function () {
      this.vel.x *= 1.05;
      this.vel.y *= 1.05;
      this.lineWidth += 0.035;
      this.x0 = this.x;
      this.y0 = this.y;
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.draw();
      if (this.isDead()) this.init();
    };

    this.draw = function () {
      context.beginPath();
      context.moveTo(this.x0, this.y0);
      context.lineTo(this.x, this.y);
      context.lineWidth = this.lineWidth;
      context.stroke();
    };

    this.isDead = function () {
      return (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height);
    };

    this.init();
    return this;
  };

  this.init();
};

var _stars = new Stars();
// background bintang end

// MODAL..!!!!
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContainer = document.querySelector(".modal-container");

  if (modal) {
    modal.style.display = "block";
    modalContainer.style.display = "block"; // Show the modal background
  } else {
    console.error(`Modal with ID ${modalId} not found.`);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContainer = document.querySelector(".modal-container");

  if (modal) {
    modal.style.display = "none";
    modalContainer.style.display = "none"; // Hide the modal background
  } else {
    console.error(`Modal with ID ${modalId} not found.`);
  }
}

// Event listeners opening modals
document.getElementById("openModalBtn1").addEventListener("click", () => {
  openModal("myModal1");
});

document.getElementById("openModalBtn2").addEventListener("click", () => {
  openModal("myModal2");
});
document.getElementById("openModalBtn3").addEventListener("click", () => {
  openModal("myModal3");
});

// Event listeners for closing modals
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    const modalId = e.target.getAttribute("data-modal");
    closeModal(modalId);
  }
});

// Close modal clicking outside
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    const modalId = e.target.id;
    closeModal(modalId);
  }
});

// close  scrolling
window.addEventListener("scroll", () => {
  closeModal("myModal1");
  closeModal("myModal2");
  closeModal("myModal3");
});

// close buttons
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("close")) {
    const modalId = e.target.getAttribute("data-modal");
    closeModal(modalId);
  }
});

// net content

let imagebtn = document.getElementById("image");
let bike = document.getElementById("bike");

imagebtn.onclick = function () {
  bike.style.backgroundimage = "url(img/img-tema.jpg)";
}