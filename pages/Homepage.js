import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import data from '../pages/api/data.json';


const Homepage = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
      {/* First Section - Tilbud */}
      <div className= 'w-[90%]'>
        {/* Headline */}
        <div className='p-2'>
          <h1 className='text-5xl'>Vivino-Tilbud</h1>
          <p>This is the vivino offers. They are both good in reviews and now also have an awesome price.</p>
        </div>
        <div>
          <div className='flex overflow-x-auto overflow-y-hidden py-8'>
            {data.data.map((item, i) => (
              // eslint-disable-next-line react/jsx-key
              <Link href="/WineDetails">
                <div key={i} className=' border w-72 rounded-2xl m-2 mb-20 p-1 hover:scale-102 duration-300 h-[600px] shadow-lg hover:shadow-2xl hover:shadow-slate-600'>
                    <div className='flex'>
                      <div className='h-96 m-4'>
                        <Image 
                          src={item.img}
                          alt="wine img"
                          width={100}
                          height={200}
                        />
                      </div>
                      <div className=' flex justify-center items-center flex-col'>
                        <div className='text-xl'>{item.winename}</div>
                        <div className='flex'>
                          <Image 
                            src="/star2.png"
                            width={20}
                            height={20}
                            alt="rating star"
                            className="mr-1"
                          />
                          {item.rating}
                        </div>
                        <div>{item.year}</div>
                      </div>
                    </div>
                  <div className=' border-t-2 m-2 pt-2'>{item.details}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Options */}
      <div className='flex justify-around items-center w-[70%] '>
        <div className='rounded-2xl shadow-md hover:shadow-slate-500'>
          <div className='relative h-[400px] w-[500px]'>
            <Image 
              src="/offer.png"
              alt=''
              fill='true'
              className=' object-cover'
            />
          </div>
          <div className='h-14 flex justify-center items-center'>
            Great offers right now
          </div>
        </div>

        <div className='shadow-md hover:shadow-slate-500 rounded-2xl'>
          <div className='relative h-[400px] w-[500px] '>
            <Image 
                  src="/wines.jpg"
                  alt=''
                  fill='true'
                  className='rounded-2xl object-cover'
                />
          </div>
          <div className='h-14 flex justify-center items-center'>
            Explore the most popular wines
          </div>
        </div>
      </div>

      {/* Bestsellers Section */ }
      <div className='w-10/12'>
        <div className='text-3xl pt-40 p-2'>
          <h1>Bestsellers</h1>
        </div>
        <div className='flex overflow-y-hidden overflow-x-auto py-10'>
              {data.data.map((item, i) => (
                // eslint-disable-next-line react/jsx-key
                <Link href="/WineDetails">
                  <div key={i} className='flex border w-72 rounded-2xl m-2 p-1 hover:scale-105 shadow-md hover:shadow-slate-400 duration-300 h-[150px]'>
                      <div className='flex items-center'>
                        <div className=' h-56 p-1'>
                          <Image 
                            src={item.img}
                            alt="wine img"
                            width={60}
                            height={100}
                          />
                        </div>
                        <div className=' flex justify-center items-center flex-col'>
                          <div className='text-xl'>{item.winename}</div>
                          <div className='flex'>
                            <Image 
                              src="/star2.png"
                              width={20}
                              height={20}
                              alt="rating star"
                              className="mr-1"
                            />
                            {item.rating}
                          </div>
                          <div>{item.year}</div>
                        </div>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Homepage