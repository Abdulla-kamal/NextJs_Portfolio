'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationType =
  | 'zoom-rotate'
  | 'fade'
  | 'slide-up'
  | 'slide-left'
  | 'slide-right'
  | 'scale-fade'
  | 'flip-in'
  | 'bounce-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animationType?: AnimationType;
}

const variants: Record<AnimationType, Variants> = {
  'zoom-rotate': {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-fade': {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  },
  'flip-in': {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  'bounce-up': {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
};

export default function ScrollReveal({
  children,
  animationType = 'zoom-rotate',
}: ScrollRevealProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animation = variants[animationType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animation}
      transition={
        animationType === 'bounce-up'
          ? undefined // handled inside variant
          : { duration: 0.6, ease: 'easeOut' }
      }
    >
      {children}
    </motion.div>
  );
}
