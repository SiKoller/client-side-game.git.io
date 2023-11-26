let timeouts = new Array();

/**
 * Prompts the text to the hmtl console.
 * @param {Element} element 
 * @param {String} text 
 */
export const promptText = (element, text) => {
  clearTimeouts();
    const textChars = [...text];
    textChars.map((c, index) => {
      timeouts.push(setTimeout(() => {
        element.innerHTML += c;
      }, 1000/textChars.length * index));
    });
  };
  
  /**
 * Prompts the choices to the hmtl console.
 * @param {Element} element 
 * @param {Array<Choice>} choices 
 */
export const promptChoices = (element, choices) => {
    choices.map((choice, index) => {
      const choiceBtn = document.createElement("btn");
      choiceBtn.textContent = choice.text;
      choiceBtn.id = `choice${index}`;
      choiceBtn.addEventListener("click", choice.action);
      element.appendChild(choiceBtn);
    })
  };
  
  /**
   * This is just a helper class to create a button
   * @param {function} promptFunction 
   * @param {String} textContent 
   * @returns button
   */
export const createNextPromptButton = ( promptFunction, textContent = "Next") => {
    const nextBtn = document.createElement("btn");
    nextBtn.onclick = promptFunction;
    nextBtn.textContent = textContent;

    return nextBtn;
  };

  const clearTimeouts = () => {
    timeouts.forEach(timeout => clearTimeout(timeout));
  }
