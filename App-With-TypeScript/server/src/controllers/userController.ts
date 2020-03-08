


const users = [ {
    name: 'Thiago Lopes', email: 'thiago.lopes.dev@gmail.com'
}];

export default {
    async index(req, res){
        return res.json(users);
    }
}