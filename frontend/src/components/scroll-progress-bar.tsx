import { motion } from 'framer-motion';

interface ScrollProgressBarProps {
  scrollProgress: number;
}

export const ScrollProgressBar = ({
  scrollProgress,
}: ScrollProgressBarProps) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-slate-100 to-slate-950 origin-left scroll-smooth`}
      style={{ scaleX: scrollProgress }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ ease: 'linear' }}
    />
  );
};
