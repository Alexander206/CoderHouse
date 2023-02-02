import nodemailer from 'nodemailer'; // Dependencia para usar correo electronico

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'amarok.no.seishin.260@gmail.com',
    pass: 'uuntxtlwsjjkzcvm',
  },
});

export default async function sendMail(subject, body) {
  const opts = {
    from: 'Server Node',
    to: 'alexamarok260@gmail.com',
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
