import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EditNotes = () => {
    const { id } = useParams();
    const [note, setNotes] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    // Fetch the previous data for the note based on the ID
    const fetchNote = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/toDo/${id}`);
            if (response.status === 200) {
                const data = response.data.data;
                setNotes(data.note);
                setDescription(data.description);
            }
        } catch (error) {
            console.error("Error fetching note:", error);
        }
    };

    useEffect(() => {
        fetchNote();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3000/toDo/${id}`, { note, description });
            alert("Note is successfully updated!");
            navigate("/"); // Navigate back to the home page after successful update
        } catch (error) {
            console.error("Error updating note:", error);
            alert("Failed to update note. Please try again.");
        }
    };

    return (
        <>
            <Navbar/>
            <form onSubmit={handleSubmit}>
                <div className="h-100 w-full flex items-center justify-center font-sans">
                    <div className="bg-white rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                        <div className="mb-4">
                            <h1 className="text-grey-darkest">Edit Note</h1>
                            <div className="flex flex-col mt-4">
                                <input
                                    onChange={(e) => setNotes(e.target.value)}
                                    value={note}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
                                    placeholder="Add Note"
                                />
                                <textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
                                    placeholder="Add Description"
                                    rows={4} // Adjust rows as needed for display
                                />
                                <div className="flex items-center justify-center mt-4">
                                    <button type="submit" className="flex-no-shrink p-2 border-2 rounded text-white bg-blue-500 border-blue-500 hover:bg-blue-700 mr-4">Edit the note </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EditNotes;
