/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

// Wait for DOM to be loaded
window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-suggestion');
  const suggestionInput = document.getElementById('suggestion-input');
  const suggestionsUl = document.getElementById('suggestions-ul');

  // Add click event listener to submit button
  submitButton.addEventListener('click', () => {
    const suggestion = suggestionInput.value.trim();
    
    if (suggestion) {
      // Create and append new list item
      const li = document.createElement('li');
      li.textContent = suggestion;
      suggestionsUl.appendChild(li);
      
      // Clear input
      suggestionInput.value = '';
      
      // Focus back on input
      suggestionInput.focus();
    }
  });

  // Allow Enter key to submit (Shift+Enter for new line)
  suggestionInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitButton.click();
    }
  });
});
