function sendTelegram() {
  // Get form values
  var name = document.getElementById('name').value;
  var whose = document.querySelector('input[name="whose"]:checked').value;
  var kelishadimi = document.querySelector('input[name="Kelishadimi"]:checked').value;
  var wish = document.getElementById('wish').value;

  // Replace 'YOUR_BOT_TOKEN' with your actual bot token
  var botToken = '6432229655:AAFqVUMu62qN0AFzpQih146WeA05xwuVveY';

  // Replace 'YOUR_CHAT_ID' with your actual chat ID
  var chatId = ['905770018', '58195698'];
  // var chatId = '905770018';

  // Construct the message
  var message = `Ism: ${name}

Kim tomondan mehmonsiz: ${whose}

Tadbirda ishtirok eta olasizmi: ${kelishadimi}

Tilaklar: ${wish}`;

  // Telegram Bot API endpoint for sending messages
  var apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Construct the data to be sent
  var data = {
    chat_id: chatId,
    text: message,
  };

  // Make a POST request to the Telegram Bot API
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Message sent:', data);
      // You can handle the response here if needed
      alert("Sizning ma'lumotlaringiz yozib olindi!");

      // Clear the form
      document.getElementById('name').value = '';
      document.querySelector('input[name="whose"]:checked').checked = false;
      document.querySelector('input[name="Kelishadimi"]:checked').checked = false;
      document.getElementById('wish').value = '';
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });

  // Prevent the form from submitting traditionally
  return false;
}