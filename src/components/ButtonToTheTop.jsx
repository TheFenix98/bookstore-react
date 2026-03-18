import {useState, useEffect} from 'react';

const ButtonToTheTop = () => {
    const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const toggleVisibility = () => {
                setIsVisible(window.scrollY > 300);
            };
            window.addEventListener('scroll', toggleVisibility);
            return () => window.removeEventListener('scroll', toggleVisibility);
        }, []);

        if (!isVisible) return null;
  return (
    <div className={`fixed bottom-4 left-4 ${isVisible ? 'opacity-100 translate-y-0 transition-all duration-300' : 'opacity-0 translate-y-10 transition-all duration-300'}`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-4 left-4 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    </div>
  )
}

export default ButtonToTheTop