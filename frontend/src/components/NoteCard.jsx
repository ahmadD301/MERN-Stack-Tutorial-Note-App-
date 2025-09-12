import React from 'react'
import { Link } from 'react-router-dom'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
export const NoteCard = ({note}) => {
  return (
    <Link to ='/note/${note._id}' className='border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
    <div className='card-body'>
        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-sm text-gray-400'>{note.content}</p>
        <div className='card-actions justify-between mt-4'>
            <span>
                {formatDate(note.updatedAt)}
            </span>
            <div className='flex items-center gap-1'>
               < PenSquareIcon className='h-4 w-4 text-gray-400'/>
                <button className='btn btn-ghost text-error'><Trash2Icon className='size-4'/></button>
            </div>
        </div>
    </div>
    </Link>
  )
}
export default NoteCard
