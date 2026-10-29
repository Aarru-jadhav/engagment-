
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

  // Start animation when Date section enters the screen
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
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  // Reveal each element one by one, with a 1-second gap
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
          padding: 22px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #fdf8ed;
          color: #70452b;
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
        }

        .date-background {
          position: absolute;
          z-index: -2;
          inset: 0;
          background-image: url("${bg2}");
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }

        .date-shade {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: rgba(255, 247, 230, 0.16);
          pointer-events: none;
        }

        .date-content {
          position: relative;
          width: 100%;
          max-width: 370px;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-15px);
        }

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

        .date-gold-line {
          width: 82px;
          height: 1px;
          flex-shrink: 0;
          margin: 0 auto 12px;
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

        .date-details {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(12px, 2.3vh, 19px);
          padding: 5px 0 0;
        }

        .date-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .date-icon {
          width: 21px;
          height: 21px;
          margin-bottom: 5px;
          color: #a5773e;
          stroke-width: 1.8;
        }

        .date-value {
          font-size: 14px;
          line-height: 1.4;
          font-weight: bold;
          margin: 0;
        }

        .date-venue-name {
          font-size: 14px;
          line-height: 1.4;
          margin-top: 3px;
        }

        .date-lunch {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 16px;
          font-style: italic;
          line-height: 1.4;
        }

        .date-lunch-icon {
          width: 18px;
          height: 18px;
          color: #946b3d;
          flex-shrink: 0;
        }

        .date-location-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          gap: 5px;
          width: fit-content;
          max-width: 100%;
          min-height: 32px;
          margin: 10px auto 0;
          padding: 7px 13px;
          background: #5b3928;
          color: #fffaf1;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.6px;
          line-height: 1.3;
          text-align: center;
          border: 1px solid #8b674b;
          border-radius: 16px;
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

        .date-location-btn svg {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
        }

        .date-footer {
          max-width: 300px;
          margin: 5px auto 0;
          font-size: 11px;
          line-height: 1.4;
        }

        @media (max-width: 380px) {
          .date-section {
            padding: 18px 13px;
          }

          .date-details {
            gap: 12px;
          }

          .date-location-btn {
            margin: 8px auto 0;
            padding: 6px 12px;
            font-size: 8px;
          }

          .date-footer {
            font-size: 10px;
            margin-top: 4px;
            line-height: 1.3;
          }
        }

        @media (max-height: 650px) {
          .date-section {
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .date-content {
            transform: scale(.9) translateY(-15px);
          }

          .date-details {
            gap: 9px;
          }

          .date-location-btn {
            margin-top: 8px;
          }

          .date-footer {
            margin-top: 4px;
            line-height: 1.3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .date-reveal,
          .date-gold-line,
          .date-location-btn {
            transition: none !important;
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
