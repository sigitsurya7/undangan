import { useRef, useState } from 'react'
import img1 from './assets/welkamen.avif'
import img2 from './assets/1.jpg'
import img3 from './assets/2.jpg'
import ring from './assets/ring.png'
import briMo from './assets/bri.png'
import livinMandiri from './assets/mandiri.png'
import './assets/tailwind.css'
import { FcAdvertising, FcClock, FcHome, FcKindle, FcMoneyTransfer } from "react-icons/fc"
import { FaCopy, FaLocationDot } from "react-icons/fa6";
import CountdownTimer from './targetDate'
import Swal from 'sweetalert2'
import AudioPlayer from './audioPlayer'

import audio from './assets/videoplayback.weba'
import PopUp from './PopUp'
import { AnimatePresence } from 'framer-motion'

function App() {

  const targetDate = new Date('2024-05-12T10:00:00')

  const [ show, setShow ] = useState(true)

  const audioSrc = audio

  const copyLink = (data) => {
    const el = document.createElement('textarea')
    el.value = data
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    Swal.fire({
      icon: 'success',
      text: 'No Rekening Berhasil di salin',
      showConfirmButton: false,
      timer: 3000
    })
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <>
      <PopUp onClose={closeModal} close={show} />

      { show ? <></> : 
        <AnimatePresence>
          <div className='w-screen h-full flex flex-col justify-center bg-base-100'>
            
            <div id='home' className='w-screen h-screen bg-primary flex flex-col gap-4 p-4'>
              <div className='text-center pt-10'>
                <span className='text-center text-xl font-semibold poppins'>The Wedding Of</span>
                <br />
                <br />
                <span className='font-semibold italic text-3xl text-center pacifico'>Nadiyanti & Sigit</span>
              </div>

              <div className='h-[75%] bg-auto bg-no-repeat bg-top rounded-t-full mt-8' style={{ backgroundImage: `url(${img1})` }}></div>

            </div>

            <div id='pembukaan' className='w-screen bg-base-100 p-4 flex flex-col gap-4 pt-10 border-b-2 border-black pb-8'>
              <h1 className='text-center text-2xl font-serif font-semibold poppins'>Assalamualaikum warahmatullahi wabarakaatuh</h1>

              <article className='capitalize text-center font-semibold poppins'>
                Dengan Memohon Rahmat Dan Ridho Allah Subhanaahu Wa Ta'aala Yang Telah Menciptakan Makhluk-Nya secara Berpasang-pasangan, InsyaAllah Kami Bermaksud Menyelenggarakan Pernikahan Kami.
              </article>

              <div className='flex justify-evenly items-center gap-8 pt-28 pb-10'>
                <div className='w-24 text-center'>
                  <img className="mask mask-squircle" src={img2} />

                  <span className='font-semibold italic'>Sigit</span>
                </div>

                <div className="w-24 rounded-full">
                  <img className='bg-cover' src={ring} />
                </div>

                <div className='w-24 text-center'>
                  <img className="mask mask-squircle" src={img3} />

                  <span className='font-semibold italic'>Nadiyanti</span>
                </div>
              </div>

              <h1 className='text-3xl font-semibold text-center pacifico'>Nadiyanti Zahra</h1>
              <span className='text-center font-sans font-semibold capitalize'>Putri ke lima dari bapak muhammad dan Almh. Ibu jumyati.</span>

              <span className='text-center font-bold text-3xl'>&</span>

              <h1 className='text-3xl font-semibold text-center pacifico'>Sigit Surya Aji Brata</h1>
              <span className='text-center font-sans font-semibold capitalize'>Putra pertama dari bapak dulatif dan ibu irahayu ningsih.</span>
            </div>
            
            <div id='akad' className='w-screen h-max bg-base-100 p-4 text-center flex flex-col gap-4 pt-10 pb-10'>
              <h1 className='text-3xl font-semibold pacifico'>- Save The Date -</h1>

              <span className='my-4'>
                Rangkaian Acara yang akan di selenggarakan
              </span>

              
              <CountdownTimer targetDate={targetDate} />
              

              <div className='flex justify-center'>
                <div className='w-max bg-base-100 rounded-xl shadow-md p-2'>
                  <div className='w-full bg-gradient-to-r from-[#D4E7C5] to-[#BFD8AF] rounded-md flex flex-col gap-4 p-8'>
                    <span className='font-semibold text-xl'>- Akad Nikah -</span>

                    <div className='flex w-full justify-center items-center gap-4 my-4'>
                      <p className='poppins font-semibold text-black rounded-md'>
                        <span className='pacifico font-semibold text-2xl'>Minggu, 12 Mei 2024</span> 
                      </p> 
                    </div>

                    <p className='font-semibold'>Pukul 10:00 WIB - SELESAI</p>

                    <p>Alamat</p>

                    <article className='font-semibold'>
                      Kp. Irian No 86, Rt/Rw 001/007 Kecamatan Babelan Kabupaten Bekasi
                    </article>
                    
                    <a href='https://maps.app.goo.gl/gzMo3Kcx94n3YLnp8' className="btn mt-8">
                      <FaLocationDot />
                      Lihat Detail Lokasi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id='gift' className='w-screen h-screen p-4 bg-primary text-center flex flex-col gap-4 pt-10'>
              <p className='poppins'>Kirimkan hadiah kepada mempelai</p>
              <div className='w-full bg-base-100 rounded-xl shadow-md p-2'>
                  <div className='w-full bg-gradient-to-r from-[#D4E7C5] to-[#BFD8AF] rounded-md flex flex-col items-center gap-4 p-8'>
                    <img className="mask mask-squircle w-20" src={briMo} alt="" />
                    <p className='poppins text-lg'>Sigit Surya Aji Brata</p>
                    <input 
                      type="text" 
                      // ref={linkRef}
                      defaultValue="182201011836500" 
                      className='input bg-primary'
                      hidden 
                    />
                    <button className='btn btn-block btn-accent flex' onClick={() => copyLink('182201011836500')}><FaCopy /> Salin No. Rekening</button>
                  </div>
              </div>

              <div className='w-full bg-base-100 rounded-xl shadow-md p-2'>
                  <div className='w-full bg-gradient-to-r from-[#D4E7C5] to-[#BFD8AF] rounded-md flex flex-col items-center gap-4 p-8'>
                    <img className="mask mask-squircle w-20" src={livinMandiri} alt="" />
                    <p className='poppins text-lg'>Nadiyanti Zahra</p>
                    <input 
                      type="text" 
                      // ref={linkRef}
                      defaultValue="1560021057908" 
                      className='input bg-primary'
                      hidden 
                    />
                    <button className='btn btn-block btn-accent flex' onClick={() => copyLink('1560021057908')}><FaCopy /> Salin No. Rekening</button>
                  </div>
              </div>
            </div>

            <div className='w-full bottom-0 fixed p-4 pl-4 pr-4 justify-arround'>
              <AudioPlayer src={audioSrc} />
            </div>

          </div>
        </AnimatePresence>
      }
    </>
  )
}

export default App
