
import { useEffect, useState } from "react";
import coupleBackground from "../assets/image/bg.png";
import coupleLogo from "../assets/image/logos.png";

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
        .couple-reveal {
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          min-height: 100svh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 22px;
          box-sizing: border-box;
          text-align: center;
          color: #70451f;
          background: #fdf4e5;
        }

        .couple-reveal *,
        .couple-reveal *::before,
        .couple-reveal *::after {
          box-sizing: border-box;
        }

        .couple-reveal .couple-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
        }

        .couple-reveal .couple-bg-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: rgba(255, 247, 230, 0.10);
          pointer-events: none;
        }

        .couple-reveal .couple-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 650px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Side reveal animations */
        .couple-reveal .couple-mantra,
        .couple-reveal .couple-logo,
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

        .couple-reveal .couple-mantra {
          transform: translateX(-55px);
        }

        .couple-reveal .couple-logo {
          transform: translateX(65px) scale(.82);
        }

        .couple-reveal .couple-intro {
          transform: translateY(22px);
        }

        .couple-reveal .couple-name {
          transform: translateX(-45px);
        }

        .couple-reveal .couple-family {
          transform: translateX(45px);
        }

        .couple-reveal .couple-with {
          transform: translateY(18px);
        }

        .couple-reveal .show {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* Mantra */
        .couple-reveal .couple-mantra {
          margin: 0 0 14px;
          font-family: "Noto Serif Devanagari", "Mangal", serif;
          font-size: clamp(20px, 4.5vw, 27px);
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: .5px;
          color: #854d25;
        }

        /* Larger logo */
        .couple-reveal .couple-logo {
          display: block;
          width: clamp(150px, 36vw, 215px);
          max-height: 210px;
          height: auto;
          object-fit: contain;
          margin: 0 auto 15px;
        }

        .couple-reveal .couple-intro {
          margin: 5px 0 16px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(13px, 2.5vw, 17px);
          font-style: italic;
          line-height: 1.5;
          color: #70451f;
        }

        .couple-reveal .couple-name {
          margin: 0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(48px, 10vw, 76px);
          line-height: 1.05;
          font-weight: 400;
          font-style: italic;
          color: #a66d27;
          text-shadow: 0 1px 1px rgba(255, 255, 255, .55);
        }

        .couple-reveal .couple-family {
          margin: 8px 0 14px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(12px, 2.1vw, 16px);
          line-height: 1.5;
          color: #68451f;
        }

        .couple-reveal .couple-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 0 0 9px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-style: italic;
          color: #a67b3e;
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

        @media (max-width: 480px) {
          .couple-reveal {
            padding: 18px 20px;
          }

          .couple-reveal .couple-mantra {
            font-size: 21px;
            margin-bottom: 10px;
          }

          .couple-reveal .couple-logo {
            width: clamp(140px, 38vw, 165px);
            max-height: 160px;
            margin-bottom: 10px;
          }

          .couple-reveal .couple-intro {
            font-size: 12px;
            margin: 3px 0 10px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(43px, 12vw, 60px);
          }

          .couple-reveal .couple-family {
            font-size: 11px;
            line-height: 1.4;
            margin: 5px 0 9px;
          }

          .couple-reveal .couple-with {
            font-size: 19px;
            margin-bottom: 6px;
          }
        }

        @media (max-height: 740px) {
          .couple-reveal {
            padding-top: 12px;
            padding-bottom: 12px;
          }

          .couple-reveal .couple-mantra {
            font-size: 19px;
            margin-bottom: 7px;
          }

          .couple-reveal .couple-logo {
            width: 125px;
            max-height: 120px;
            margin-bottom: 7px;
          }

          .couple-reveal .couple-intro {
            margin: 2px 0 7px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(38px, 6.5vh, 54px);
          }

          .couple-reveal .couple-family {
            margin: 4px 0 7px;
            line-height: 1.35;
          }

          .couple-reveal .couple-with {
            margin-bottom: 4px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .couple-reveal .couple-mantra,
          .couple-reveal .couple-logo,
          .couple-reveal .couple-intro,
          .couple-reveal .couple-name,
          .couple-reveal .couple-family,
          .couple-reveal .couple-with,
          .couple-reveal .couple-with::before,
          .couple-reveal .couple-with::after {
            transition: none;
            transform: none;
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

        <div className="couple-content">
          <p className={`couple-mantra ${step >= 1 ? "show" : ""}`}>
            श्री महावीर नमः
          </p>

          <img
            src={coupleLogo}
            alt="Couple Logo"
            className={`couple-logo ${step >= 1 ? "show" : ""}`}
          />

          <p className={`couple-intro ${step >= 2 ? "show" : ""}`}>
            With love, we warmly invite you
            <br />
            to the engagement celebration of
          </p>

          {/* Selvi first */}
          <h1 className={`couple-name ${step >= 3 ? "show" : ""}`}>
            Selvi
          </h1>

          <p className={`couple-family ${step >= 4 ? "show" : ""}`}>
            Granddaughter of Shri Uttamraj Rashmi Kataria
            <br />
            Daughter of Ashish Poonam Kataria
          </p>

          <div className={`couple-with ${step >= 5 ? "show" : ""}`}>
            with
          </div>

          {/* Tanay after Selvi */}
          <h1 className={`couple-name ${step >= 6 ? "show" : ""}`}>
            Tanay
          </h1>

          <p className={`couple-family ${step >= 7 ? "show" : ""}`}>
            Grandson of Late Shri Suresh Ji Tara Devi Nabariya
            <br />
            Son of Mahavirji Nanata Jain
          </p>
        </div>
      </section>
    </>
  );
}
