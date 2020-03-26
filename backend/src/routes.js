const express = require('express')

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router();

/**
 * Métodos HTTP
 * 
 * GET: Buscar ou Listar informações
 * POST: Cadastro de informações
 * PUT: Alteração de Informações
 * DELETE: Deletar Informações
 * 
 * Parametros:
 * 
 * Query: Parametros nomeados enviados na rota após "?" (filtro e paginação)
 * Route: Parametros para identificar recuros ( ".../recurso/id" = .../users/1)
 * Body: Corpo da requisição
 */

 routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile/', ProfileController.index)

module.exports = routes;
