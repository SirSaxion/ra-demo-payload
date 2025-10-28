"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 16,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 md:gap-8 pb-6 md:pb-8"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-7 sm:p-8 rounded-3xl border border-black/10 bg-white text-black shadow-[0_12px_32px_rgba(0,0,0,0.12)] max-w-sm w-full"
                key={`${index}-${i}`}
              >
                <div className="text-base md:text-[17px] leading-7 md:leading-8 tracking-tight">{text}</div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-[15px] md:text-[16px]">{name}</div>
                    <div className="leading-5 text-sm text-black/60 tracking-tight">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
