document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.magnifiable-image');
    const magnifier = document.getElementById('magnifier');
  
    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        magnifier.style.display = 'block';
      });
  
      image.addEventListener('mousemove', function(event) {
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;
  
        magnifier.style.backgroundImage = `url('${image.src}')`;
        magnifier.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
        magnifier.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;
        magnifier.style.left = `${event.pageX}px`;
        magnifier.style.top = `${event.pageY}px`;
      });
  
      image.addEventListener('mouseout', function() {
        magnifier.style.display = 'none';
      });
    });
  });
  