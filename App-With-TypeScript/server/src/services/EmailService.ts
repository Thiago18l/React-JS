interface IMailTo {
    name: string;
    email: string;
}
interface IMailMessage {
    subject: string;
    body: string;
    attachments?: string[];
}
interface IMessageDTO { // data Transfer Object
    to: IMailTo;
    message: IMailMessage;
}
class EmailService {
    sendMail = ({ to, message }: IMessageDTO ) => {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }; 
}

export default EmailService;