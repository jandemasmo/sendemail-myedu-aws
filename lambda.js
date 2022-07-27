const nodemailer = require("nodemailer");

exports.handler  = async (event, context) => {
        try {
            if(event.name !== undefined, event.email !== undefined, event.message !== undefined){
                const userMail = process.env.USER_MAIL;
                const passwordMail = process.env.PASSWORD_MAIL;
                
                const transporter = nodemailer.createTransport({
                    host:process.env.HOST_MAIL,
                    port: process.env.PORT_MAIL,
                    auth:{ user: userMail, pass: passwordMail},
                })
            
                await transporter.sendMail({
                    from: userMail,
                    to: userMail,
                    replyTo: event.email,
                    subject: `Você recebeu um contato de ${event.name}.`,
                    text: event.message
                })

                return{
                    statusCode: 200,
                    body: JSON.stringify({ success:  "Seu e-mail foi enviado com sucesso!"  }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Headers': 'Content-Type',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                        'Access-Control-Allow-Credentials': true,
                    }
                }
            }
                
        } catch (error) {
            return{
                statusCode: 400,
                body: JSON.stringify({ message: "Não foi possível enviar e-mail.", error})
            }
        }
        
}

// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
