function changeImage() {
  if (count === gallery.length) {
    count = 0;
  }

  image.src = gallery[count];
  image.alt = alt[count];

  count++;
}

let image = document.getElementById("gallery");
let gallery = [
  "images/test-pass.jpg",
  "images/driving.jpg",
  "images/car.jpg",
  "images/car-interior.jpg",
  "images/observe-driving.jpg",
  "images/classroom.jpg",
  "images/sim-driving.jpg",
];
let alt = [
  "A man sticking his arm out of a car window after passing his driving test",
  "A man driving his car",
  "A picture of a car",
  "The interior of a car",
  "An observer from the backseat watching someone drive",
  "A classroom filled with students watching a lecture",
  "A man driving on a car simulator",
];
let count = 0;

let id = setInterval(changeImage, 3000);

image.addEventListener("mouseenter", function () {
  clearInterval(id);
});

image.addEventListener("mouseleave", function () {
  id = setInterval(changeImage, 3000);
});
