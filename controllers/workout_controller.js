const ecrire = require('../models/ecrire.js')
function get_ecrire(req, res) {
    ecrire.find()
        .then(ecrire => res.json(ecrire))
        .catch(err => res.status(400).json('error:' + err))

}
function save_exo(req, res) {
    const newecrire = new ecrire(req.body);
    newecrire.save()
        .then(() => res.json('workout added!'))
        .catch(err => res.statuds(400).json('error:' + err))

}


function  deleteExo(req ,res){
    const  id = req.params.id; // Assuming you're passing the ID as a parameter in the request URL
    ecrire.findByIdAndDelete(id)
        .then(() => res.json('workout deleted!'))
        .catch(err => res.status(400).json('error:' + err));
}

module.exports = {
    get_ecrire,
    save_exo,
    deleteExo
}

