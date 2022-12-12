const mongoose= require("mongoose")

const noteSchema=  mongoose.Schema({
    taskname: String,
    status: String,
    tag: String
})

const NoteModel= mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}