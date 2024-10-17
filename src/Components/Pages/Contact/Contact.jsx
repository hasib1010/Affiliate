import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto p-8 bg-white rounded-lg shadow-lg mt-5'>
            <h1 className='text-5xl font-bold text-center text-teal-600 mb-8'>Get in Touch</h1>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Contact Form</h2>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor='name' className='block text-lg text-gray-700 mb-2'>Name</label>
                        <input 
                            type='text' 
                            id='name' 
                            className='w-full p-2 border border-gray-300 rounded-md' 
                            placeholder='Your Name' 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-lg text-gray-700 mb-2'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            className='w-full p-2 border border-gray-300 rounded-md' 
                            placeholder='Your Email' 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor='message' className='block text-lg text-gray-700 mb-2'>Message</label>
                        <textarea 
                            id='message' 
                            rows='5' 
                            className='w-full p-2 border border-gray-300 rounded-md' 
                            placeholder='Your Message' 
                            required 
                        ></textarea>
                    </div>
                    <button 
                        type='submit' 
                        className='w-full py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500 transition duration-300'
                    >
                        Send Message
                    </button>
                </form>
            </section>

            <section className='mb-8'>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Contact Information</h2>
                <p className='text-lg text-gray-800 mb-2'><strong>Email:</strong> support@wellnessdawn.com</p>
                <p className='text-lg text-gray-800 mb-2'><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className='text-lg text-gray-800 mb-2'><strong>Address:</strong> 123 Wellness St, Health City, CA 90000</p>
            </section>

            <section>
                <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Follow Us</h2>
                <ul className='flex space-x-4'>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:underline'>Facebook</a>
                    </li>
                    <li>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:underline'>Twitter</a>
                    </li>
                    <li>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-teal-600 hover:underline'>Instagram</a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Contact;
