import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        const content = contentRef.current;

        // Ensure content is always visible
        if (image) {
            image.style.opacity = '1';
            image.style.visibility = 'visible';
        }
        if (content) {
            content.style.opacity = '1';
            content.style.visibility = 'visible';
        }

        // Simple scroll animation (optional)
        if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
            try {
                gsap.fromTo([image, content],
                    { opacity: 0.7, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
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
        <section className="about" ref={sectionRef}>
            <div className="about-inner">
                <div className="about-header">
                    <h2>Media, Advertising and Consultancy</h2>
                </div>

                <div className="about-content">
                    <div className="about-image" ref={imageRef}>
                        <img src="/assets/IMG_1307.JPG" alt="CreateitAfrica Team at Work" />
                    </div>

                    <div className="about-text" ref={contentRef}>
                        <h3>Crafting Visual Excellence Across Africa</h3>
                        <p>
                            At CreateitAfrica, we specialize in comprehensive media solutions that bridge traditional African storytelling with modern digital excellence. Our expertise spans photography, videography, advertising campaigns, and strategic consultancy services.
                        </p>
                        <p>
                            From corporate branding to cultural documentaries, we bring over a decade of experience in capturing authentic African narratives that resonate globally while honoring local heritage and values.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
