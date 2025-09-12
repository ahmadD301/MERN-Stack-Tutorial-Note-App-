import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimited';
import { useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';

const Home = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/notes');
        setNote(response.data);
        console.log(response.data);
        setNote(response.data);
        setRateLimited(false);
        setLoading(false);
      }catch (error) {
        if ( error.response.status === 429) {
          setRateLimited(true);
        }else {
          toast.error("Failed To Load Notes");
        }
    }
    finally {
          setLoading(false);  
    }
    };
    fetchNote();
  }, []);

  return <div className="min-h-screen">
    <Navbar />
    {isRateLimited && <RateLimitedUI />}

    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>Loading...</div>}

      {note.length > 0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {note.map(note => (
          <NoteCard key={note._id} note={note}/>
          // <div>
          //   {note.title} | {note.content}
          // </div>
        ))}
        </div>
      )}
    
    </div>
  </div>;
}
export default Home;