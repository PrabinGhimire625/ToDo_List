import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from "axios"

const CreateNote = () => {
    const [note, setNotes] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/toDo", { note, description });
            console.log(response);
            alert("Note is added successfully");
            // Clear form fields after successful submission if needed
            setNotes("");
            setDescription("");
        } catch (error) {
            console.error('Error adding note:', error);
            alert("Failed to add note. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="h-100 w-full flex items-center justify-center font-sans ">
                    <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                        <div className="mb-4">
                             <h1 className="text-red-600 text-xl font-bold">Todo List</h1>
                            <div className="flex flex-col mt-4">
                                <input onChange={(e) => setNotes(e.target.value)} value={note} className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker" placeholder="Add Note" required />
                                <textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
                                    placeholder="Add Description"
                                    rows={4} // Adjust rows as needed for display
                                    required
                                />
                                <div className="flex items-center justify-center mt-4"> <button type="submit" className="flex-no-shrink p-2 border-2 rounded text-white bg-blue-500 border-blue-500 hover:bg-blue-700 mr-4">Add </button>
                                    <button type="button" onClick={() => {setNotes("");setDescription("");}} className="flex-no-shrink p-2 border-2 rounded text-white bg-blue-500 border-blue-500 hover:bg-blue-700"> Reset</button>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateNote;
