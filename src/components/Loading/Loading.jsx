import { AiOutlineLoading } from 'react-icons/ai'
import { motion } from 'framer-motion'
import styles from '../Loading/Loading.module.css'

const LoadingPage = () => {
    return (
        <>
            <motion.div
                className={styles.chapa}
                animate={{ opacity: 1 }}
                exit={{opacity: 0, transition:{delay: .2, duration: 1}}}
                transition={{ duration: 1 }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: .5 }}
                    className={styles.logo}>
                </motion.div>

                <motion.div
                    className={styles.loading}
                    animate={{ transition: { duration: 1, repeat: Infinity, ease: "linear" }, rotateZ: 360 }}
                >
                    <AiOutlineLoading size={'2.5em'} color={'white'} />
                </motion.div>

            </motion.div>
        </>
    )
}

export default LoadingPage