import React, { useState } from 'react';
import { createAssignment } from '../../services/api';

const AssignmentForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [materials, setMaterials] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAssignment = { title, description, materials };
    await createAssignment(newAssignment);
    setTitle('');
    setDescription('');
    setMaterials([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Assignment Title" 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Assignment Description" 
      />
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default AssignmentForm;
