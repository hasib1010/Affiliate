import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto lg:p-8 p-3 bg-white rounded-lg shadow-lg mt-5'>
            <h1 className='text-5xl font-bold text-center text-teal-600 mb-8'>About Us</h1>

            {/* Welcome Section */}
            <section className='flex flex-col md:flex-row items-center mb-12 lg:p-4'>
                <div className='md:w-1/2 mb-6 md:mb-0'>
                    <img
                        src='https://www.viralspices.com/wp-content/uploads/2021/10/Importance-of-herbs-in-daily-life.jpg'
                        alt='Wellness'
                        className='w-full h-64 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105'
                    />
                </div>
                <div className='md:w-1/2 md:pl-6'>
                    <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Welcome to The Wellness Dawn</h2>
                    <p className='text-lg text-gray-800 mb-4'>
                        At The Wellness Dawn, we transform weight loss into a journey of self-discovery through natural, sustainable strategies tailored to your body.
                    </p>
                    <img
                        src='https://theabcsofwellness.com/wp-content/uploads/Wellness-journey.jpg'
                        alt='Wellness Journey'
                        className='w-full h-64 object-cover rounded-lg shadow-md mb-4'
                    />
                    <p className='text-lg text-gray-800'>
                        Say goodbye to fad diets! We offer genuine solutions that nurture your mind, body, and spirit.
                    </p>
                </div>
            </section>
            
            {/* Mission Section */}
            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Our Mission</h2>
                <img
                    src='https://cdn.shopify.com/s/files/1/0272/4714/9155/files/Innovation-in-Healthcare_dd01f4bf-882b-4502-b798-b45b879243ea.jpg?v=1702443557'
                    alt='Mission'
                    className='w-full h-64 object-cover rounded-lg shadow-md mb-4'
                />
                <p className='text-lg text-gray-800 mb-4'>
                    We aim to empower individuals on their weight loss journey with science-backed guidance and unwavering support.
                </p>
                <p className='text-lg text-gray-800'>
                    Our holistic approach fosters a positive relationship with food and helps you achieve sustainable change.
                </p>
            </section>

            {/* Values Section */}
            <section className='mb-12'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Our Values</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {[
                        { name: 'Integrity', img: 'https://cdn.vectorstock.com/i/500p/85/92/integrity-concept-line-icon-simple-element-vector-27068592.jpg', description: 'Honesty and transparency in all we do.' },
                        { name: 'Community', img: 'https://cdn.vectorstock.com/i/500p/85/94/community-support-concept-line-icon-simple-element-vector-27068594.jpg', description: 'A supportive environment for everyone.' },
                        { name: 'Sustainability', img: 'https://cdn.vectorstock.com/i/500p/85/90/sustainability-concept-line-icon-simple-element-vector-27068590.jpg', description: 'Practices that benefit both you and the planet.' }
                    ].map(({ name, img, description }) => (
                        <div key={name} className='bg-teal-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                            <img
                                src={img}
                                alt={name}
                                className='w-16 h-16 mb-2 object-contain'
                            />
                            <h3 className='font-semibold text-xl text-teal-800'>{name}</h3>
                            <p className='text-gray-600'>{description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Testimonials</h2>
                <div className='space-y-4'>
                    {[
                        { quote: "The Wellness Dawn changed my life! I've never felt better.", name: "Sarah T.", img: 'https://media.licdn.com/dms/image/C4E12AQG98wZYMnWJTw/article-cover_image-shrink_600_2000/0/1520245968524?e=2147483647&v=beta&t=g49_1dyhEGca3zt15Q4PUp31vHP64j_C4f4tGNRa96A' },
                        { quote: "Their approach is refreshing and truly sustainable!", name: "Mark L.", img: 'https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F93189b0c-7906-11ea-a9b3-a42d54022bdc.jpg?crop=800%2C1000%2C350%2C0' }
                    ].map(({ quote, name, img }) => (
                        <blockquote key={name} className='border-l-4 border-teal-600 pl-4 italic text-lg text-gray-700 flex items-center'>
                            <img src={img} alt={name} className='w-10 h-10 rounded-full mr-3 object-cover' />
                            "{quote}" – <span className='font-semibold'>{name}</span>
                        </blockquote>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
