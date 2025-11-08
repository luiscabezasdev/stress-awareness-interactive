/**
 * Smoothly scrolls to an element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} delay - Delay before scrolling (in ms)
 */
export const scrollToElement = (elementId, delay = 100) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }, delay);
  }
};

/**
 * Generates element ID for stress items
 * @param {string} category - 'danger' or 'manifestation'
 * @param {number} id - Item ID
 * @returns {string} Element ID
 */
export const generateItemId = (category, id) => {
  return `item-${category}-${id}`;
};