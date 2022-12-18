const player = document.getElementById("player");
    let playerX = 0;
    let playerY = 0;
    document.addEventListener("keydown", event => {
      if (event.key === "ArrowDown") {
        playerY += 10;
      } else if (event.key === "ArrowUp") {
        playerY -= 10;
      } else if (event.key === "ArrowLeft") {
        playerX -= 10;
      } else if (event.key === "ArrowRight") {
        playerX += 10;
      }
      player.style.top = playerY + "px";
      player.style.left = playerX + "px";
    });