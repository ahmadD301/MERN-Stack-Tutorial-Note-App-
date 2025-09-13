import React from 'react'
import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import toast from 'react-hot-toast'
import api from '../lib/axios'

export const NoteCard = ({note ,setNote}) => {
  const handleDelete = async (e,id) => {
    e.preventDefault();// Prevents navigation when clicking delete
    if(!window.confirm("Are you sure you want to delete this note?")){return;}
    try {
      await api.delete(`/notes/${id}`);
      setNote((prev) => prev.filter(note => note._id !== id)); // Update state to remove deleted note
      toast.success("Note deleted successfully");
    
    } catch (error) {
      toast.error("Failed to delete the note");
    }finally{
      // window.location.reload(); // Optional: Reload the page to reflect changes
    }
    // Add delete functionality here
  }
  return <Link to ={`/note/${note._id}`}className='border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-sm text-gray-400'>{note.content}</p>
        <div className='card-actions justify-between mt-4'>
            <span>
                {formatDate(note.updatedAt)}
            </span>
            <div className='flex items-center gap-1'>
               < PenSquareIcon className='h-4 w-4 text-gray-400'/>
                <button className='btn btn-ghost text-error' onClick={(e)=> handleDelete(e,note._id)}><Trash2Icon className='size-4'/></button>
            </div>
        </div>
    </div>
    </Link>
  
}
export default NoteCard
