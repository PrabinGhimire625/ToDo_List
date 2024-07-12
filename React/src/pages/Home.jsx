import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import CreateNote from './CreateNote';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    const [toDos, setToDos] = useState([]);
    const navigate = useNavigate();

    const fetchToDos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/toDo');
            console.log('Response:', response);
            if (response.status === 200) {
                setToDos(response.data.data);
            }
        } catch (error) {
            console.error("Error on fetching notes:", error);
        }
    };

    useEffect(() => {
        fetchToDos();
    }, []);

    //for delete
    const deleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/toDo/${id}`);
            fetchToDos(); // Refetch the to-dos after deletion
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    console.log('ToDos:', toDos);

    return (
        <>
            <Navbar />
            <CreateNote/>
            <div className="h-100 w-full flex items-center justify-center font-sans m-0">
            <div className="bg-white w-full rounded shadow-lg p-6 m-4 lg:w-3/4 lg:max-w-lg">
        {toDos.length === 0 ? (
            <h2>No records</h2>
        ) : (
            toDos.map((toDo) => (
                <div key={toDo.id} className="flex flex-col border border-gray-200 rounded-md p-4 mb-4">
                    <h3 className="text-lg font-semibold mb-2">{toDo.note}</h3>
                    <p className="text-sm text-gray-600 mb-2">{toDo.description}</p>
                    <div className="flex justify-between items-center">
                        <Link to={`/editNote/${toDo.id}`}><button className="text-blue-600 hover:text-blue-800">Edit</button></Link>
                        <button onClick={() => deleteNote(toDo.id)} className="text-red-600 hover:text-red-800">Delete</button>
                    </div>
                </div>
            ))
        )}
    </div>
</div>

        </>
    );
};

export default Home;
