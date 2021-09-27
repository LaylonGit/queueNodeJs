import nodemailer from 'nodemailer'
import mailConf from '../../config/mail'

export default nodemailer.createTransport(mailConf)