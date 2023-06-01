document.addEventListener('DOMContentLoaded', function() {
  let image = document.getElementById('image');
  let magnifier = document.getElementById('magnifier');

  image.addEventListener('mouseenter', function() {
    magnifier.style.display = 'block';
  });

  image.addEventListener('mousemove', function(event) {
    let magnifierWidth = magnifier.offsetWidth;
    let magnifierHeight = magnifier.offsetHeight;

    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;

    let mouseX = event.offsetX;
    let mouseY = event.offsetY;

    let zoomRatioX = imageWidth / magnifierWidth;
    let zoomRatioY = imageHeight / magnifierHeight;

    let backgroundPositionX = -mouseX * zoomRatioX + magnifierWidth / 2;
    let backgroundPositionY = -mouseY * zoomRatioY + magnifierHeight / 2;

    magnifier.style.backgroundImage = `url('${image.src}')`;
    magnifier.style.backgroundSize = `${imageWidth}px ${imageHeight}px`;
    magnifier.style.backgroundPosition = `${backgroundPositionX}px ${backgroundPositionY}px`;

    magnifier.style.left = event.pageX - magnifierWidth / 2 + 'px';
    magnifier.style.top = event.pageY - magnifierHeight / 2 + 'px';
  });

  image.addEventListener('mouseleave', function() {
    magnifier.style.display = 'none';
  });
});
