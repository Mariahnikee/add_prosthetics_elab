document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.btn-add');
  const select = document.getElementById('observationSelect');
  const imagesContainer = document.getElementById('observationImagesContainer');
  
  addButton.addEventListener('click', function() {
    const selectedValue = select.value;
    if (!selectedValue) return;
    
    const imageElement = document.getElementById(selectedValue + 'Image');
    if (imageElement) {
      
      const clone = imageElement.cloneNode(true);
      clone.style.display = 'block';
      
      const closeIcon = clone.querySelector('.close-icon');
      closeIcon.addEventListener('click', function() {
        imagesContainer.removeChild(clone);
      });
      
      imagesContainer.appendChild(clone);
    }
  });
  
  document.querySelectorAll('.close-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const imageElement = this.closest('.observation-image');
      if (imageElement.parentNode) {
        imageElement.parentNode.removeChild(imageElement);
      }
    });
  });
});