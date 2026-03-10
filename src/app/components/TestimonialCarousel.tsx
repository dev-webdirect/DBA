"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "../../lib/utils";
import type { TestimonialMessages } from "@/type";

type TestimonialCarouselProps = {
  messages: TestimonialMessages;
};

type Testimonial = TestimonialMessages["testimonials"][number];

const TestimonialCard = ({
  testimonial,
  isCenter,
}: {
  testimonial: Testimonial;
  isCenter: boolean;
}) => ( <div className={cn('h-full w-full bg-[#1a1c24] border rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group transition-all duration-700', isCenter ? 'border-[#DDB892]/30 shadow-[0_20px_50px_rgba(221,184,146,0.1)] opacity-100 z-30' : 'border-white/5 shadow-none opacity-40 grayscale-[0.5] blur-xs z-10')}>
    <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#DDB892]/5 z-0" />

    <div className="relative z-10 space-y-5 sm:space-y-8">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} className="fill-[#DDB892] text-[#DDB892]" />)}
      </div>
      <p className={cn('font-serif text-white italic font-light leading-relaxed transition-all duration-700', isCenter ? 'text-lg sm:text-xl md:text-3xl' : 'text-base sm:text-lg md:text-xl')}>
        "{testimonial.quote}"
      </p>
    </div>

    <div className="relative z-10 flex items-center mt-7 sm:mt-12">
      <div>
        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">{testimonial.name}</h4>
        <span className="text-[#DDB892] text-[10px] md:text-xs uppercase tracking-widest font-medium">
          {testimonial.role}
        </span>
      </div>
    </div>
  </div>);

// @component: TestimonialCarousel
export const TestimonialCarousel = ({ messages }: TestimonialCarouselProps) => {
  const t = messages;
  const testimonials = t.testimonials;
  const stats = t.stats;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);
  const getSlideIndex = (offset: number) => (activeIndex + offset + testimonials.length) % testimonials.length;
  const slideVariants = {
    center: {
      zIndex: 30,
      x: 0,
      scale: 1,
      opacity: 1,
      display: 'block'
    },
    left: {
      zIndex: 10,
      x: '-65%',
      scale: 0.8,
      opacity: 0.4,
      display: 'block'
    },
    right: {
      zIndex: 10,
      x: '65%',
      scale: 0.8,
      opacity: 0.4,
      display: 'block'
    },
    hidden: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? '100%' : '-100%',
      scale: 0.6,
      opacity: 0,
      display: 'none'
    })
  };
  return <div className="w-full bg-[#1a1c24] overflow-hidden">
      <div className="relative z-20 mx-auto px-5 sm:px-8 py-16 sm:py-20 md:py-28 max-w-[1380px]">

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-4xl mx-auto mb-16 sm:mb-24 md:mb-32 border-t border-white/5 pt-10 sm:pt-12">
          {stats.map((stat, idx) => <div key={`stat-${idx}`} className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">{stat.value}</h3>
              <p className="text-[#DDB892] text-[9px] sm:text-[10px] uppercase font-black tracking-widest leading-tight">{stat.label}</p>
            </div>)}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-5 sm:space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[#DDB892]" />
            <span className="text-[#DDB892] font-bold tracking-[0.2em] uppercase text-xs">{t.sectionLabel}</span>
            <div className="w-10 h-px bg-[#DDB892]" />
          </div>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[56px] xl:text-[72px] font-serif text-white tracking-tighter leading-none">
            <span>{t.headingMain}</span>
            <span className="italic font-light text-[#DDB892]" style={{
            fontFamily: 'Georgia, serif'
          }}>
              {t.headingHighlight}<span className="text-[#DDB892]">.</span>
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto overflow-visible">
          <div className="relative h-[480px] sm:h-[500px] w-full flex items-center justify-center">
            <AnimatePresence initial={false} mode="popLayout">
              {/* Left Slide */}
              <motion.div key={`left-${getSlideIndex(-1)}`} variants={slideVariants} initial="hidden" animate="left" exit="hidden" custom={-1} transition={{
              type: 'spring',
              stiffness: 260,
              damping: 26
            }} className="absolute w-full max-w-2xl cursor-pointer" onClick={handlePrev}>
                <TestimonialCard testimonial={testimonials[getSlideIndex(-1)]} isCenter={false} />
              </motion.div>

              {/* Center Slide */}
              <motion.div key={`center-${activeIndex}`} variants={slideVariants} initial="hidden" animate="center" exit="hidden" custom={direction} transition={{
              type: 'spring',
              stiffness: 260,
              damping: 26
            }} className="absolute w-full max-w-2xl">
                <TestimonialCard testimonial={testimonials[activeIndex]} isCenter={true} />
              </motion.div>

              {/* Right Slide */}
              <motion.div key={`right-${getSlideIndex(1)}`} variants={slideVariants} initial="hidden" animate="right" exit="hidden" custom={1} transition={{
              type: 'spring',
              stiffness: 260,
              damping: 26
            }} className="absolute w-full max-w-2xl cursor-pointer" onClick={handleNext}>
                <TestimonialCard testimonial={testimonials[getSlideIndex(1)]} isCenter={false} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-10 sm:mt-14 md:mt-16 px-2 sm:px-4">
            <div className="flex gap-3 sm:gap-4">
              <button onClick={handlePrev} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#DDB892] hover:text-[#1a1c24] hover:border-[#DDB892] transition-all group active:scale-95" aria-label="Previous slide">
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button onClick={handleNext} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#DDB892] hover:text-[#1a1c24] hover:border-[#DDB892] transition-all group active:scale-95" aria-label="Next slide">
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, i) => <button key={`dot-${i}`} onClick={() => goToSlide(i)} className={cn('h-1.5 transition-all duration-500 rounded-full', activeIndex === i ? 'w-8 sm:w-10 md:w-12 bg-[#DDB892]' : 'w-2 sm:w-3 bg-white/10 hover:bg-white/20')} aria-label={`Go to slide ${i + 1}`} />)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};