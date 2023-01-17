import Review from './Review';
import * as React from "react";
import { Dialog } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import data from '../pages/api/data.json';
import Image from 'next/image';

const Reviews = ({ reviews, onDelete}) => {

    let [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)

    function closeModal() {
    setIsOpen(false)
    }

    function openModal() {
    setIsOpen(true)
    }
    function getIndex(index) {
        setIsOpen(true)
        setIndex(index);
    }

    return (
        <div>
            {
                reviews.map((review, index) => (
                    <div key={index}>
                        <div onClick={() => {openModal(); getIndex(index)}}>
                            <Review key={review.id} review={review} onDelete={onDelete} />
                        </div>
                    </div>
                ))
            }
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
                                                    <div className='flex flex-row p-2'>
                                                        <Image 
                                                            src="/star2.png"
                                                            width={20}
                                                            height={20}
                                                            alt="rating star"
                                                            className="mr-1"
                                                        />
                                                        {reviews[index]?.value}
                                                    </div>
                                                    Review of {data.data[0].winename}
                                                </Dialog.Title>
                                                <div className="mt-2 flex flex-row">
                                                    <div className='text-left border rounded-md p-2'>
                                                        {reviews[index]?.text}
                                                    </div>
                                                </div>

                                                <div className="mt-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
    )
}
export default Reviews;