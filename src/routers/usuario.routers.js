import {Router} from 'express'

const router = Router();
import * as UserCtrl from '../controllers/usuario.controller'
const { checkToken } = require('../auth/token_validation');
router.get('/' ,  UserCtrl.readAllUsers);
router.get('/:id'  , UserCtrl.readUser);
router.delete('/:id'  , UserCtrl.delUser);
router.post('/'  , UserCtrl.createUser);
router.put('/:id'  , UserCtrl.updateUser);
export default router;