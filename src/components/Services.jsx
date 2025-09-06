import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Simple scroll animation
        if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
            try {
                gsap.fromTo('.service-item',
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
        <section className="services" ref={sectionRef}>
            <div className="services-inner">
                <div className="services-header">
                    <h2>Our Services</h2>
                    <p>Comprehensive solutions tailored for African brands and businesses</p>
                </div>

                <div className="services-grid">
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/assets/IMG_1372.JPG" alt="Media Production" />
                        </div>
                        <div className="service-content">
                            <h4>Media Production</h4>
                            <p>Professional photography and videography for all occasions</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/assets/IMG_1645.JPG" alt="Advertising Campaigns" />
                        </div>
                        <div className="service-content">
                            <h4>Advertising</h4>
                            <p>Creative campaigns that connect brands with African audiences</p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-image">
                            <img src="/assets/IMG_1958.JPG" alt="Strategic Consultancy" />
                        </div>
                        <div className="service-content">
                            <h4>Consultancy</h4>
                            <p>Strategic guidance for authentic cultural representation</p>
                        </div>
                    </div>
                </div>

                <div className="services-video-section">
                    <div className="services-video-header">
                        <h3>Motion Graphics & Animation Showcase</h3>
                        <p>Experience our creative motion design work and animation expertise</p>
                    </div>
                    <div className="services-video">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="services-video-player"
                        >
                            <source src="/videos/showreel.mp4" type="video/mp4" />
                            <source src="/videos/showreel.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
