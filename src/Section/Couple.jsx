
import { useEffect, useState } from "react";
import coupleBackground from "../assets/image/bg.png";

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
          min-height: 100vh;
          min-height: 100svh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 22px;
          box-sizing: border-box;
          isolation: isolate;
          text-align: center;
          color: #70451f;
        }

        .couple-reveal *,
        .couple-reveal *::before,
        .couple-reveal *::after {
          box-sizing: border-box;
        }

        .couple-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .couple-bg-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: rgba(255, 247, 230, 0.10);
          pointer-events: none;
        }

        .couple-content {
          width: 100%;
          max-width: 650px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .couple-intro,
        .couple-name,
        .couple-family,
        .couple-with {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 1s ease, transform 1s ease;
        }

        .couple-reveal .show {
          opacity: 1;
          transform: translateY(0);
        }

        .couple-intro {
          margin: 8px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(13px, 2.5vw, 17px);
          font-style: italic;
          line-height: 1.55;
          color: #70451f;
        }

        .couple-name {
          margin: 0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(48px, 10vw, 76px);
          line-height: 1.05;
          font-weight: 400;
          font-style: italic;
          color: #a66d27;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
        }

        .couple-family {
          margin: 12px 0 22px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(12px, 2.1vw, 16px);
          line-height: 1.65;
          color: #68451f;
        }

        .couple-with {
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

        .couple-with::before,
        .couple-with::after {
          content: "";
          width: clamp(35px, 12vw, 90px);
          height: 1px;
          background: #c09a5c;
        }

        @media (max-width: 480px) {
          .couple-reveal {
            padding: 22px 24px;
          }

          .couple-intro {
            font-size: 12px;
            margin: 5px 0 14px;
          }

          .couple-name {
            font-size: clamp(43px, 12vw, 60px);
          }

          .couple-family {
            font-size: 11px;
            line-height: 1.5;
            margin: 8px 0 15px;
          }

          .couple-with {
            font-size: 19px;
            margin: 0 0 9px;
          }
        }

        @media (max-height: 740px) {
          .couple-reveal {
            padding-top: 16px;
            padding-bottom: 16px;
          }

          .couple-intro {
            margin: 3px 0 9px;
          }

          .couple-name {
            font-size: clamp(38px, 6.5vh, 54px);
          }

          .couple-family {
            margin: 5px 0 9px;
            line-height: 1.4;
          }

          .couple-with {
            margin-bottom: 5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .couple-intro,
          .couple-name,
          .couple-family,
          .couple-with {
            transition: none;
          }
        }
      `}</style>

      <img
        className="couple-bg"
        src={coupleBackground}
        alt=""
      />

      <div className="couple-bg-shade" />

      <div className="couple-content">
        <p className={`couple-intro ${step >= 1 ? "show" : ""}`}>
          With love, we warmly invite you
          <br />
          to the engagement celebration of
        </p>

        <h1 className={`couple-name ${step >= 2 ? "show" : ""}`}>
          Tanay
        </h1>

        <p className={`couple-family ${step >= 3 ? "show" : ""}`}>
          Son of Mr. Maheshraj Nanata Jain
          <br />
          Grandson of Shri Suresh Ji &amp; Smt. Tara Devi Nabariya
        </p>

        <div className={`couple-with ${step >= 4 ? "show" : ""}`}>
          with
        </div>

        <h1 className={`couple-name ${step >= 5 ? "show" : ""}`}>
          Salin
        </h1>

        <p className={`couple-family ${step >= 6 ? "show" : ""}`}>
          Granddaughter of Shri Uttamraj &amp; Smt. Rashmi Kataria
          <br />
          Daughter of Mr. Ashish &amp; Smt. Poonam Kataria
        </p>
      </div>
    </section>
  );
}
