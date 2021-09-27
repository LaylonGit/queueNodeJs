import Mail from "../lib/Mail"
export default {
  key: 'RegistrationMail',
  async handle({data}) {
    const { user: { name, email} } = data
    await Mail.sendMail({
      from: 'Queue <teste@teste.com>',
      to: `${name} <${email}>`,
      subject: 'Cadastro de usuario',
      html: `Ola ${name}, teste de queue`
    })
  }
}