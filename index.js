document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("observationSelect");
    const addButton = document.querySelector(".btn-add");
    
    const selectedOptions = new Set();
    
    addButton.addEventListener("click", function() {
      const selectedValue = selectElement.value;
      if (selectedValue) {
        const targetImage = document.getElementById(selectedValue + "Image");
        if (targetImage) {
          selectedOptions.add(selectedValue);
          
          // Show all selected images
          document.querySelectorAll(".observation-image").forEach(img => {
            const imageId = img.id;
            const optionValue = imageId.replace("Image", "");
            
            if (selectedOptions.has(optionValue)) {
              img.style.display = "block";
            } else {
              img.style.display = "none";
            }
          });
          
          // Reset dropdown
          selectElement.selectedIndex = 0;
        }
      }
    });
    
    document.querySelectorAll('.close-icon').forEach(closeIcon => {
      closeIcon.addEventListener('click', function() {
        const imageContainer = this.closest('.observation-image');
        const optionValue = imageContainer.id.replace('Image', '');
        
        selectedOptions.delete(optionValue);
        
        imageContainer.style.display = 'none';
      });
    });
  });