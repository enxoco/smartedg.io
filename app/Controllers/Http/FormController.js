'use strict'
const Mail = use('Mail')
const Env = use('Env')
const toMail = Env.get('MAIL_TO_EMAIL')
const fromMail = Env.get('MAIL_FROM_EMAIL')
class FormController {

  async postForm ({ request, response, view }) {

    const formInfo = request.all()
    console.log(formInfo)

    await Mail.send('emails.formInfo', {
      formInfo
    }, (message) => {
      message
      .to(toMail)
      .from(fromMail)
      .subject('Submitted demo request form')
    })


    return response.redirect('back')
  }
}

module.exports = FormController
