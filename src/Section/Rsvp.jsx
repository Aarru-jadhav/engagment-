import React, { useEffect, useRef, useState } from "react";
import rsvpBg from "../assets/image/rsvp.jpg";

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
        style={{ "--rsvp-bg": `url("${rsvpBg}")` }}
      >
        <div className="rsvp-background" />
        <div className="rsvp-shade" />

        <div className="rsvp-decoration decoration-top" />
        <div className="rsvp-decoration decoration-bottom" />

        <div className="rsvp-content">

          {/* Family Names */}
          <p className="rsvp-family">
            Kataria Family
            <span className="family-divider"> &amp; </span>
            Nabariya Family
          </p>

          {/* Main Message */}
          <div className="rsvp-message">
            <h2>
              <span>Two Families</span>
              <span className="gold-text">One Beautiful</span>
              <span>Beginning</span>
            </h2>
          </div>

          {/* Bottom Decorative Divider */}
          <div className="rsvp-bottom-divider">
            <span />
            <span className="divider-diamond">◆</span>
            <span />
          </div>

          {/* Closing Text */}
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
  min-height: 100vh;
  min-height: 100svh;
  height: 100vh;
  height: 100svh;
  padding: 35px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
  color: #70452b;
  background: #f8edda;
}

        /* Background Image */

        .rsvp-background {
          position: absolute;
          z-index: -2;
          inset: 0;
          background-image: var(--rsvp-bg);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Light Overlay */

        .rsvp-shade {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: rgba(255, 248, 235, 0.38);
          pointer-events: none;
        }

        /* Main Content */

        .rsvp-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          padding: 38px 16px;
        }

        /* Decorative Circles */

        .rsvp-decoration {
          position: absolute;
          z-index: 0;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(165, 119, 62, 0.25);
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

        /* Family Names */

        .rsvp-family {
          margin: 0 0 28px;
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

        /* Main Message Animation */

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

        /* Main Heading */

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

        /* Bottom Divider */

        .rsvp-bottom-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }

        .rsvp-bottom-divider span:not(.divider-diamond) {
          width: 45px;
          height: 1px;
          background: #b38b55;
        }

        .divider-diamond {
          font-size: 9px;
          color: #a5773e;
        }

        /* Closing Text */

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

        /* Family & Divider Animation */

        .rsvp-family,
        .rsvp-bottom-divider {
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 700ms ease,
            transform 700ms ease;
        }

        .rsvp-visible .rsvp-family,
        .rsvp-visible .rsvp-bottom-divider {
          opacity: 1;
          transform: translateY(0);
        }

        .rsvp-visible .rsvp-bottom-divider {
          transition-delay: 300ms;
        }

        /* Mobile Responsive */

        @media (max-width: 380px) {
          .rsvp-section {
            padding: 40px 16px;
          }

          .rsvp-content {
            padding: 30px 8px;
          }

          .rsvp-family {
            margin: 0 0 25px;
            font-size: 19px;
          }

          .rsvp-message h2 {
            font-size: clamp(32px, 9vw, 38px);
          }
        }

        /* Reduced Motion */

        @media (prefers-reduced-motion: reduce) {
          .rsvp-section * {
            transition: none !important;
          }

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