import { Modal } from "flowbite-react";
import { useState } from "react";
import axios from 'axios';
import { FaRegCirclePlay } from "react-icons/fa6";

export function ModalComponent({ setOpenModals }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(false);

    function onCloseModal() {
        setOpenModals(false);
        setName('');
        setEmail('');
        setError({ name: '', email: '' });
    }

    const validateEmailWithZeroBounce = async (email) => {
        const apiKey = 'c10f85c6f58644e1993bd3db17def42a'; // Replace with your actual API key
        try {
            const response = await axios.get(`https://api.zerobounce.net/v2/validate`, {
                params: {
                    api_key: apiKey,
                    email: email,
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error validating email:', error);
            return null;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError({ name: '', email: '' });
        setLoading(true);

        let hasError = false;

        if (!name.trim()) {
            setError((prev) => ({ ...prev, name: 'Name is required.' }));
            hasError = true;
        }

        if (!email.trim()) {
            setError((prev) => ({ ...prev, email: 'Email is required.' }));
            hasError = true;
        }

        if (hasError) {
            setLoading(false);
            return;
        }

        const validationResponse = await validateEmailWithZeroBounce(email);
        setLoading(false);

        if (validationResponse) {
            if (validationResponse.status === 'valid') {
                console.log('Name submitted:', name);
                console.log('Email submitted:', email);
                onCloseModal();
            } else {
                setError((prev) => ({ ...prev, email: 'Please provide a valid email address.' }));
            }
        } else {
            setError((prev) => ({ ...prev, email: 'Failed to validate email.' }));
        }
    };

    return (
        <Modal show={true} onClose={onCloseModal} popup>
            <div className="border-4 rounded-md border-dashed border-black">

                <Modal.Header />
                <Modal.Body>
                    <div >
                        <div className="mb-10">
                            <h3 className="text-5xl mb-3 font-bold text-center text-gray-900 dark:text-white">Almost There!</h3>
                            <p className="text-xl text-center text-gray-600 dark:text-gray-400">Enter your name and best email below to continue</p>

                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                            <div>
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name here"
                                    className={`w-full py-4 p-3 rounded-md border ${error.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email here"
                                    className={`w-full p-3 py-4 rounded-md border ${error.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                            </div>
                            <button
                                type="submit"
                                className={`w-full text-3xl py-4 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Validating...' : 'PROCEED TO VIDEO'}
                                <FaRegCirclePlay className="inline-block ml-2" />
                            </button>
                            <p className="text-center text-red-600">We HATE spam. Your email address is 100% secure</p>
                        </form>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
}
