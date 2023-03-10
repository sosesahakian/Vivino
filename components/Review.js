
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import * as React from "react";

const Review = ({ review, onDelete}) => {

    return (
        <div>
            <div className="flex border rounded-md justify-between m-1 p-2sm:p-10 drop-shadow-md hover:scale-[101%] duration-300 ease-in-out max-h-28 sm:h-28">
                <div className='flex '>
                    <div className='flex rounded-md p-2 items-start h-10 w-20'>
                        <Image 
                            src="/star2.png"
                            width={20}
                            height={20}
                            alt="rating star"
                        />
                            <div>
                                <div>
                                    {review.value}
                                </div>
                            </div>
                    </div>
                    <div className="flex w-10/12 justify-center mx-5 overflow-hidden">
                        <span className=""></span> {review.text}
                    </div>
                </div>
                <div className='pointer-events-auto'>
                    <div><CloseIcon onClick={() => onDelete(review.id)} className="m-3" /></div>
                </div>
            </div>
        </div>
    )
}
export default Review;