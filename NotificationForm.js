import React, { useState } from 'react';
import { sendNotification } from '../../services/api';

const NotificationForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendNotification(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Notification Message" 
      />
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationForm;
