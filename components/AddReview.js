import { useState } from 'react';
import { Rating } from '@mui/material';
import * as React from 'react'


const AddReview = ({ onSave }) => {

    const [value, setValue] = React.useState(2);
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onSave({ text, value });
        setText('');
        setValue(0);
        }

    return (
        <form className="flex flex-col" onSubmit={onSubmit}>
            <div className='flex flex-row my-2'>
                <p className='text-lg'>Rate the wine</p>
                <Rating 
                    name='no-value'
                    defaultValue={0}
                    value={value}
                    precision={0.1}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
            <div className="">
                <textarea className=' w-80 border h-52 rounded-md' type="text" placeholder="  Write your review here..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='flex justify-start items-end  rounded-md border border-transparent px-4 py-2 text-sm font-medium'>
                <input type="submit" className="flex items-start justify-start bg-blue-100 p-2 rounded-md text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" value="Submit Review" />
            </div>
        </form>
    )
}
export default AddReview;