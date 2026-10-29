
import { useEffect, useState } from "react";
import coupleBackground from "../assets/image/bg.png";

export default function Couple() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 1300),
      setTimeout(() => setStep(3), 2300),
      setTimeout(() => setStep(4), 3300),
      setTimeout(() => setStep(5), 4300),
      setTimeout(() => setStep(6), 5300),
      setTimeout(() => setStep(7), 6300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italianno&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Serif+Devanagari:wght@400;500;600&display=swap');

        .couple-reveal,
        .couple-reveal * {
          box-sizing: border-box;
        }

        .couple-reveal {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 75px 20px 30px;
          text-align: center;
          color: #70451f;
          background: #fdf4e5;
        }

        .couple-reveal .couple-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
        }

        .couple-reveal .couple-bg-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: rgba(255, 247, 230, 0.10);
          pointer-events: none;
        }

        /* Mantra remains at the top */
        .couple-reveal .couple-mantra {
          position: absolute;
          top: 24px;
          left: 0;
          right: 0;
          z-index: 5;
          width: 100%;
          margin: 0;
          padding: 0 12px;
          text-align: center;
          font-family: "Noto Serif Devanagari", "Mangal", serif;
          font-size: clamp(17px, 4.5vw, 23px);
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.2px;
          color: #854d25;
          opacity: 0;
          transform: translateY(-12px);
          transition:
            opacity 850ms ease,
            transform 1000ms cubic-bezier(.2,.7,.2,1);
          will-change: transform, opacity;
        }

        /* Main content */
        .couple-reveal .couple-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 650px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(25px);
        }

        .couple-reveal .couple-intro,
        .couple-reveal .couple-name,
        .couple-reveal .couple-family,
        .couple-reveal .couple-with {
          opacity: 0;
          will-change: transform, opacity;
          transition:
            opacity 850ms ease,
            transform 1000ms cubic-bezier(.2,.7,.2,1);
        }

        .couple-reveal .couple-intro {
          transform: translateY(22px);
          margin: 5px 0 14px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(15px, 3.2vw, 19px);
          font-style: italic;
          line-height: 1.4;
          color: #70451f;
          font-weight: 700;
        }

        /* Same font for both names */
        .couple-reveal .couple-name {
          margin: 0;
          font-family: "Italianno", "Cormorant Garamond", cursive;
          font-size: clamp(64px, 13vw, 88px);
          line-height: 0.95;
          font-weight: 400;
          font-style: normal;
          color: #a66d27;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
          transform: translateY(20px);
        }

        .couple-reveal .couple-family {
          transform: translateX(35px);
          margin: 8px 0 13px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(13px, 2.8vw, 16px);
          line-height: 1.4;
          color: #68451f;
          font-weight: 700;
        }

        .couple-reveal .couple-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 0 0 8px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 24px;
          font-style: italic;
          color: #a67b3e;
          transform: translateY(18px);
          font-weight: 400;
        }

        .couple-reveal .couple-with::before,
        .couple-reveal .couple-with::after {
          content: "";
          width: clamp(35px, 12vw, 90px);
          height: 1px;
          flex-shrink: 0;
          background: #c09a5c;
          transform: scaleX(0);
          transition: transform 700ms ease 300ms;
        }

        .couple-reveal .couple-with.show::before,
        .couple-reveal .couple-with.show::after {
          transform: scaleX(1);
        }

        .couple-reveal .show {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        /* Dark scroll text and arrow */
        .couple-reveal .couple-scroll-indicator {
          position: absolute;
          bottom: 22px;
          left: 50%;
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          transform: translateX(-50%);
          color: #3b2418;
          opacity: 0;
          transition: opacity 800ms ease;
          pointer-events: none;
        }

        .couple-reveal .couple-scroll-indicator.show {
          opacity: 1;
        }

        .couple-reveal .couple-scroll-text {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3b2418;
        }

        .couple-reveal .couple-scroll-arrow {
          width: 18px;
          height: 18px;
          border-right: 2px solid #3b2418;
          border-bottom: 2px solid #3b2418;
          transform: rotate(45deg);
          animation: coupleScrollDown 1.5s ease-in-out infinite;
        }

        @keyframes coupleScrollDown {
          0%, 100% {
            transform: translateY(-3px) rotate(45deg);
            opacity: 0.5;
          }

          50% {
            transform: translateY(4px) rotate(45deg);
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .couple-reveal {
            padding: 82px 18px 24px;
          }

          .couple-reveal .couple-mantra {
            top: 22px;
            font-size: 19px;
          }

          .couple-reveal .couple-intro {
            font-size: 14px;
            margin: 4px 0 12px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(60px, 15vw, 76px);
          }

          .couple-reveal .couple-family {
            font-size: 12px;
            line-height: 1.4;
            margin: 6px 0 10px;
          }

          .couple-reveal .couple-with {
            font-size: 21px;
            margin-bottom: 6px;
            gap: 12px;
          }

          .couple-reveal .couple-scroll-indicator {
            bottom: 14px;
          }

          .couple-reveal .couple-scroll-text {
            font-size: 10px;
          }

          .couple-reveal .couple-scroll-arrow {
            width: 15px;
            height: 15px;
          }
        }

        @media (max-height: 740px) {
          .couple-reveal {
            padding-top: 70px;
            padding-bottom: 12px;
          }

          .couple-reveal .couple-mantra {
            top: 16px;
            font-size: 18px;
          }

          .couple-reveal .couple-intro {
            font-size: 13px;
            margin: 2px 0 8px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(54px, 10vh, 70px);
          }

          .couple-reveal .couple-family {
            font-size: 11px;
            margin: 4px 0 7px;
            line-height: 1.3;
          }

          .couple-reveal .couple-with {
            font-size: 19px;
            margin-bottom: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .couple-reveal .couple-mantra,
          .couple-reveal .couple-intro,
          .couple-reveal .couple-name,
          .couple-reveal .couple-family,
          .couple-reveal .couple-with,
          .couple-reveal .couple-with::before,
          .couple-reveal .couple-with::after,
          .couple-reveal .couple-scroll-indicator,
          .couple-reveal .couple-scroll-arrow {
            transition: none;
            animation: none;
          }
        }
      `}</style>

      <section className="couple-reveal">
        <img
          className="couple-bg"
          src={coupleBackground}
          alt=""
          aria-hidden="true"
        />

        <div className="couple-bg-shade" />

        {/* Mantra stays at the top */}
        <p className={`couple-mantra ${step >= 1 ? "show" : ""}`}>
          श्री महावीराय नमः
        </p>

        <div className="couple-content">
          <p className={`couple-intro ${step >= 2 ? "show" : ""}`}>
            With love, we warmly invite you
            <br />
            to the engagement celebration of
          </p>

          <h1 className={`couple-name ${step >= 3 ? "show" : ""}`}>
            Selvi
          </h1>

          <p className={`couple-family ${step >= 4 ? "show" : ""}`}>
            Granddaughter of Shri Uttamrajji  &amp; Smt. Rashmiji Kataria
            <br />
            Daughter of Ashish  &amp; Smt. Poonam Kataria
          </p>

          <div className={`couple-with ${step >= 5 ? "show" : ""}`}>
            with
          </div>

          <h1 className={`couple-name ${step >= 6 ? "show" : ""}`}>
            Tanay
          </h1>

          <p className={`couple-family ${step >= 7 ? "show" : ""}`}>
            Grandson of Late Shri Suresh Ji &amp; Smt. Tara Devi Nabariya
            <br />
            Son of Shri Mahavirji &amp; Smt. Namitaji Nabariya
          </p>
        </div>

        {/* Animated scroll-down indicator */}
        <div
          className={`couple-scroll-indicator ${step >= 7 ? "show" : ""}`}
          aria-hidden="true"
        >
          <span className="couple-scroll-text">Scroll</span>
          <span className="couple-scroll-arrow" />
        </div>
      </section>
    </>
  );
}
