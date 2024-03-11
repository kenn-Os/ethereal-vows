import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const AnimatedPage = ({children}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage