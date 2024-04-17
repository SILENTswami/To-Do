const zod = require("zod")

// body{
//     title : String;
//     description : String;
// }

// id : string;

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}