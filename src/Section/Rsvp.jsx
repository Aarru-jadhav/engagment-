
import React, { useEffect, useRef, useState } from "react";
import bg1 from "../assets/image/bg copy.png";

export default function Rsvp() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`rsvp-section ${visible ? "rsvp-visible" : ""}`}
      style={{ "--rsvp-bg": `url(${bg1})` }}
    >
      <div className="rsvp-content">
        {/* Both family names at the top */}
        <p className="rsvp-family rsvp-family-top">
          Kataria Family <span className="family-divider">|</span> Nabaria Family
        </p>

        {/* Central wreath message */}
        <div className="rsvp-wreath-content">
          <div className="rsvp-message">
           

            <h2>
              <span>Two Families</span>
              <span>One Beautiful</span>
              <span>Beginning</span>
            </h2>

           
          </div>
        </div>
      </div>

      <style>{`
        .rsvp-section {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          background-image: var(--rsvp-bg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          box-sizing: border-box;
        }

        .rsvp-content {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 100%;
          margin: 0 auto;
          padding: 0;
          box-sizing: border-box;
        }

        /* Both family names in one line at the top */
        .rsvp-family-top {
          position: absolute;
          top: 36%;
          left: 50%;
          z-index: 3;
          width: 100%;
          margin: 0;
          padding: 0 8px;
          box-sizing: border-box;
          color: #85452f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(16px, 4.2vw, 23px);
          font-style: italic;
          font-weight: 400;
          line-height: 1.3;
          text-align: center;
          white-space: nowrap;
          opacity: 0;
          transform: translate(-50%, 8px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .family-divider {
          display: inline-block;
          margin: 0 5px;
          font-style: normal;
          color: #a77a55;
        }

        .rsvp-visible .rsvp-family-top {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        .rsvp-wreath-content {
          position: absolute;
          top: 47%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(66vw, 300px);
          aspect-ratio: 1 / 1;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
          pointer-events: none;
        }

        .rsvp-message {
          width: 78%;
          text-align: center;
          color: #713c2b;
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 0.9s ease 0.2s,
            transform 0.9s ease 0.2s;
        }

        .rsvp-visible .rsvp-message {
          opacity: 1;
          transform: translateY(0);
        }

        .rsvp-kicker {
          margin: 0 0 10px;
          font-family: Arial, sans-serif;
          font-size: clamp(7px, 1.7vw, 9px);
          letter-spacing: 2px;
          line-height: 1.5;
          font-weight: 400;
        }

        .rsvp-message h2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(19px, 4.7vw, 25px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.14;
        }

        .rsvp-message h2 span {
          display: block;
          white-space: nowrap;
        }

        .rsvp-subtitle {
          margin: 9px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(12px, 3vw, 15px);
          font-style: italic;
          line-height: 1.3;
        }

        .rsvp-footer {
          margin: 9px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(8px, 2vw, 10px);
          line-height: 1.35;
          white-space: nowrap;
        }

        @media (min-width: 600px) {
          .rsvp-wreath-content {
            width: 300px;
          }

          .rsvp-family-top {
            font-size: 23px;
          }
        }

        @media (max-width: 380px) {
          .rsvp-family-top {
            font-size: 15px;
          }

          .family-divider {
            margin: 0 3px;
          }

          .rsvp-wreath-content {
            width: 68vw;
          }

          .rsvp-message {
            width: 80%;
          }

          .rsvp-kicker {
            letter-spacing: 1.4px;
          }

          .rsvp-message h2 {
            font-size: 18px;
          }

          .rsvp-footer {
            font-size: 7.5px;
          }
        }

        @media (max-height: 700px) {
          .rsvp-section {
            min-height: 560px;
          }

          .rsvp-wreath-content {
            width: min(62vw, 260px);
          }

          .rsvp-kicker {
            margin-bottom: 6px;
          }

          .rsvp-subtitle {
            margin-top: 6px;
          }

          .rsvp-footer {
            margin-top: 6px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rsvp-family-top,
          .rsvp-message {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
