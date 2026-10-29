
import { useEffect, useState } from "react";
import coupleBackground from "../assets/image/bg.png";
import coupleLogo from "../assets/image/logos.png";



export default function Couple() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 1700),
      setTimeout(() => setStep(3), 2700),
      setTimeout(() => setStep(4), 3800),
      setTimeout(() => setStep(5), 4900),
      setTimeout(() => setStep(6), 5900),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="couple-reveal">
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
          padding: 28px 22px;
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
          display: block;
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

        .couple-reveal .couple-logo,
        .couple-reveal .couple-intro,
        .couple-reveal .couple-name,
        .couple-reveal .couple-family,
        .couple-reveal .couple-with {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .couple-reveal .show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Logo above the couple's names */
        .couple-reveal .couple-logo {
          display: block;
          width: clamp(70px, 18vw, 110px);
          max-height: 110px;
          height: auto;
          object-fit: contain;
          margin: 0 auto 14px;
        }

        .couple-reveal .couple-intro {
          margin: 8px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(13px, 2.5vw, 17px);
          font-style: italic;
          line-height: 1.55;
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
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
        }

        .couple-reveal .couple-family {
          margin: 12px 0 22px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(12px, 2.1vw, 16px);
          line-height: 1.65;
          color: #68451f;
        }

        .couple-reveal .couple-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 2px 0 14px;
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
        }

        @media (max-width: 480px) {
          .couple-reveal {
            padding: 22px 24px;
          }

          .couple-reveal .couple-logo {
            width: 70px;
            max-height: 75px;
            margin-bottom: 9px;
          }

          .couple-reveal .couple-intro {
            font-size: 12px;
            margin: 5px 0 14px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(43px, 12vw, 60px);
          }

          .couple-reveal .couple-family {
            font-size: 11px;
            line-height: 1.5;
            margin: 8px 0 15px;
          }

          .couple-reveal .couple-with {
            font-size: 19px;
            margin: 0 0 9px;
          }
        }

        @media (max-height: 740px) {
          .couple-reveal {
            padding-top: 16px;
            padding-bottom: 16px;
          }

          .couple-reveal .couple-logo {
            width: 65px;
            max-height: 65px;
            margin-bottom: 6px;
          }

          .couple-reveal .couple-intro {
            margin: 3px 0 9px;
          }

          .couple-reveal .couple-name {
            font-size: clamp(38px, 6.5vh, 54px);
          }

          .couple-reveal .couple-family {
            margin: 5px 0 9px;
            line-height: 1.4;
          }

          .couple-reveal .couple-with {
            margin-bottom: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .couple-reveal .couple-logo,
          .couple-reveal .couple-intro,
          .couple-reveal .couple-name,
          .couple-reveal .couple-family,
          .couple-reveal .couple-with {
            transition: none;
          }
        }
      `}</style>

      {/* Background image */}
      <img
        className="couple-bg"
        src={coupleBackground}
        alt=""
        aria-hidden="true"
      />

      {/* Light overlay */}
      <div className="couple-bg-shade" />

      {/* Couple details */}
      <div className="couple-content">
        {/* Logo */}
        <img
          src={coupleLogo}
          alt="Couple Logo"
          className={`couple-logo ${step >= 1 ? "show" : ""}`}
        />

        <p className={`couple-intro ${step >= 1 ? "show" : ""}`}>
          With love, we warmly invite you
          <br />
          to the engagement celebration of
        </p>

        <h1 className={`couple-name ${step >= 2 ? "show" : ""}`}>
          Tanay
        </h1>

        <p className={`couple-family ${step >= 3 ? "show" : ""}`}>
          Grandson of Late Shri Suresh Ji &amp; Smt. Tara Devi Nabariya
          <br />
          Son of Mahavirji Nanata Jain
        </p>

        <div className={`couple-with ${step >= 4 ? "show" : ""}`}>
          with
        </div>

        <h1 className={`couple-name ${step >= 5 ? "show" : ""}`}>
          Selin
        </h1>

        <p className={`couple-family ${step >= 6 ? "show" : ""}`}>
          Granddaughter of Shri Uttamraj &amp; Rashmi Kataria
          <br />
          Daughter of Mr. Ashish &amp; Poonam Kataria
        </p>
      </div>
    </section>
  );
}
