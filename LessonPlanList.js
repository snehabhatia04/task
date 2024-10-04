import React, { useEffect, useState } from 'react';
import { fetchLessonPlans, approveLessonPlan } from '../../services/api';

const LessonPlanList = () => {
  const [lessonPlans, setLessonPlans] = useState([]);

  useEffect(() => {
    const getLessonPlans = async () => {
      const data = await fetchLessonPlans();
      setLessonPlans(data);
    };
    getLessonPlans();
  }, []);

  const handleApprove = async (id) => {
    await approveLessonPlan(id);
    setLessonPlans(lessonPlans.map(lp => lp.id === id ? { ...lp, approved: true } : lp));
  };

  return (
    <div>
      {lessonPlans.map(plan => (
        <div key={plan.id}>
          <h3>{plan.title}</h3>
          <p>{plan.description}</p>
          {plan.approved ? <span>Approved</span> : <button onClick={() => handleApprove(plan.id)}>Approve</button>}
        </div>
      ))}
    </div>
  );
};

export default LessonPlanList;
