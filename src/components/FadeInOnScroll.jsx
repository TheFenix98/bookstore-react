import { useEffect, useRef, useState } from "react";

const FadeInOnScroll = ({children}) => {
    const ref= useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }

        }
        , {
            threshold: 0.2
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
            {children}
        </div>
    );
}

export default FadeInOnScroll