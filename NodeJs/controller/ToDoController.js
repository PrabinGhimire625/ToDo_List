import ToDoList from "../model/ToDoModel.js";

//to saved the notes
export const Create = async (req, res) => {
  try {
    const { note, description } = req.body;
    await ToDoList.create({note,description});
    res.status(200).json({message:"Successfully added the note"})
  } catch (err) {
    res.status(500).json({error: "Internal server error"})
  }
};

//to fetch the notes
export const Read = async (req, res) => {
  try {
    const notes = await ToDoList.findAll();
    res.status(200).json({ message: "All notes are successfully fetched!", data: notes });
  } catch (err) {
    console.error('Error fetching notes:', err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//to fetch single notes
export const getSingleNote=async(req,res)=>{
 try{
  const {id}=req.params
  console.log(id);
  const notes=await ToDoList.findByPk(id)
  console.log(notes)
  if(!notes){
    res.status(404).json({message:"Notes is not found!"})
  }
  res.status(200).json({message : "Single notes is successfully fetched", data:notes})
 }catch(err){
  res.status(500).json({error: "Internal server error"})
 }
}

//to update the notes
export const updateNote=async(req,res)=>{
try{
  const {id}=req.params
  const {note,description}=req.body
  await ToDoList.update({note,description}, {where : {id:id}})
  const newNotes=await ToDoList.findByPk(id)
  res.status(200).json({error:"The notes is successfully updated", data:newNotes})

}catch(err){
  console.log(err)
  res.status(500).json({error: "Internal server error"})
}
}


//delete notes
export const deleteNote=async(req,res)=>{
  try{
    const {id}=req.params
    await ToDoList.destroy({where:{id:id}})
    res.status(200).json({message:"Note is successfully delete"})
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
}