import React from 'react';

const Vision = () => {
    return (
        <div className='container mx-auto p-8 bg-white rounded-lg shadow-lg mt-5'>
            <h1 className='text-5xl font-bold text-center text-teal-600 mb-8'>Our Vision</h1>
            
            <section className='mb-8'>
                <img 
                    src='https://www.vision-and-eye-health.com/wp-content/uploads/2024/01/eye-health-lifestyle-1024x683.jpg' 
                    alt='Healthy Lifestyle' 
                    className='mb-4 rounded-lg w-full   object-cover' 
                />
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Addressing the Root Cause</h2>
                <p className='text-lg text-gray-800 mb-4'>
                    We created Sumatra Slim Belly Tonic to tackle the root cause of stubborn weight gain: poor sleep. After years of research, we formulated this tonic using eight powerful herbal superfoods, including Valerian Root, Berberine, and Spirulina Blue.
                </p>
                <p className='text-lg text-gray-800 mb-4'>
                    These ingredients not only enhance your body’s fat-burning potential but also improve your overall fitness. Unlike toxic weight reduction supplements that rely on harsh stimulants, Sumatra Slim Belly Tonic takes a gentler approach by promoting deep, restorative sleep.
                </p>
                <p className='text-lg text-gray-800'>
                    Sleep is crucial for resetting your metabolism and managing appetite, and our tonic is designed to do just that. Poor sleep often leads to weight gain, but with Sumatra Slim Belly Tonic, you'll wake up feeling refreshed and on your way to a slimmer, healthier self.
                </p>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>What We Offer</h2>
                <p className='text-lg text-gray-800 mb-4'>
                    Our vision goes beyond just weight loss; we aim to foster a lifestyle that prioritizes health and well-being. Here’s what you can expect from our tonic:
                </p>
                <ul className='list-disc pl-6 text-lg text-gray-800'>
                    <li>🌿 Natural ingredients for safe weight management.</li>
                    <li>💤 Improved sleep quality for better recovery.</li>
                    <li>⚡ Enhanced fat-burning potential for effective weight loss.</li>
                    <li>🤗 Support for your overall wellness journey.</li>
                </ul>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Ingredient Spotlight</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {[ 
                        { name: 'Valerian Root', benefits: 'Promotes relaxation and improves sleep quality.', imgSrc: 'https://ml1uhas4pupd.i.optimole.com/cb:eLNn.de3/w:auto/h:auto/q:mauto/f:best/https://www.bio-botanica.com/wp-content/uploads/2022/01/product_Valerian-Root-German-1.jpg' },
                        { name: 'Berberine', benefits: 'Supports metabolic health and enhances fat loss.', imgSrc: 'https://warnerorthopedics.com/wp-content/uploads/2023/06/berberine.jpg  ' },
                        { name: 'Spirulina Blue', benefits: 'Rich in nutrients and antioxidants, boosts energy levels.', imgSrc: 'https://itsherbalmagic.com/cdn/shop/products/3_8efcae75-c0c2-49dc-b8ad-41307d8e86b5.jpg?v=1708062387' }
                    ].map(({ name, benefits, imgSrc }) => (
                        <div key={name} className='bg-teal-100 p-6 rounded-lg shadow-md'>
                            <img 
                                src={imgSrc} 
                                alt={name} 
                                className='mb-4 w-full h-32 object-cover rounded-md' 
                            />
                            <h3 className='font-semibold text-xl text-teal-700'>{name}</h3>
                            <p className='text-gray-600'>{benefits}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Vision;
