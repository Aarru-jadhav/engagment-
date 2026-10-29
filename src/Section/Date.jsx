
import React, { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

import bg2 from "../assets/image/bg2.jpg";

export default function DateSection() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  // Start animation when the section enters the viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [started]);

  // Reveal items one by one with a 1-second gap
  useEffect(() => {
    if (!started) return;

    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 1100),
      setTimeout(() => setStep(3), 2100),
      setTimeout(() => setStep(4), 3100),
      setTimeout(() => setStep(5), 4100),
      setTimeout(() => setStep(6), 5100),
      setTimeout(() => setStep(7), 6100),
    ];

    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <>
      <style>{`
        .date-section,
        .date-section * {
          box-sizing: border-box;
        }

        .date-section {
          position: relative;
          isolation: isolate;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          padding: clamp(24px, 5vh, 48px) 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #fdf8ed;
          color: #70452b;
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
        }

        /* Responsive background */
        .date-background {
          position: absolute;
          z-index: -2;
          inset: 0;
          background-image: url("${bg2}");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .date-shade {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: rgba(255, 247, 230, 0.16);
          pointer-events: none;
        }

        /* Main content */
        .date-content {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(12px);
        }

        /* Reveal animation */
        .date-reveal {
          opacity: 0;
          visibility: hidden;
          transform: translateY(18px);
          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(.2, .7, .2, 1),
            visibility 0s linear 800ms;
          will-change: opacity, transform;
        }

        .date-reveal.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transition:
            opacity 800ms ease,
            transform 800ms cubic-bezier(.2, .7, .2, 1),
            visibility 0s;
        }

        /* Golden decorative line */
        .date-gold-line {
          width: 82px;
          max-width: 35%;
          height: 1px;
          flex-shrink: 0;
          margin: 0 auto 16px;
          background: linear-gradient(
            90deg,
            transparent,
            #a5773e,
            #d8b879,
            #a5773e,
            transparent
          );
          transform: scaleX(0);
          transform-origin: center;
          transition:
            opacity 800ms ease,
            transform 800ms ease,
            visibility 0s linear 800ms;
        }

        .date-gold-line.show {
          opacity: 1;
          visibility: visible;
          transform: scaleX(1);
          transition:
            opacity 800ms ease,
            transform 800ms ease,
            visibility 0s;
        }

        /* Date details */
        .date-details {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(14px, 2.5vh, 22px);
          padding: 5px 0 0;
        }

        .date-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 0;
        }

        .date-icon {
          width: 22px;
          height: 22px;
          margin-bottom: 6px;
          color: #a5773e;
          stroke-width: 1.8;
          flex-shrink: 0;
        }

        .date-value {
          max-width: 100%;
          font-size: clamp(13px, 2.5vw, 16px);
          line-height: 1.5;
          font-weight: bold;
          margin: 0;
          overflow-wrap: anywhere;
        }

        .date-venue-name {
          font-size: clamp(13px, 2.5vw, 15px);
          line-height: 1.5;
          margin-top: 3px;
        }

        .date-lunch {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: clamp(14px, 3vw, 17px);
          font-style: italic;
          line-height: 1.5;
        }

        .date-lunch-icon {
          width: 19px;
          height: 19px;
          color: #946b3d;
          flex-shrink: 0;
        }

        /* Location button */
        .date-location-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          gap: 7px;
          width: fit-content;
          max-width: 100%;
          min-height: 40px;
          margin: 18px auto 0;
          padding: 9px 16px;
          background: #5b3928;
          color: #fffaf1;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: clamp(9px, 2vw, 11px);
          font-weight: 600;
          letter-spacing: 0.6px;
          line-height: 1.4;
          text-align: center;
          border: 1px solid #8b674b;
          border-radius: 22px;
          cursor: pointer;
          transition:
            background 250ms ease,
            border-color 250ms ease,
            opacity 800ms ease,
            transform 800ms ease,
            visibility 0s linear 800ms;
        }

        .date-location-btn.show {
          transition:
            background 250ms ease,
            border-color 250ms ease,
            opacity 800ms ease,
            transform 800ms ease,
            visibility 0s;
        }

        .date-location-btn:hover {
          background: #704832;
          border-color: #a5773e;
        }

        .date-location-btn:focus-visible {
          outline: 2px solid #a5773e;
          outline-offset: 4px;
        }

        .date-location-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* Closing text */
        .date-footer {
          width: 100%;
          max-width: 320px;
          margin: 12px auto 0;
          font-size: clamp(11px, 2.5vw, 13px);
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        /* Small mobile phones */
        @media (max-width: 380px) {
          .date-section {
            padding: 24px 14px;
          }

          .date-content {
            max-width: 100%;
            transform: translateY(8px);
          }

          .date-gold-line {
            margin-bottom: 12px;
          }

          .date-details {
            gap: 14px;
          }

          .date-icon {
            width: 20px;
            height: 20px;
          }

          .date-value {
            font-size: 13px;
          }

          .date-venue-name {
            font-size: 13px;
          }

          .date-location-btn {
            min-height: 38px;
            margin-top: 14px;
            padding: 8px 13px;
            font-size: 9px;
          }

          .date-footer {
            max-width: 280px;
            margin-top: 10px;
            font-size: 11px;
          }
        }

        /* Tablets */
        @media (min-width: 600px) {
          .date-section {
            padding: 40px 28px;
          }

          .date-content {
            max-width: 460px;
            transform: translateY(12px);
          }

          .date-details {
            gap: 22px;
          }

          .date-icon {
            width: 24px;
            height: 24px;
          }

          .date-location-btn {
            margin-top: 22px;
            padding: 10px 20px;
          }
        }

        /* Desktop and large screens */
        @media (min-width: 1024px) {
          .date-section {
            padding: 48px 32px;
          }

          .date-content {
            max-width: 480px;
          }

          .date-details {
            gap: 20px;
          }

          .date-value {
            font-size: 16px;
          }

          .date-venue-name {
            font-size: 15px;
          }

          .date-footer {
            max-width: 340px;
            font-size: 13px;
          }
        }

        /* Short screens: reduce spacing without clipping */
        @media (max-height: 700px) {
          .date-section {
            padding-top: 18px;
            padding-bottom: 18px;
          }

          .date-content {
            transform: translateY(0);
          }

          .date-details {
            gap: 10px;
          }

          .date-gold-line {
            margin-bottom: 9px;
          }

          .date-icon {
            width: 19px;
            height: 19px;
            margin-bottom: 3px;
          }

          .date-location-btn {
            min-height: 34px;
            margin-top: 10px;
            padding: 7px 13px;
          }

          .date-footer {
            margin-top: 7px;
            line-height: 1.4;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .date-reveal,
          .date-gold-line,
          .date-location-btn {
            transition: none !important;
            will-change: auto;
          }
        }
      `}</style>

      <section className="date-section" ref={sectionRef}>
        <div className="date-background" />
        <div className="date-shade" />

        <div className="date-content">
          {/* 1. Golden line */}
          <div
            className={`date-gold-line date-reveal ${
              step >= 1 ? "show" : ""
            }`}
          />

          <div className="date-details">
            {/* 2. Date */}
            <div
              className={`date-item date-reveal ${
                step >= 2 ? "show" : ""
              }`}
            >
              <CalendarDays className="date-icon" />

              <p className="date-value">
                Sunday, 1 November 2026
              </p>
            </div>

            {/* 3. Time */}
            <div
              className={`date-item date-reveal ${
                step >= 3 ? "show" : ""
              }`}
            >
              <Clock className="date-icon" />

              <p className="date-value">
                12:15 PM Onwards
              </p>
            </div>

            {/* 4. Venue */}
            <div
              className={`date-item date-reveal ${
                step >= 4 ? "show" : ""
              }`}
            >
              <MapPin className="date-icon" />

              <p className="date-value">
                Bhandari Resort
              </p>

              <div className="date-venue-name">
                Onyx Hall
              </div>
            </div>

            {/* 5. Lunch */}
            <div
              className={`date-item date-reveal ${
                step >= 5 ? "show" : ""
              }`}
            >
              <div className="date-lunch">
                <UtensilsCrossed className="date-lunch-icon" />
                <span>Followed by Lunch</span>
              </div>
            </div>
          </div>

          {/* 6. Location button */}
          <a
            className={`date-location-btn date-reveal ${
              step >= 6 ? "show" : ""
            }`}
            href="https://www.google.com/maps/search/?api=1&query=Bhandari+Resort+Onyx+Hall+Indore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Bhandari Resort Onyx Hall on Google Maps"
          >
            <MapPin aria-hidden="true" />
            <span>VIEW VENUE LOCATION</span>
          </a>

          {/* 7. Footer */}
          <p
            className={`date-footer date-reveal ${
              step >= 7 ? "show" : ""
            }`}
          >
            Join us for lunch and celebrate
            <br />
            this special day with our families.
          </p>
        </div>
      </section>
    </>
  );
}
