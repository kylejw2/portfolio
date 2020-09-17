import React, {useEffect, useRef} from 'react';

const Canvas = () => {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Multiply canvas height and width by 2 to support HD retina screen density on powerful computers
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const c = canvas.getContext('2d');
    // necessary to scale because of HD retina screens
    // c.scale(2,2);
    
    class Circle {
      constructor(x, y, radius, color, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
      }
      draw(objects) {
        c.beginPath();
        c.arc(this.x += this.velocityX, this.y += this.velocityY, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        if (this.y > canvas.height) {this.velocityY = -this.velocityY}
        if (this.y < 0) {this.velocityY = -this.velocityY}
        if (this.x > canvas.width) {this.velocityX = -this.velocityX}
        if (this.x < 0) {this.velocityX = -this.velocityX}

        for (let i = 0; i < objects.length; i++) {
          if ((this.x - objects[i].x < 50 && this.x - objects[i].x > - 50) && (this.y - objects[i].y < 50 && this.y - objects[i].y > -50)) {
            c.beginPath();
            c.strokeStyle = '#5e5e5c'; //6f706c 898a87 5e5e5c
            c.moveTo(this.x, this.y);
            c.lineTo(objects[i].x, objects[i].y);
            c.stroke();
            c.closePath();
          } 
        }
      }
      update() {
        this.draw();
      }
    }
    // let colors = ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#3B1F2B']
    let objects = [];
    const init = () => {
      for (let i = 0; i < 200; i++) {
        const randX = Math.random() * canvas.width;
        const randY = Math.random() * canvas.height;
        // const randRadius = (Math.random() * 2) + 1; '#fffffa'
        // const randCol = colors[i % colors.length];
        const randVelocityX = (Math.random() - 0.5) * 2;
        const randVelocityY = (Math.random() - 0.5) * 2;
        objects.push(new Circle(randX, randY, 0.5, 'black', randVelocityX, randVelocityY))
      }
    }
    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0,0, canvas.width, canvas.height);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      c.fillStyle = '#121212';
      c.fillRect(0,0, canvas.width, canvas.height);
      objects.forEach(circle => circle.draw(objects))
    }

    init();
    animate();

    contextRef.current = c;
  }, [])

  return (
    <div>
      <canvas style={{position: 'absolute'}} ref={canvasRef} />
    </div>
  );
}

export default Canvas;
