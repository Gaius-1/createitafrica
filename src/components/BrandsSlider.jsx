import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BrandsSlider = () => {
    const sliderRef = useRef(null);

    const brands = [
        { name: 'CBCR', image: '/brands/cbcr.jpg' },
        { name: 'GAB', image: '/brands/gab.jpg' },
        { name: 'GCB', image: '/brands/gcb.jpg' },
        { name: 'GRA', image: '/brands/gra.jpg' },
        { name: 'Samprints', image: '/brands/samprints.jpg' }
    ];

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            // Single slider - smooth left to right movement
            gsap.to(slider, {
                x: '-50%',
                duration: 40,
                ease: 'none',
                repeat: -1
            });
        }
    }, []);

    return (
        <section className="brands">
            <div className="brands-header">
                <p>Trusted by leading brands across Africa</p>
            </div>

            <div className="brands-container">
                <div className="brands-slider" ref={sliderRef}>
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <div key={`brand-${index}`} className="brand-item">
                            <img 
                                src={brand.image} 
                                alt={brand.name}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSlider;