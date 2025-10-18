document.addEventListener('DOMContentLoaded', () => {

  const keyInput = document.getElementById('keyInput');
  const keyLog = document.getElementById('keyLog');

  if (keyInput && keyLog) {
    keyInput.addEventListener('keydown', (event) => {
      
      const keyName = event.key;

      const messageElement = document.createElement('p');

      messageElement.textContent = `You pressed ${keyName}`;

      if (keyName === 'Enter') {
        messageElement.style.color = 'blue';
      } else {
        messageElement.style.color = 'black';
      }

      keyLog.appendChild(messageElement);
    });
  } else {
    console.error('Error: Could not find keyInput or keyLog elements.');
  }
});