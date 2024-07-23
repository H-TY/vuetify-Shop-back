import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import admin from '../middlewares/admin.js'
import { create, getAll, get } from '../controllers/order.js'

const router = Router()

router.post('/', auth.jwt, create) // 建立訂單，要執行的路徑
router.get('/', auth.jwt, get) // 取自己的訂單，要執行的路徑
router.get('/all', auth.jwt, admin, getAll) // 取全部的訂單，要執行的路徑

export default router
