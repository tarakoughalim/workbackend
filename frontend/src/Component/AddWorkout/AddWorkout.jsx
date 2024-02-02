import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './AddWorkout.css';
import toast, { Toaster } from 'react-hot-toast';


function AddWorkout() {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');

  const addNewWorkout = () => {
    // Check if all input fields are filled
    if (!title || !load || !reps) {
      toast.error('Please fill in all the fields');
      return;
    }

    // Make an HTTP request to the backend API with the input values
    fetch('http://localhost:4000/app/addNewWorkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        laod: load, // Corrected typo: 'laod' to 'load'
        reps: reps,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the backend if needed
        console.log('Workout added successfully:', data);

        // Reset input fields after successful submission
        setTitle('');
        setLoad('');
        setReps('');

        // Show success toast notification
        toast.success('Workout added successfully');
      })
      .catch(error => {
        // Handle errors
        console.error('Error adding workout:', error);

        // Show error toast notification
        toast.error('Error adding workout');
      });
  };



  const handleKeyPress = (e) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (e.key === 'Enter') {
      addNewWorkout();
    }
  };


  return (
    <div className='add'>
      <h2>Add a New workout</h2>
      <div className='form'>
        <label> Exercise title: </label>
        <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyPress} />
        <label> Load (in kg):</label>
        <input type="text" value={load} onChange={(e) => setLoad(e.target.value)}  onKeyDown={handleKeyPress} />
        <label>Number of Reps:</label>
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)}  onKeyDown={handleKeyPress}/>
        <button className='button' onClick={addNewWorkout}>Add Workout</button>
      </div>
      <Toaster />
    </div>
  );
}

export default AddWorkout;
