import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Your Gmail credentials
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });
  // Send email function
  const sendEmail = async (mailContent: any ) => {
    const htmlContent = buildHtmlMail(mailContent);
    console.log(mailContent)
    const mailOptions = {
      from: gmailUser,
      to: 'contato@cezarvasconcelos.com.br',
      subject: 'Contato do site - ' + mailContent.subject,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: any) {
      return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  };
  console.log(JSON.parse(req.body).name)
  // Extract recipient email from request body
  const { name, email, phone, subject, message }  = JSON.parse(req.body);
  const mail = {
    name, email, phone, subject, message 
  }
  if (!email) {
    return res.status(400).json({ message: 'Recipient email is required' });
  }

  // // Call the sendEmail function
  await sendEmail(mail);

}


const buildHtmlMail = (mailContent: any) => {
    return `
<!DOCTYPE html>
<html>
<head>

<style>body {
font-family: Arial, sans-serif; margin: 0; padding: 0;
}
a:hover {
text-decoration: underline;
}
</style>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
    <table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; height: 100%; padding: 20px;" bgcolor="#F2F2F2">
        <tr>
            <td align="center" valign="middle">
                <div style="background-color: #ffffff; border-radius: 5px; max-width: 600px; margin: 0 auto; padding: 20px;" align="left">
                    <h1 style="color: #700B2D;">Um novo contato est&aacute; interessado</h1>
                    <p style="font-size: 14px;">Nome: ${mailContent.name}</p>
                    <p style="font-size: 14px;">Email: ${mailContent.email}</p>
                    <p style="font-size: 14px;">Telefone: ${mailContent.phone}</p>
                    <p style="font-size: 14px; ">Assunto: <b>${mailContent.subject}</b></p>
                    <div style="background-color: #FAFAFA; border-radius: 5px; margin: 10px; padding: 20px; border: 1px solid #ccc;">
                        <p style="font-size: 14px;">${mailContent.message}</p>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>

  `;
  }
