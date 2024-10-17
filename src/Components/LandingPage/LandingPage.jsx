import React, { useState } from 'react';
import "./landingpage.css"
import { FaRegCirclePlay } from 'react-icons/fa6';
import { ModalComponent } from './ModalComponent';
const LandingPage = () => {
    const [openModal, setOpenModals] = useState(false)
    const handleModal = () => {
        setOpenModals(true);
    }
    return (
        <div  >
            {
                openModal && <ModalComponent setOpenModals={setOpenModals}></ModalComponent>
            }
            <div className=" mb-20">
               

                <div className="mb-4">
                    <section className="w-full  mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="mb-4">
                                <div className="flex flex-col items-center">
                                    <button onClick={handleModal} className="btn lg:my-10 mt-4 text-2xl rounded-full py-1 px-10 ">
                                        Slim Down Naturally
                                    </button>
                                </div>
                                <div className="text-center lg:mx-32 mb-4">
                                    <div className='lg:text-6xl text-2xl font-semibold mt-3'
                                    >
                                        <p className="">
                                            " This <span className="text-blue-600">Weird ‘Blue Tonic’</span>
                                            Makes Slimming Down Fast, Almost Effortless, And EASIER Than Ever... "
                                        </p>

                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <div
                                        id="text-e34c6d59"
                                        style={{ fontSize: '20px', fontFamily: 'Fira Sans', color: 'rgba(0, 0, 0, 1)', fontWeight: 400 }}
                                    >
                                        <p>
                                            <span className="text-black font-bold">It’s a little-known waist slimming method </span>
                                            <span className="text-black">that has nothing to do with counting calories…</span>
                                        </p>
                                        <p>
                                            <span className="text-black">This has stunned both scientists and doctors all around the world. </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-center">
                                        <img
                                            onClick={handleModal}
                                            src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e429d12cf_image14.webp"
                                            width="1000"
                                            loading="lazy"
                                            className="object-contain cursor-pointer border-t-8 border-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-center">
                                <button onClick={handleModal} id='button-f16412bc' className=" font-bold items-center justify-center rounded-full lg:text-4xl uppercase lg:py-10 py-2 px-5  text-white gap-2   lg:my-10 flex  w-fit lg:px-72">
                                    CLICK HERE TO WATCH THE VIDEO <FaRegCirclePlay />
                                </button>
                            </div>
                        </div>



                        <div className="mb-4  grid grid-cols-12 lg:mx-20">
                            <div className='  lg:col-span-6 col-span-12'>
                                <div className="flex  ">
                                    <hr className="border-t border-gray-400 mb-4 w-full" />
                                </div>
                                <div className="text-start mb-4 px-3">
                                    <div className='text-2xl font-bold '
                                    >
                                        <p>Learn About the <span className="text-blue-600">Overlooked Diet Mistakes</span> Holding You Back! This has stunned doctors.</p>
                                    </div>
                                </div>
                                <div className="text-left mb-4 px-3">
                                    <div
                                        id="text-be2ecb63"
                                        style={{ fontSize: '18px', fontFamily: 'Fira Sans', fontWeight: 400 }}
                                    >
                                        <p>
                                            <span>This is a video that discusses 2 major diet mistakes - done by millions each day - that slow metabolism, increase cravings, and clog arteries.</span>
                                            <strong> To find out, check out this controversial video now, before it gets banned.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className=" ">
                                    <button
                                        onClick={handleModal}
                                        className=" bg-blue-700 w-fit text-white   lg:py-5 lg:text-5xl text-2xl px-5 py-4 rounded-r-full font-medium flex items-center   rounded-l-none"
                                    >CLICK HERE TO WATCH THE VIDEO<FaRegCirclePlay className="ml-2" />
                                    </button>
                                </div>

                            </div>

                            <div className='   lg:col-span-6 col-span-12  flex items-center justify-center'>
                                <picture  ><img onClick={handleModal} className="cursor-pointer" src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e563d0329_img5.webp" /></picture>
                            </div>
                        </div>



                    </section>
                </div>
            </div>

        </div >

    );
}


export default LandingPage;