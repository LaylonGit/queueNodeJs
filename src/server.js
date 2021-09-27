import 'dotenv/config'
import express from 'express'
import UserController from './app/controllers/UserController'
import BullBoard from 'bull-board'
import Queue from './app/lib/Queue'

const app = express()

console.log(BullBoard)

BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

app.use(express.json())

app.post('/user', UserController.store)

app.use('/admin/queues', BullBoard.UI)



app.listen(3333 , () => {
    console.log('server running on localhost:3333')
})