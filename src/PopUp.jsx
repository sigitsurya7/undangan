import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import img1 from './assets/welkamen.avif'
import { useSearchParams } from 'react-router-dom'

const PopUp = ({ close, onClose }) => {

    const [open, setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
        onClose()
    }
    const queryParameters = new URLSearchParams(window.location.search)
    const to1 = queryParameters.get("to1")
    const to2 = queryParameters.get("to2")

    return(
        <AnimatePresence>

            {close && (
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y:-300, opacity: 0, transition: 60 }}
                >
                    <div className="z-50 w-screen h-screen bg-secondary p-4 flex flex-col gap-4 justify-center">
                        <div className='text-center pt-4'>
                            <p className='font-semibold italic text-3xl text-center pacifico'>Undangan Pernikahan</p>
                            <span className='font-semibold text-2xl'>Untuk</span>
                            <p className='text-2xl capitalize italic pacifico'>{to1} & { to2 ?? 'pasangan' }</p>
                        </div>

                        <motion.div className='h-[75%] bg-auto bg-no-repeat bg-top rounded-t-full mt-8' style={{ backgroundImage: `url(${img1})` }} />

                        <button className='btn btn-accent' onClick={closeModal}>Lihat Undangan</button>
                    </div>

                </motion.div>
            )}

        </AnimatePresence>
    )
}

export default PopUp