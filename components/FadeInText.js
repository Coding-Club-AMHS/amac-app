import React, { useEffect, useState, useRef } from 'react';

const FadeInText = (props) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setTimeout(() => { setVisible(entry.isIntersecting) }, 500)

            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div style={isVisible ? { opacity: 1, transform: 'translateY(0vh)', transition: 'opacity 0.6s ease-out, transform 1.2s ease-out, visibility 1.2s ease-out' } : { opacity: 0, transform: 'translateY(-20vh)' }} ref={domRef} >
            {props.children}
        </div>
    );
}

export default FadeInText;