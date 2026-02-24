import { useState, useEffect, type FormEvent } from 'react';

// For local development, this points to your NestJS server via Vite proxy.
const API_URL = '/api/guestbook'; 

export default function Guestbook() {
  const [entries, setEntries] = useState<any[]>([]); // Clears the 'never' error
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // 1. GET Request: Load messages
  const loadMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setEntries(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error loading guestbook:", err);
    }
  };

  useEffect(() => { loadMessages(); }, []);

  // 2. POST Request: Save a new message
  const handleSubmit = async (e: FormEvent) => { // Added FormEvent type
    e.preventDefault();
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });
    setName('');
    setMessage('');
    loadMessages(); 
  };

  // 3. DELETE Request: Remove a message
  const deleteEntry = async (id: string | number) => { // Added type for id
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadMessages();
  };

  return (
    <div className="guestbook-container">
      <h2>Guestbook</h2>
      
      <form onSubmit={handleSubmit} className="guestbook-form">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Leave a message..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
        <button type="submit">Post Message</button>
      </form>

      <div className="entries-list">
        {entries.map((entry) => (
          <div key={entry.id} className="entry-card">
            <p><strong>{entry.name}:</strong> {entry.message}</p>
            <button onClick={() => deleteEntry(entry.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}