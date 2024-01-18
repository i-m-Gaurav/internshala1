import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const UserForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Clear userDetails from localStorage when the component mounts
  useEffect(() => {
    localStorage.removeItem('userDetails');
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate input: ensure none of the fields are empty
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Please fill in all the details.');
      return;
    }

    const userDetails = { name, phone, email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href = '/second-page'; // Redirect to the second page
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
      <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
};

export default UserForm;
