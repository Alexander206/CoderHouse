const accountSid = 'AC8785e9adf135809af453927bd73f0578';
const authToken = '455aa00fc09ed6e6c1efc7d7ebf55c61';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Este mensaje se envio desde Node Js',
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+573224198413',
  })
  .then((message) => console.log(message.sid))
  .done();
