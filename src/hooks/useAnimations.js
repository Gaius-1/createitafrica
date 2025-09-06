import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const useHeroAnimation = () => {
  const heroImgRef = useRef(null);
  const headerRef = useRef(null);
  const footerH3Ref = useRef(null);
  const footerPRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const createSplitTexts = (elements) => {
      const splits = {};

      elements.forEach(({ key, selector, type }) => {
        const config = { type, mask: type };

        if (type === "chars") config.charsClass = "char";
        if (type === "lines") config.linesClass = "line";
        splits[key] = SplitText.create(selector, config);
      });

      return splits;
    };

    const splitElements = [
      { key: "headerChars", selector: ".header h1", type: "chars" },
      { key: "heroFooterH3", selector: ".hero-footer h3", type: "lines" },
      { key: "heroFooterP", selector: ".hero-footer p", type: "lines" },
      { key: "btnLabels", selector: ".btn-label span", type: "lines" },
    ];

    const splits = createSplitTexts(splitElements);

    gsap.set([splits.headerChars.chars], { y: "100%" });
    gsap.set([splits.heroFooterH3.lines], { y: "100%" });
    gsap.set([splits.heroFooterP.lines], { y: "100%" });
    gsap.set([splits.btnLabels.lines], { y: "100%" });
    gsap.set(".btn-icon", { clipPath: "circle(0% at 50% 50%)" });
    gsap.set(".btn", { scale: 0 });

    const tl = gsap.timeline({ delay: 1.5 });

    tl.to(heroImgRef.current, {
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    })
      .to(splits.headerChars.chars, {
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
      }, "-=1")
      .to(
        [splits.heroFooterH3.lines, splits.heroFooterP.lines],
        {
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .to(
        ".btn",
        {
          scale: 1,
          duration: 1,
          ease: "power4.out",
          onStart: () => {
            gsap.to(".btn-icon", {
              clipPath: "circle(100% at 50% 50%)",
              duration: 1,
              ease: "power2.out",
            });
            gsap.to(splits.btnLabels.lines, {
              y: 0,
              duration: 1,
              ease: "power4.out",
            });
          },
        },
        "<"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return {
    heroImgRef,
    headerRef,
    footerH3Ref,
    footerPRef,
    btnRefs,
  };
};
