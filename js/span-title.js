// Get the span elements with class "app-language-scroll-wrapper"
const languageSpans = document.querySelectorAll('.app-language-scroll-wrapper span');

// Iterate over each span element
languageSpans.forEach(span => {
  // Get the title attribute of the current span element
  const spanTitle = span.getAttribute('title');

  // Create a new span element
  const newSpan = document.createElement('span');

  // Add the "label" class to the new span element
  newSpan.classList.add('label');

  // Create a new p element
  const newParagraph = document.createElement('p');

  // Set the text content of the p element to the span title
  newParagraph.textContent = spanTitle;

  // Append the p element to the new span element
  newSpan.appendChild(newParagraph);

  // Append the new span element to the current span element
  span.appendChild(newSpan);
});
