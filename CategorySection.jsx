'use client'
import { useRef, useState } from 'react';

import Hero from "./Hero";
import CategoryCard from "./CategoryCard";

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { CategoryCardInfoLinks } from '@/lib/CategoryCardInfoLink';



export default function CategorySection() {


  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [count, setCount] = useState([]);
  const cardWidth = 200; // Adjust based on your card width + gap
  const indicators = [1, 2, 3];
  const visibleCards = 4; // Number of cards visible at once

  const scrollToPosition = (position) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: position,
        behavior: 'smooth'
      });
      setScrollPosition(position);
    }
  };

  const scrollNext = () => {

    if (indicators.length >= activeIndex) {
      setActiveIndex(activeIndex + 1)
      if (activeIndex == 2) {

        setActiveIndex(2)
      }
    }
    const newPosition = scrollPosition + (cardWidth * visibleCards);
    scrollToPosition(newPosition);

  };

  const scrollPrev = () => {

    if (activeIndex > 0 && activeIndex < indicators.length + 1) {
      setActiveIndex(activeIndex - 1)
      if (activeIndex < 0) {
        setActiveIndex(0)
      }
    }
    const newPosition = Math.max(0, scrollPosition - (cardWidth * visibleCards));
    scrollToPosition(newPosition);
  };




  return (
    <section className="relative mt-[350px] md:mt-[280px] w-full overflow-hidden px-[10%] ">
      <div className="flex justify-between items-center mb-10 md:mb-15">
        <div className='flex flex-col gap-[10px] '>
          <h2 className="text-[28px] font-bold text-white">Explore our wide variety of categories</h2>
          <p className='text-white text-[16px]'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>

        </div>
        <div className="hidden md:flex gap-4 items-center bg-black-shade-06 p-4 rounded-[12px] ">
          <button
            onClick={scrollPrev}
            disabled={scrollPosition === 0}
            className=" rounded-[8px]  disabled:opacity-50 bg-black-shade-10 p-[14px]"
          >
            <ArrowLeftIcon className='cursor-pointer h-[28px] w-[28px] text-white ' />
          </button>
          <div className='flex gap-[3px]'>
            {indicators.map((n, index) => (
              <div key={n} className={`h-1 w-[18px] rounded-full ${index == activeIndex ? "bg-red-shade-45" : "bg-black-shade-30"} `}></div>
            ))}
          </div>

          <button
            onClick={scrollNext}
            className=" rounded-[8px]  disabled:opacity-50 bg-black-shade-10 p-[14px] "
          >
            <ArrowRightIcon className='cursor-pointer h-[28px] w-[28px] text-white' />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-hidden scrollbar-hide gap-5 snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex gap-5 flex-shrink-0">
          {CategoryCardInfoLinks.map((link) => (

            <CategoryCard photo={link.photo} title={link.name} key={link.id} />
          ))}

        </div>
      </div>

{/* mobile card indicators */}
      <div className="flex md:hidden justify-center gap-4 items-center bg-black-shade-06 p-4 rounded-[12px] ">
          <button
            onClick={scrollPrev}
            disabled={scrollPosition === 0}
            className=" rounded-[8px]  disabled:opacity-50 bg-black-shade-10 p-[14px]"
          >
            <ArrowLeftIcon className='cursor-pointer h-[28px] w-[28px] text-white ' />
          </button>
          <div className='flex gap-[3px]'>
            {indicators.map((n, index) => (
              <div key={n} className={`h-1 w-[18px] rounded-full ${index == activeIndex ? "bg-red-shade-45" : "bg-black-shade-30"} `}></div>
            ))}
          </div>

          <button
            onClick={scrollNext}
            className=" rounded-[8px]  disabled:opacity-50 bg-black-shade-10 p-[14px] "
          >
            <ArrowRightIcon className='cursor-pointer h-[28px] w-[28px] text-white' />
          </button>
        </div>
    </section>
  )
}
