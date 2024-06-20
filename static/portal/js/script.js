function toggleDescription(btn) {
  const descDiv = btn.nextElementSibling;
  btn.classList.toggle('show');
  descDiv.classList.toggle('show');

  if (descDiv.classList.contains('show')) {
    btn.textContent = 'Скрыть описание профилизации';
    descDiv.style.maxHeight = descDiv.scrollHeight + "px";
  } else {
    btn.textContent = 'Показать описание профилизации';
    descDiv.style.maxHeight = null
  }
}

function showMenu(event) {
  event.preventDefault(); 
  const menuItem = event.currentTarget.closest('.menu__item');
  const submenu = menuItem.querySelector('.submenu');

  document.querySelectorAll('.menu__item.active').forEach(item => {
    if (item !== menuItem) {
      item.classList.remove('active');
      item.querySelector('.submenu').style.display = 'none';
    }
  });

  submenu.style.display = 'block';
  menuItem.classList.add('active');
}

document.querySelectorAll('.menu__item').forEach(item => {
  item.addEventListener('mouseover', showMenu);
  item.addEventListener('mouseleave', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'none';
      item.classList.remove('active');
    }
  });
});



function Marquee(selector, speed) {
  const parentElement = document.querySelector(selector);
  const firstElement = parentElement.children[0];
  const parentWidth = parentElement.offsetWidth;
  const elementWidth = firstElement.offsetWidth;

  const numElements = Math.ceil(parentWidth / elementWidth) + 1;

  for (let i = 0; i < numElements; i++) {
    parentElement.appendChild(firstElement.cloneNode(true));
  }

  let position = 0;
  function moveMarquee() {
    const children = parentElement.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = `translateX(-${position * (i + 1)}px)`;
    }
    position += speed;
    if (position > elementWidth) {
      position = 0;
    }
    requestAnimationFrame(moveMarquee);
  }

  moveMarquee();
}

window.addEventListener('load', () => Marquee('.marquee', .1));

const modalElement = document.getElementById("modal");
const iframeElement = document.getElementById("iframe-content");
const closeButton = document.querySelector(".close-button");

const openModalLinks = document.querySelectorAll(".open-modal");
    console.log(openModalLinks)

openModalLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const iframeUrl = link.getAttribute("data-iframe-url");
    console.log(iframeUrl)
    iframeElement.src = iframeUrl;
    modalElement.style.display = "block";
    document.body.style.overflow = "hidden"
  });
});

closeButton.addEventListener("click", () => {
  modalElement.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modalElement) {
    modalElement.style.display = "none";
  }
});

