document.addEventListener("DOMContentLoaded", function() {
  const selectBox = document.getElementById("observationSelect");
  const dropdown = document.getElementById("observationDropdown");
  const options = document.querySelectorAll(".select-option");
  const addButton = document.querySelector(".btn-add");
  
  const selectedOptions = new Set();
  
  selectBox.addEventListener("click", function() {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
  
  options.forEach(option => {
      option.addEventListener("click", function() {
          const value = this.getAttribute("data-value");
          selectBox.textContent = this.textContent;
          dropdown.style.display = "none";
          
          selectBox.setAttribute("data-selected", value);
      });
  });
  
  document.addEventListener("click", function(event) {
      if (!selectBox.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.style.display = "none";
      }
  });
  
  addButton.addEventListener("click", function() {
      const selectedValue = selectBox.getAttribute("data-selected");
      if (selectedValue) {
          const targetImage = document.getElementById(selectedValue + "Image");
          if (targetImage) {
              selectedOptions.add(selectedValue);
              document.querySelectorAll(".observation-image").forEach(img => {
                  const imageId = img.id;
                  const optionValue = imageId.replace("Image", "");
                  
                  if (selectedOptions.has(optionValue)) {
                      img.style.display = "block";
                  } else {
                      img.style.display = "none";
                  }
              });
          }
      }
  });
});