const canvas = document.querySelector('.gameArea');

const ctx = canvas.getContext('2d');

//circle component
const circle = (x, y, r) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = 3;
  ctx.stroke();
};
//dot component
const dot = (x, y, c) => {
    ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  if (c===1) {
    ctx.fillStyle = 'orange';
  } else {
      ctx.fillStyle = 'black';
  }
  ctx.fill();
};
//head
circle(250, 150, 70);
dot(250, 165, 1);
dot(230, 140, 2);
dot(270, 140, 2);
//body
circle(250, 320, 100);
dot(250, 270, 2);
dot(250, 320, 2);
dot(250, 370, 2);
