const input = document.getElementById('chat-input');
const button = document.getElementById('send-button');
const log = document.getElementById('chat-log');

button.addEventListener('click', () => {
  const message = input.value;
  log.innerHTML += `<br>You: ${message}`;
  input.value = '';

  // Sende die Nachricht an Assistant und füge die Antwort zum Chat-Log hinzu
  fetch('https://api.openai.com/v1/models/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
      prompt: message,
      temperature: 0.5,
      max_tokens: 2048
    })
  }).then(response => response.json())
    .then(data => {
      const response = data.choices[0].text;
      log.innerHTML += `<br>Assistant: ${response}`;
    });
});

