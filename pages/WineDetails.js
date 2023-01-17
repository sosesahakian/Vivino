import * as React from 'react'
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import data from './api/data.json'
import Image from 'next/image';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
import { Dialog } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { useState, useEffect, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '@/components/Header';

function WineDetails() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    const [reviews, setReviews] = useState([]); // Task State
    const [showAddReview, setShowAddReview] = useState(false); // To reveal add task form

    useEffect(() => {
        const getReviews = JSON.parse(localStorage.getItem("reviewAdded"));
        if (getReviews == null) {
            setReviews([])
        } else {
            setReviews(getReviews);
        }
    }, [])

    const addReview = (review) => {
        const id = uuidv4();
        const newReview = { id, ...review }
        setReviews([...reviews, newReview]);
        
        localStorage.setItem("reviewAdded", JSON.stringify([...reviews, newReview]));
        
    }

    const deleteReview = (id) => {
        const deleteReview = reviews.filter((review) => review.id !== id);
        setReviews(deleteReview);
        localStorage.setItem("reviewAdded", JSON.stringify(deleteReview));
    }




return (
    <div>
        <Header />
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center w-10/12'>
                {/* Wine Details*/}
                <div className=''>
                    <div>
                        <div className='flex flex-col sm:flex-row  justify-around'>
                            <div className='flex pt-10 justify-center'>
                                <Image 
                                    src={data.data[0].img}
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='pt-8 sm:text-lg md:text-3xl lg:text-5xl'>{data.data[0].winename}</div>
                                <div>{data.data[0].year}</div>
                                <div className='flex sm:text-xs md:text-lg'>
                                    <Image 
                                        src="/star2.png"
                                        width={20}
                                        height={20}
                                        alt="rating star"
                                        className="mr-1"
                                    />
                                    {data.data[0].rating}
                                </div>
                                <div className='p-6 sm:w-[70%] md:w-[40%]'>{data.data[0].details}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wine Taste*/}
                <div className='flex flex-col justify-center items-center sm:h-150 md:h-[300px] bg-slate-200 rounded-full my-20 p-4'>
                    <div className='text-3xl mb-2 sm:mb-8'>How does it taste?</div>
                    <div className='flex pl-5'>
                        <h1>Light</h1>
                        <TasteSlider
                        defaultValue={[10, 20]}
                        className='sm:w-[300px] md:w-[600px]'
                        />
                        <h1 className='ml-6'>Bold</h1>
                    </div>
                    <div className='flex'>
                        <h1>Smooth</h1>
                        <TasteSlider
                            defaultValue={[80, 90]}
                            className='sm:w-[300px] md:w-[600px] lg:w-[600px] xl:w-[600px]'
                        />
                        <h1 className='ml-6'>Tannic</h1>
                    </div>
                    <div className='flex '>
                        <h1>Dry</h1>
                        <TasteSlider
                            defaultValue={[30, 40]}
                            className='sm:w-[300px] md:w-[600px] lg:w-[600px] xl:w-[600px] 2xl:w-[600px]'
                        />
                        <h1 className='ml-6'>Sweet</h1>
                    </div>
                    <div className='flex '>
                        <h1>Soft</h1>
                        <TasteSlider
                            defaultValue={[50, 60]}
                            className='sm:w-[300px] md:w-[600px] lg:w-[600px] xl:w-[600px]'
                        />
                        <h1 className='ml-6'>Acidic</h1>
                    </div>
                </div>

                {/* Reviews */}
                <div>
                    <div className="">
                        <h1 className='text-3xl p-2'>Reviews</h1>
                        <div className='flex '>
                            <div className='w-2/3'>
                                {
                                    reviews.length > 0 ?
                                        (<Reviews reviews={reviews} onDelete={deleteReview} />) :
                                        ('No Reviews Found!')
                                }
                            </div>
                            <div className='flex flex-col items-center w-1/3 px-4 '>
                                <h3>Number of Reviews: {reviews.length}</h3>
                                <button
                                    type="button"
                                    onClick={openModal}
                                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                    >
                                    Add Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <Transition appear show={isOpen} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                                    </Transition.Child>
                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className="flex flex-col w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-xl font-medium leading-6 text-gray-900 p-2 flex justify-center items-center"
                                                    >
                                                        You are reviewing {data.data[0].winename} from {data.data[1].year}
                                                    </Dialog.Title>
                                                    <div className="mt-2 flex flex-row">
                                                        <div className='text-left rounded-md p-2'>
                                                            <AddReview onSave={addReview} />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button
                                                            type="button"
                                                            className=" items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                            onClick={closeModal}
                                                            >
                                                            Close
                                                        </button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
            </div>
        </div>
    </div>
)
}
export default WineDetails

const TasteSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 6,
    padding: '13px',
    '& .MuiSlider-thumb': {
      height: 0,
      width: 0,
      backgroundColor: '#fff',
      border: '1px solid currentColor',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
    },
    '& .MuiSlider-track': {
      height: 10,
    },
    '& .MuiSlider-rail': {
      color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
      opacity: theme.palette.mode === 'dark' ? undefined : 1,
      height: 7,
    },
  }));