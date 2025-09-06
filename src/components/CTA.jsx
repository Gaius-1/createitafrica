import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Simple scroll animation
        if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
            try {
                gsap.fromTo(contentRef.current,
                    { opacity: 0.7, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            } catch (error) {
                console.log('Animation failed, content still visible');
            }
        }
    }, []);

    return (
        <section className="cta" ref={sectionRef}>
            <div className="cta-inner">
                <div className="cta-content" ref={contentRef}>
                    <h2>Ready to Tell Your Story?</h2>
                    <p>
                        Let's create something extraordinary together. From intimate moments to grand celebrations, 
                        we capture the essence of your African heritage with modern storytelling techniques.
                    </p>
                    <div className="cta-buttons">
                        <Button label="Start Your Project" icon="arrow-forward-sharp" />
                        <Button label="View Portfolio" icon="images-sharp" />
                    </div>
                    <div className="cta-contact">
                        <p>Call us: <span>+233 59 461 5290</span></p>
                        <p>Email: <span>createitafricaa@gmail.com</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;