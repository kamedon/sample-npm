import fastify from 'fastify'
import {hello} from "@[Owner]/my-commons";

const server = fastify({
    logger: true
})

server.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    const hello2 = hello()
    return {hello2}
})

server.listen(3000, (err, address) => {
    if (err) throw err
    server.log.info(`server listening on ${address}`)
})
