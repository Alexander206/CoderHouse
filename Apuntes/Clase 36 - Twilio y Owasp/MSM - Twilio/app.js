// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = 'AC8785e9adf135809af453927bd73f0578';
const authToken = '455aa00fc09ed6e6c1efc7d7ebf55c61';
// const verifySid = process.env.YOUR_VERIFY_SID;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({ body: 'Hola este es un mensaje desde Twilio', from: '+573224198413', to: '+573137746720' })
  .then((message) => console.log(message.sid));

/* client.verify.v2
  .services(verifySid)
  .verifications.create({ to: '+573224198413', channel: 'sms' })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question('Please enter the OTP:', (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: '+573224198413', code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  }); */
