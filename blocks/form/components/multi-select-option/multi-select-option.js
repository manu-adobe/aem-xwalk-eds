import { createDropdownUsingEnum } from '../../util.js';

/**
 * Decorates a multi-select option field
 * @param {HTMLElement} element The field element
 * @returns {HTMLElement} The decorated field
 */
export default function decorate(element) {
  const select = element.querySelector('select');
  if (select) {
    // Set multiple attribute to enable multi-select functionality
    select.setAttribute('multiple', 'true');

    // Add a class to identify this as a multi-select component
    element.classList.add('multi-select-option');

    // Add event listener to handle selection changes
    select.addEventListener('change', () => { const selectedOptions = Array.from(select.selectedOptions).map(option => option.value);
      // Store selected values as a data attribute for easy access
      select.dataset.selectedValues = JSON.stringify(selectedOptions);});
  }
  return element;
}

/**
 * Creates a multi-select option field
 * @param {Object} fd The field definition
 * @returns {HTMLElement} The multi-select field
 */
export function createMultiSelectOption(fd) {
  const select = document.createElement('select');

  // Set multiple attribute to enable multi-select functionality
  select.setAttribute('multiple', 'true');

  // Use the existing dropdown creation function
  createDropdownUsingEnum(fd, select);

  return select;
}
