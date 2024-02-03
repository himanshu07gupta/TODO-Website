
const z = require('zod')

let addtodo = z.object({
    title: z.string(),
    description: z.string(),
    completed : z.boolean()
})

let completetodo = z.object({
    id : z.string()
})

module.exports = {
    addtodo :addtodo,
    completetodo :completetodo
}
