const fastify = require('fastify')()
const fileUpload = require('fastify-file-upload')
fastify.register(fileUpload)

fastify.post('/upload', async (req, reply)=> {
  const data = await req.file()
  console.log('data', data)
  reply.send({ok: 1})
})


fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})