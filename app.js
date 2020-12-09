const express = require('express')
const nodemailer = require('nodemailer')
const config = require('config')
const bodyParser = require('body-parser')
const { port } = config.get('service')
const { user, password: pass, recipient } = config.get('email')

const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } })
const app = express()

/* Set up dependencies */
app.use(bodyParser.json())

/** Serve mail */
app.post('/mail', (req, res) => {
  const { address, subject } = req.body

  transporter.sendMail({
    from: address,
    to: recipient,
    subject: `Inquiry, ${address}`,
    text: subject,
  }, (error) => {
    if (error) return res.json({ error, message: 'error' }).send()
    return res.json({ message: 'success' }).send()
  })
})

/* Start application */
app.listen(port, () => console.log(`Listening on port ${port}`))
