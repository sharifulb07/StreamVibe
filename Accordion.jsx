'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FAQInfo, FAQInfo1 } from '@/lib/FAQInfo';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
    const [openStates, setOpenStates] = useState([]);
    const [openStates1, setOpenStates1] = useState([]);



    const toggleAccordion = (index) => {
        setOpenStates(prev => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    const toggleAccordion1 = (index) => {
        setOpenStates1(prev => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };


    // Initialize open states if empty
    if (openStates.length === 0 && FAQInfo.length > 0) {
        setOpenStates(new Array(FAQInfo.length).fill(false));
        return null; // Return null on first render to prevent flash
    }
    // Initialize open states if empty
    if (openStates1.length === 0 && FAQInfo1.length > 0) {
        setOpenStates1(new Array(FAQInfo1.length).fill(false));
        return null; // Return null on first render to prevent flash
    }




    return (
        <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-1 w-full">


            <div className=" flex flex-col md:flex-row w-full max-w-full">

                <div className='flex flex-col w-full'>
                    {FAQInfo.map((faq, index) => (
                        <div key={index}>
                            <div  className='flex w-full items-start gap-0 px-[34px] py-[30px]  '>
                                <div className='p-[20px] bg-black-shade-12 border-2 rounded-[10px] border-black-shade-15'>
                                    <h2 className='text-white text-[20px] font-semibold'>{faq.id}</h2>
                                </div>

                                <div key={index} className="w-full rounded-lg overflow-hidden">


                                    <button
                                        className="w-full  px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={openStates[index]}
                                        aria-controls={`FAQInfo-answer-${index}`}
                                    >
                                        <div className="flex items-center justify-between w-full max-w-[800px]">
                                            <h3 className="text-lg font-medium text-white text-[22px] leading-normal">{faq.name}</h3>

                                            {openStates[index] ? <MinusIcon scale={6} className='h-8 w-8' color='white' /> : <PlusIcon scale={6} className='h-8 w-8' color='white' />}

                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        <motion.div
                                            id={`FAQInfo-answer-${index}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: '80px' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}

                                            className={`px-6 pb-4 ${openStates[index] ? 'block' : 'hidden'}`}
                                        >
                                            <p className="text-grey-shade-60 text-[18px] pt-2">{faq.desc}</p>
                                        </motion.div>
                                    </AnimatePresence>

                                </div>
                            </div>
                          {index<3 ? <div className='w-full  h-1 mx-[7%] bg-gradient-to-r from-[#1F1313] from-5% via-[#8F0909] via-30% to-[#1D1414] to-80%'></div> :'' } 
                        </div>
                    ))}
                </div>

                <div className='flex flex-col w-full'>
                    {FAQInfo1.map((faq, index) => (
                        <div key={index}>
                            <div className='flex w-full items-start gap-0 px-[34px] py-[30px] gradient-border '>
                                <div className='p-[20px] bg-black-shade-12 border-2 rounded-[10px] border-black-shade-15'>
                                    <h2 className='text-white text-[20px] font-semibold'>{faq.id}</h2>
                                </div>

                                <div className="w-full relative rounded-lg overflow-hidden">


                                    <button
                                        className="w-full  px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        onClick={() => toggleAccordion1(index)}
                                        aria-expanded={openStates1[index]}
                                        aria-controls={`FAQInfo1-answer-${index}`}
                                    >
                                        <div className="flex items-center justify-between w-full max-w-[800px]">
                                            <h3 className="text-lg font-medium text-white text-[22px] leading-normal">{faq.name}</h3>

                                            {openStates1[index] ? <MinusIcon scale={6} className='h-8 w-8' color='white' /> : <PlusIcon scale={6} className='h-8 w-8' color='white' />}

                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        <motion.div
                                            id={`FAQInfo1-answer-${index}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: '80px' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5 }}

                                            className={`px-6 pb-4 ${openStates1[index] ? 'block' : 'hidden'}`}
                                        >
                                            <p className="text-grey-shade-60 text-[18px] pt-2">{faq.desc}</p>
                                        </motion.div>
                                    </AnimatePresence>


                                </div>
                            </div>
                            {index<3 ? <div className='w-full  h-1 mx-[7%] bg-gradient-to-r from-[#1F1313] from-5% via-[#8F0909] via-30% to-[#1D1414] to-80%'></div> :'' } 
                        </div>
                    ))}
                </div>





            </div>


        </div>
    );
}