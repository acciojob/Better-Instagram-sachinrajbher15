//your code here
// Script.js

let draggedImage = null;

document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    draggedImage = e.target; // Store the dragged image
    setTimeout(() => e.target.classList.add('hidden'), 0); // Optional: make image invisible while dragging
  }
});

document.addEventListener('dragend', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.classList.remove('hidden'); // Restore image visibility
  }
});

document.querySelectorAll('.flex div').forEach(div => {
  div.addEventListener('dragover', function (e) {
    e.preventDefault(); // Necessary to allow the drop
  });

  div.addEventListener('drop', function (e) {
    e.preventDefault();
    const targetDiv = this;

    // Ensure there's an image to swap with
    const targetImage = targetDiv.querySelector('img');
    
    if (draggedImage && targetImage) {
      // Swap the images by swapping their `src` attributes
      const tempSrc = draggedImage.src;
      draggedImage.src = targetImage.src;
      targetImage.src = tempSrc;
    }
  });
});