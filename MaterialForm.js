import React, { useState } from 'react';
import { createMaterial } from '../../services/api';

const MaterialForm = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);
    formData.append('category', category);

    await createMaterial(formData);
    setTitle('');
    setFile(null);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Material Title" 
      />
      <input 
        type="file" 
        onChange={handleFileChange} 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
      />
      <button type="submit">Create Material</button>
    </form>
  );
};

export default MaterialForm;
