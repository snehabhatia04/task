// LessonPlanForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LessonPlanForm = () => {
  const [lessonPlan, setLessonPlan] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/lesson-plans', lessonPlan);
    // handle response and state reset
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={lessonPlan.title} 
        onChange={(e) => setLessonPlan({...lessonPlan, title: e.target.value})} 
        placeholder="Lesson Title" 
      />
      <textarea 
        value={lessonPlan.description} 
        onChange={(e) => setLessonPlan({...lessonPlan, description: e.target.value})} 
        placeholder="Lesson Description"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LessonPlanForm;
