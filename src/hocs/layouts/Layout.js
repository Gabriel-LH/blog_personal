
import { connect } from "react-redux";
import { motion } from "framer-motion"

function Layout({children}) {
    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.6}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.6}}}>
            {children}
        </motion.div>
    )
}

const mapStateProp = state => ({

})

export default connect(mapStateProp,{
     }) (Layout);