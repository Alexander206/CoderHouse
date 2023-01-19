import minimist from 'minimist'
import sendMail from './mails.js'

const opts = {
  alias: {
    b: 'body',
    s: 'subject',
  }
}

const { body, subject } = minimist(process.argv.slice(2), opts)

if (!subject) {
  console.log('Error: The subject is required!');
  process.exit(1)
}

if (!body) {
  console.log('Error: The body is required!');
  process.exit(1)
}

sendMail(subject, body)