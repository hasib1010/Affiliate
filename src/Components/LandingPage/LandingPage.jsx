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
                openModal && <ModalComponent setOpenModals= {setOpenModals}></ModalComponent>
            }
<div className=" mb-20">
    <div className="flex  flex-col ">

        <div className="flex justify-between w-full items-center px-10 border-b-2 mb-3">
            <div className="mb-4">
                <div className="flex justify-center">
                    <img
                        id="image-d7a0e190"
                        src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e3c2c1e28_logo1.webp"
                        width="200"
                        loading="lazy"
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="text-center">
                <div
                    id="text-f45d2a2c"
                    style={{ fontSize: '20px', fontFamily: 'Fira Sans', color: 'rgba(0, 0, 0, 1)', fontWeight: 400 }}
                >
                    <p>
                        <span className="text-black">Before You Go to Sleep Tonight, </span>
                        <span className="text-black font-bold">Try It for Yourself...</span>
                    </p>
                </div>
            </div>
            <div className="text-center">
                <div
                    id="text-9f57e773"
                    style={{ fontSize: '15px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'rgba(0, 0, 0, 1)' }}
                >
                    <p>
                        <span className="text-gray-800">ADVERTORIAL</span>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="mb-4">
        <section className="w-full  mx-auto">
            <div className="flex flex-col items-center">
                <div className="mb-4">
                    <div className="flex flex-col items-center">
                        <button onClick={handleModal} className="btn my-10 rounded-full py-1 px-10 ">
                            Slim Down Naturally
                        </button>
                    </div>
                    <div className="text-center mx-32 mb-4">
                        <div
                            style={{ fontSize: '60px', fontFamily: 'Fira Sans Condensed', fontWeight: 600 }}
                        >
                            <p>
                                <span className="text-black"> " This </span><span className="text-blue-600">Weird ‘Blue Tonic’</span><span className="text-black"> Makes Slimming Down Fast, Almost Effortless, And EASIER Than Ever... "</span>
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

                                src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e429d12cf_image14.webp"
                                width="1000"
                                loading="lazy"
                                className="object-contain border-t-8 border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-center">
                    <button id='button-f16412bc' className=" font-bold items-center justify-center rounded-full text-4xl uppercase py-10  text-white gap-2   my-10 flex  w-fit px-72">
                        CLICK HERE TO WATCH THE VIDEO <FaRegCirclePlay />
                    </button>
                </div>
            </div>



            <div className="mb-4  grid grid-cols-12 mx-20">
                <div className='  col-span-6'>
                    <div className="flex  ">
                        <hr className="border-t border-gray-400 mb-4 w-full" />
                    </div>
                    <div className="text-start mb-4">
                        <div
                            id="text-268961eb"
                            style={{ fontSize: '35px', fontFamily: 'Fira Sans', fontWeight: 700 }}
                        >
                            <p>Learn About the <span className="text-blue-600">Overlooked Diet Mistakes</span> Holding You Back! This has stunned doctors.</p>
                        </div>
                    </div>
                    <div className="text-left mb-4">
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
                    <div className="flex justify-center">
                        <button onClick={handleModal} className=" btn text-white  w-full py-5 text-5xl font-medium rounded-l-none">
                            WATCH THE VIDEO NOW<i className="far fa-play-circle ml-2" />
                        </button>
                    </div>
                </div>

                <div className=' col-span-6  flex items-center justify-center'>
                    <picture class="sc-keVrkP gVjqbK"><img id="image-ddb66fc9" src="https://d1yei2z3i6k35z.cloudfront.net/2278740/66d5e563d0329_img5.webp" width="450" loading="lazy" class="sc-dvCyap kYfSQX" /></picture>
                </div>
            </div>



        </section>
    </div>
</div>

        </div >

    );
}


export default LandingPage;