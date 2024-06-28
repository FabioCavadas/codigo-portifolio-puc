var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Lista Todos os Usuários');
});

/* GET user id. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  res.send(`Lista Usuário pelo id = ${id}`);
});

/* GET user nome. */
router.get('/:nome', function(req, res, next) {
  const nome = req.params.nome
  res.send(`Lista Usuário pelo nome = ${nome}`);
});

/* POST user id .*/
router.post('/', (req, res) => {  
  res.send('Cria um usuário.');
});

/* PUT user id .*/
router.put('/', (req, res) => {  
  res.send('Atualiza um usuário.');
});

/* DELETE user id .*/
router.delete('/', (req, res) => {  
  res.send('Deleta um usuário.');
});

module.exports = router;
