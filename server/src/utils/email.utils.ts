// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import nodemailer, { Transporter, TransportOptions } from "nodemailer";
import { AppConfig } from "../config/app.config";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface IMailOption {
    subject: string,
    htmlContent: string | any,
    emailTo?: string | string[],
    replyTo?: string | string[],
    bcc?: string[]
}


/**
 * @description a function to create SMTP transporter housing the cofiguration for email sernder using nodemailer
 * @returns Promise transporter <Transporter>
*/
const mailTransporter = async (): Promise<Transporter> => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smpt.gmail.com',
            auth: {
                user: AppConfig.email.user,
                pass: AppConfig.email.pass
            },
            tls: {
                rejectUnauthorized: false,
            }
        })
        return transporter
    } catch (error) {
        throw error 
    }
}

/**
 * Sends an email with the provided content.
 *
 * @param subject The email subject line.
 * @param htmlContent content to sent/ not compulsory in html format.
 * @param emailTo The recipient email address.
 * @param replyTo The email address to set as the "Reply-To" header.
 * @param bcc The email recipients to be blind copied.
 * @returns A promise that resolves when the email is sent.
 * @throws {Error} Any error that occurs during email sending.
 */


const sendEmail = async (mailPayload: IMailOption): Promise<void> => {
    console.log(mailPayload.htmlContent)
    const content = htmlcontent(mailPayload.htmlContent as any)
    
    const mailOptions = {
      from: 'official@luxela.com',
      to: mailPayload.emailTo,
      bcc: mailPayload.bcc,
      subject: mailPayload.subject,
      html: content,
      replyTo: mailPayload.replyTo
    };
  
    await processSendEmail(mailOptions);
  };
  
  /**
 * Sends an email using the configured transporter.
 * @param mailOptions Mail options object conforming to Nodemailer's format.
 * @returns A promise that resolves when the email is sent.
 * @throws Any error that occurs during email sending or verification.
 */
const processSendEmail = async (mailOptions: object): Promise<void> => {
    try {
      const transporterInstance = await mailTransporter();
      await transporterInstance.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };


  /**
   * @description htmlcontent 
   * @param data contains the code and username for email template
   * @returns html design template for the user.
  */
const htmlcontent = (data: {code: string, username: string}) => {
    return `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<body style="font-family: Arial, Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; -ms-text-size-adjust: 100%; width: 100% !important; height: 100% !important; margin: 0; padding: 0; -webkit-linear-gradient(135deg, #ffffff 0%, #ffffff 100%); background-repeat: repeat-x; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ffffff', GradientType=1);">
    <center>
        <table cellpadding="0" cellspacing="0" border="0" align="center" style="width: 100%; max-width: 580px; margin: 0 auto !important;">
            <tr>import default from './../../node_modules/engine.io-client/build/esm-debug/browser-entrypoint';

                <td bgcolor="#ffffff" style="padding:20px;">
                    <table cellpadding="0" cellspacing="0" border="0" align="center">
                        <tr>
                            <td align="center" style="padding:0; margin:0;">
                                <img src="https://example.com/logo.png" alt="Logo" width="150" height="50" style="display:block; outline:none; text-decoration:none; -ms-interlace:interlace; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:20px; margin:0; font-family:'Helvetica Neue', Helvetica, Arial, Geneva, Tahoma, Geneva, Verdana, sans-serif; font-size:14px; line-height:22px; color:#666666;">
                            Dear ${data?.username},
                            <br>
                            We've received your request for OTP verification. Please enter the following code we've sent to your phone:
                            <br>
                            <br>
                            OTP: ${data?.code}
                            <br>
                            This code is valid for 10 minutes. If you didn't request this, please ignore this email. or contact the support for help.
                            <br>
                            <br>
                            Best regards,
                            <br>
                            Luxela.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`
}

export default sendEmail;