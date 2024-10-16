import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export function ModalComponent({ setOpenModals }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(''); // Current date
    const [country, setCountry] = useState(''); // Country will be set automatically
    const [error, setError] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Set the current date
        const today = new Date().toISOString().split('T')[0];
        setDate(today);

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    // For simplicity, you can set a default country here,
                    // or fetch the user's country using a reverse geocoding API.
                    setCountry('Bangladesh'); // You can replace this with actual fetching logic.
                },
                () => {
                    console.error("Unable to retrieve location");
                    setCountry('Unknown'); // Fallback if geolocation fails
                }
            );
        }
    }, []);

    function onCloseModal() {
        setOpenModals(false);
        setName('');
        setEmail('');
        setDate('');
        setCountry('');
        setError({ name: '', email: '' });
    }

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

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Date', date);
        formData.append('Country', country);

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwJpfJnX72wGaFSfcghHTHSTntW6DPpohUprpxAz_wqiOjuvLrRfVom4Mvjk3lNFT5pWw/exec', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Error response:', errorMessage);
                throw new Error('Failed to submit data.');
            }

            console.log('Data submitted:', { name, email, date, country });
            onCloseModal();
        } catch (error) {
            console.error('Fetch error:', error);
            setError((prev) => ({ ...prev, email: 'Failed to save data.' }));
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={true} onClose={onCloseModal} popup>
            <div className="border-4 rounded-md border-dashed border-black">
                <Modal.Header />
                <Modal.Body>
                    <div>
                        <div className="mb-10">
                            <h3 className="text-5xl mb-3 font-bold text-center text-gray-900 dark:text-white">Almost There!</h3>
                            <p className="text-xl text-center text-gray-600 dark:text-gray-400">Enter your name and email below to continue</p>
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
                            <input type="hidden" value={date} name="date" />
                            <input type="hidden" value={country} name="country" />
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
