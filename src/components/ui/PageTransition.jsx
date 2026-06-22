import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: 'blur(10px)',
    scale: 0.985,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: 'blur(6px)',
    scale: 0.99,
    transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
  },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
