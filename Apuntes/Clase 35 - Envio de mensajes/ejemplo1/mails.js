import nodemailer from 'nodemailer'; // Dependencia para usar correo electronico

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'odie.fadel@ethereal.email',
    pass: 'J9rG7wqwHP45hFnUvN',
  },
});

export default async function sendMail(subject, body) {
  const opts = {
    from: 'amarok.no.seishin.260@gmail.com',
    to: 'amarok.no.seishin.260@gmail.com',
    subject,
    html: body,
  };

  try {
    const result = await transporter.sendMail(opts);
    console.log('result', result);
  } catch (error) {
    console.error(error.message);
  }
}
