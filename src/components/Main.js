import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t, i18n } = useTranslation()
    return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center text-center overflow-hidden text-white overflow-x-hidden">
        {/*
        <motion.div>
            <h1 className="tracking-[1px] font-semibold text-xl"><span className="text-[#ff606c]">Across</span> <span className="text-[#fec836]">Culture </span> 
            and <span className="text-[#50c5e5]">Technology</span>.</h1>
        </motion.div>
        */}
        <div className="flex p-10 items-center text-left w-[100%] h-[50%] md:w-[50%] md:h-[100%] bg-[#ff606c]">
            <motion.div 
            initial={{
                x: 0,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
                transition={{
                duration: 1
            }}>
                {/*
                <h1 className="w-[100%] md:w-[70%] tracking-[1px] font-semibold text-2xl p-2">Across Culture and Technology.</h1>
                <p className="w-[100%] md:w-[70%] p-2 hidden md:block">We want to provide content that permeates the game with the impression of famous IP works. 
                We do not stop researching and making efforts to make the pleasure of the original work recreated as game content. 
                We pursue the goal that the original and game contents can grow together.</p>
                */}
                <h1 className="w-[100%] md:w-[70%] tracking-[1px] font-semibold text-2xl p-2">{t('ACT.1')}</h1>
                <p className="w-[100%] md:w-[70%] p-2 hidden md:block">{t('Why.1')}</p>
            </motion.div>
        </div>
        <div className="absolute w-[100%] h-[3%] md:w-[20%] md:h-screen md:skew-x-6 bg-[#fec836] z-10">
        </div>
        <div className="flex p-10 items-center justify-end w-[100%] h-[50%] md:w-[50%] md:h-[100%] bg-[#50c5e5]">
            <motion.div 
            initial={{
                x: 0,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
                transition={{
                duration: 1.5
            }}>
                <ImageCarousel />
            </motion.div>
        </div>
    </div>
  )
}

export default Main