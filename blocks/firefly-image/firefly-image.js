import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Decorate function for the firefly-image block.
 * Transforms the block HTML structure into an optimized image component
 * that can be triggered by the firefly-asset-picker field type.
 *
 * @param {HTMLElement} block - The block element to decorate
 */
export default function decorate(block) {
  // Get the image element from the block
  const img = block.querySelector('img');

  if (!img) {
    // If no image found, display a placeholder message
    block.innerHTML = '<p class="firefly-image-placeholder">No image selected</p>';
    return;
  }

  // Create a figure element for semantic HTML
  const figure = document.createElement('figure');
  figure.className = 'firefly-image-container';

  // Get alt text from img element or from adjacent text
  const alt = img.getAttribute('alt') || '';

  // Create optimized picture for responsive images
  const optimizedPic = createOptimizedPicture(
    img.src,
    alt,
    false,
    [
      { media: '(min-width: 600px)', width: '2000' },
      { width: '750' },
    ],
  );

  // Move instrumentation data to preserve analytics
  moveInstrumentation(img, optimizedPic.querySelector('img'));

  // Build the container structure
  figure.append(optimizedPic);

  // Add caption if available (from next element or from data attribute)
  const captionText = block.getAttribute('data-caption') || img.getAttribute('data-caption');
  if (captionText) {
    const figcaption = document.createElement('figcaption');
    figcaption.className = 'firefly-image-caption';
    figcaption.textContent = captionText;
    figure.append(figcaption);
  }

  // Clear the block and append the new structure
  block.textContent = '';
  block.append(figure);

  // Add a data attribute to identify this block uses firefly-asset-picker
  block.setAttribute('data-block-type', 'firefly-image');
  block.setAttribute('data-uses-firefly', 'true');
}
