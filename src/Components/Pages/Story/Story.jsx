import React from 'react';

const Story = () => {
    return (
        <div className='container mx-auto p-8 bg-white rounded-lg shadow-lg mt-5'>
            <h1 className='text-5xl font-bold text-center text-teal-600 mb-8'>Our Story</h1>

            <section className='mb-8'>
                <img
                    src='https://static.vecteezy.com/system/resources/previews/008/901/457/non_2x/fitness-banner-horizontal-cartoon-style-vector.jpg'
                    alt='Healthy Lifestyle'
                    className='mb-4 rounded-lg w-full '
                />
                <p className='text-lg text-gray-800 mb-4'>
                    Our story begins with a desire to find a better way. Like you, we grew frustrated with weight reduction products that overpromise and underdeliver. We knew there had to be a solution that works with your body, not against it.
                </p>
                <p className='text-lg text-gray-800'>
                    After years of searching, we discovered the answer in a unique formula: the Slim Down natural tonic. This tonic is designed to support your body’s natural processes, making weight loss not just achievable, but sustainable.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Our Mission</h2>
                <img
                    src='https://missionwellness.com/wp-content/uploads/2023/03/C9R8PCC-2x-1024x746.jpg'
                    alt='Our Mission'
                    className='mb-4 rounded-lg w-full '
                />
                <p className='text-lg text-gray-800 mb-4'>
                    Our mission is to empower individuals to achieve their weight loss goals in a healthy and natural way. We believe in:
                </p>
                <ul className='list-disc pl-6 text-lg text-gray-800'>
                    <li>🌱 Natural ingredients that work with your body.</li>
                    <li>🤝 Building a community of support and encouragement.</li>
                    <li>📈 Creating sustainable health practices for long-term success.</li>
                </ul>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Our Journey</h2>
                <img
                    src='https://simple.life/blog/wp-content/uploads/2020/06/fat-weight.png'
                    alt='Our Journey'
                    className='mb-4 rounded-lg w-full '
                />
                <p className='text-lg text-gray-800 mb-4'>
                    We started as a small team of wellness enthusiasts, passionate about making a difference in people's lives. Through rigorous research and countless trials, we formulated the Slim Down tonic, which has transformed lives and helped many achieve their desired weight loss.
                </p>
                <p className='text-lg text-gray-800'>
                    Our journey is not just about creating a product; it’s about fostering a movement towards healthier living. We strive to inspire others to embrace a balanced lifestyle.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Success Stories</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                    <img
                        src='https://i.redd.it/weight-loss-success-stories-v0-0mvsg33udi2a1.png?width=1024&format=png&auto=webp&s=5128ecb2e477d9ca871ad135eae63e6f2e432d37'
                        alt='Success Stories 1'
                        className='rounded-lg w-full lg:max-h-96'
                    />
                    <img
                        src='https://media-cldnry.s-nbcnews.com/image/upload/t_focal-440x220,f_auto,q_auto:best/rockcms/2024-09/Jose-Matos-weightloss-mc-2x1-240910-copy-48f779.jpg'
                        alt='Success Stories 2'
                        className='rounded-lg w-full lg:max-h-96'
                    />
                    <img
                        src='https://www.womansworld.com/wp-content/uploads/2022/03/lose-weight-walking-success-story-1.png?w=1024&quality=86&strip=all'
                        alt='Success Stories 3'
                        className='rounded-lg w-full lg:max-h-96'
                    />
                    <img
                        src='https://bestbodyin52.com/wp-content/uploads/2016/11/DannyOKelly.jpg'
                        alt='Success Stories 3'
                        className='rounded-lg w-full lg:max-h-96'
                    />
                </div>
                <blockquote className='border-l-4 border-teal-600 pl-4 italic text-lg text-gray-700 mb-4'>
                    "Using the Slim Down tonic has been a game changer for me! I feel healthier and more energetic than ever!" – Jessica R.
                </blockquote>
                <blockquote className='border-l-4 border-teal-600 pl-4 italic text-lg text-gray-700'>
                    "I finally found a solution that works with my body. The support from The Wellness Dawn community has been incredible!" – Mike T.
                </blockquote>

                <div className="flex justify-center my-10">
                    <div className="relative group">
                        {/* Gradient border container */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>

                        {/* Button */}
                        <button className="relative px-8  py-4 bg-teal-400 rounded-lg leading-none flex items-center">
                            <a
                                href="https://sumatratonic.com/getstarted/?hopId=742fe240-1c08-4008-a0c8-b453d8a48109&"
                                className="text-white font-bold transform transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                ✨ Unlock Magic Now ✨
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Story;
