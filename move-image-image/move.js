document.addEventListener("keydown", (event)=> {
    const image = document.querySelector(".image");
    const currentLeft = parseInt(image.style.left) || 0;
    const currentTop = parseInt(image.style.top) || 0;
    const stepSize = 12; 

    switch (event.key) {
      case "ArrowUp":
        image.style.top = (currentTop - stepSize) + "px";
        break;
      case "ArrowDown":
        image.style.top = (currentTop + stepSize) + "px";
        break;
      case "ArrowLeft":
        image.style.left = (currentLeft - stepSize) + "px";
        break;
      case "ArrowRight":
        image.style.left = (currentLeft + stepSize) + "px";
        break;
    }
  });
  