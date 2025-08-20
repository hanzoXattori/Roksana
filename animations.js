// Дрифт-анимация дыма на canvas
const canvas = document.getElementById('driftSmoke');
if (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = 280;
  const ctx = canvas.getContext('2d');
  function drawSmoke() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i<13; i++) {
      let x = 180 + Math.sin(Date.now()/900 + i)*40 + i*70;
      let y = 200 + Math.cos(Date.now()/700 + i)*25;
      ctx.beginPath();
      ctx.arc(x, y, 36 + Math.sin(Date.now()/800 + i*3)*8, 0, 2*Math.PI);
      ctx.fillStyle = `rgba(180,255,255,${0.04 + Math.abs(Math.sin(Date.now()/700 + i))/7})`;
      ctx.fill();
    }
    requestAnimationFrame(drawSmoke);
  }
  drawSmoke();
  window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
  });
}

// Можно добавить дополнительные анимации!