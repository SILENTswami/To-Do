const mongoose = require("mongoose");

// mongodb+srv://SAHILsomil:AtlasDBMS@cluster0.y1ptavz.mongodb.net/
mongoose.connect("mongodb+srv://SAHILsomil:AtlasDBMS@cluster0.y1ptavz.mongodb.net/todos");

const todoSchema = mongoose.Schema({
title: String,
description: String,
completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}