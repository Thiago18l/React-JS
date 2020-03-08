import { Request, Response } from 'express';
import EmailService from '../services/EmailService'

const users = [ {
    name: 'Thiago Lopes', email: 'thiago.lopes.dev@gmail.com'
}, ];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },
    async create(req: Request, res: Response){
        const emailService = new EmailService();
        emailService.sendMail({   
            to: { 
            name: 'Thiago Lopes', 
            email: 'thiago.lopes.dev@gmail.com'
        },
            message: { 
                subject: 'Bem-vindo ao Sistema',
                body: 'Bem vindo'
            }
        }    );
            return res.send(); 
    }
    
}