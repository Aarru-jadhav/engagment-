
import React, { useEffect, useRef, useState } from "react";

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
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`rsvp-section ${visible ? "rsvp-visible" : ""}`}
      >
        <div className="rsvp-decoration decoration-top" />
        <div className="rsvp-decoration decoration-bottom" />

        <div className="rsvp-content">
          <p className="rsvp-eyebrow">A CELEBRATION OF LOVE</p>

          <div className="rsvp-divider">
            <span />
            <span className="divider-diamond">◆</span>
            <span />
          </div>

          <p className="rsvp-family">
            Kataria Family
            <span className="family-divider"> & </span>
            Nabaria Family
          </p>

          <div className="rsvp-message">
            <h2>
              <span>Two Families</span>
              <span className="gold-text">One Beautiful</span>
              <span>Beginning</span>
            </h2>
          </div>

          <div className="rsvp-bottom-divider">
            <span />
            <span className="divider-diamond">◆</span>
            <span />
          </div>

          <p className="rsvp-closing">
            Together, a new story begins
          </p>
        </div>
      </section>

      <style>{`
        .rsvp-section,
        .rsvp-section * {
          box-sizing: border-box;
        }

        
        .rsvp-section {
  position: relative;
  isolation: isolate;
  width: 100%;
  height: 80svh;
  min-height: 480px;
  padding: 35px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  color: #70452b;
  background: radial-gradient(
    ellipse at center,
    #fffaf0 0%,
    #f8edda 65%,
    #f2e2c9 100%
  );
}
        .rsvp-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          padding: 38px 16px;
          border-top: 1px solid rgba(165, 119, 62, 0.45);
          border-bottom: 1px solid rgba(165, 119, 62, 0.45);
        }

        .rsvp-decoration {
          position: absolute;
          z-index: 0;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(165, 119, 62, 0.17);
          border-radius: 50%;
          pointer-events: none;
        }

        .decoration-top {
          top: -100px;
          right: -65px;
        }

        .decoration-bottom {
          bottom: -100px;
          left: -65px;
        }

        .rsvp-eyebrow {
          margin: 0 0 18px;
          font-family: Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          line-height: 1.6;
          color: #946b3d;
        }

        .rsvp-divider,
        .rsvp-bottom-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .rsvp-divider span:not(.divider-diamond),
        .rsvp-bottom-divider span:not(.divider-diamond) {
          width: 45px;
          height: 1px;
          background: #b38b55;
        }

        .divider-diamond {
          font-size: 9px;
          color: #a5773e;
        }

        .rsvp-family {
          margin: 23px 0 28px;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(19px, 4.5vw, 25px);
          font-style: italic;
          font-weight: 500;
          line-height: 1.5;
          color: #75462f;
        }

        .family-divider {
          color: #b18a55;
          padding: 0 4px;
        }

        .rsvp-message {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 900ms ease,
            transform 900ms cubic-bezier(.2,.7,.2,1);
        }

        .rsvp-visible .rsvp-message {
          opacity: 1;
          transform: translateY(0);
        }

        .rsvp-message h2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          margin: 0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(35px, 8vw, 51px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.08;
          color: #75462f;
        }

        .rsvp-message h2 span {
          display: block;
        }

        .rsvp-message h2 .gold-text {
          color: #a5773e;
        }

        .rsvp-bottom-divider {
          margin-top: 28px;
        }

        .rsvp-closing {
          margin: 18px 0 0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(16px, 4vw, 20px);
          font-style: italic;
          color: #805a40;
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 800ms ease 250ms,
            transform 800ms ease 250ms;
        }

        .rsvp-visible .rsvp-closing {
          opacity: 1;
          transform: translateY(0);
        }

        .rsvp-eyebrow,
        .rsvp-divider,
        .rsvp-family,
        .rsvp-bottom-divider {
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .rsvp-visible .rsvp-eyebrow,
        .rsvp-visible .rsvp-divider,
        .rsvp-visible .rsvp-family,
        .rsvp-visible .rsvp-bottom-divider {
          opacity: 1;
          transform: translateY(0);
        }

        .rsvp-visible .rsvp-divider {
          transition-delay: 100ms;
        }

        .rsvp-visible .rsvp-family {
          transition-delay: 180ms;
        }

        .rsvp-visible .rsvp-bottom-divider {
          transition-delay: 300ms;
        }

        @media (max-width: 380px) {
          .rsvp-section {
            padding: 40px 16px;
          }

          .rsvp-content {
            padding: 30px 8px;
          }

          .rsvp-eyebrow {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .rsvp-family {
            margin: 20px 0 25px;
            font-size: 19px;
          }

          .rsvp-message h2 {
            font-size: clamp(32px, 9vw, 38px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rsvp-section * {
            transition: none !important;
          }

          .rsvp-section .rsvp-eyebrow,
          .rsvp-section .rsvp-divider,
          .rsvp-section .rsvp-family,
          .rsvp-section .rsvp-message,
          .rsvp-section .rsvp-bottom-divider,
          .rsvp-section .rsvp-closing {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
