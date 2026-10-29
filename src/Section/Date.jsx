
import React, { useLayoutEffect, useRef } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg2 from "../assets/image/bg2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function DateSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(section.querySelectorAll(".date-reveal"), {
        autoAlpha: 1,
        y: 0,
        x: 0,
      });

      gsap.set(section.querySelector(".date-background"), {
        autoAlpha: 1,
        scale: 1,
      });

      gsap.set(section.querySelector(".date-gold-line"), {
        scaleX: 1,
      });

      return;
    }

    const ctx = gsap.context(() => {
      const background = section.querySelector(".date-background");
      const shade = section.querySelector(".date-shade");
      const heading = section.querySelector(".date-heading");
      const line = section.querySelector(".date-gold-line");
      const date = section.querySelector(".date-date");
      const time = section.querySelector(".date-time");
      const venue = section.querySelector(".date-venue-item");
      const lunch = section.querySelector(".date-lunch-item");
      const location = section.querySelector(".date-location-btn");
      const footer = section.querySelector(".date-footer");

      const reveals = [
        heading,
        line,
        date,
        time,
        venue,
        lunch,
        location,
        footer,
      ].filter(Boolean);

      gsap.set(background, {
        autoAlpha: 0,
        scale: 1.08,
      });

      gsap.set(shade, { autoAlpha: 0 });

      gsap.set(reveals, {
        autoAlpha: 0,
        y: 24,
      });

      gsap.set([date, venue, location].filter(Boolean), {
        x: -24,
      });

      gsap.set([time, lunch, footer].filter(Boolean), {
        x: 24,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "center",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 5.5}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(background, {
          autoAlpha: 1,
          scale: 1,
          duration: 1,
          ease: "none",
        })
        .to(
          shade,
          {
            autoAlpha: 1,
            duration: 0.4,
          },
          "<"
        )
        .to(heading, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        })
        .to(line, {
          scaleX: 1,
          duration: 0.4,
        })
        .to(date, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        })
        .to(time, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        })
        .to(venue, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        })
        .to(lunch, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        })
        .to(location, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        })
        .to(footer, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: 0.7,
        });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

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
          height: 100vh;
          height: 100svh;
          min-height: 540px;
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
          will-change: opacity, transform;
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
          max-height: 100%;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: translateY(-15px);
        }

        .date-reveal {
          will-change: transform, opacity;
        }

        .date-heading {
          width: 100%;
          font-size: clamp(25px, 7vw, 34px);
          line-height: 1.25;
          font-weight: normal;
          font-style: italic;
          margin: 0 0 13px;
          overflow-wrap: anywhere;
          position: relative;
          top: -15px;
        }

        .date-gold-line {
          width: 82px;
          height: 1px;
          margin: 0 auto 12px;
          background: linear-gradient(
            90deg,
            transparent,
            #a5773e,
            #d8b879,
            #a5773e,
            transparent
          );
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

        .date-label {
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: 2.5px;
          margin-bottom: 5px;
          font-weight: 600;
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
            border-color 250ms ease;
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

          .date-heading {
            font-size: 24px;
            margin-bottom: 10px;
            top: -35px;
            margin-bottom: 6px;
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
            transform: scale(.9) translateY(-25px);
          }

          .date-details {
            gap: 9px;
          }

          .date-heading {
            font-size: 23px;
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
          .date-section .date-reveal,
          .date-section .date-background,
          .date-section .date-shade,
          .date-section .date-gold-line {
            opacity: 1 !important;
            transform: none !important;
          }

          .date-location-btn {
            transition: none;
          }
        }
      `}</style>

      <section ref={sectionRef} className="date-section">
        <div className="date-background" />
        <div className="date-shade" />

        <div className="date-content">
          <h1 className="date-heading date-reveal">
            A Celebration of Togetherness
          </h1>

          <div className="date-gold-line date-reveal" />

          <div className="date-details">
            <div className="date-item date-reveal date-date">
              <CalendarDays className="date-icon" />
              <p className="date-value">
                Sunday, 1 November 2026
              </p>
            </div>

            <div className="date-item date-reveal date-time">
              <Clock className="date-icon" />
              <p className="date-value">12:15 PM Onwards</p>
            </div>

            <div className="date-item date-reveal date-venue-item">
              <MapPin className="date-icon" />
              <p className="date-value">Bhandari Resort</p>
              <div className="date-venue-name">Onyx Hall</div>
            </div>

            <div className="date-item date-reveal date-lunch-item">
              <div className="date-lunch">
                <UtensilsCrossed className="date-lunch-icon" />
                <span>Followed by Lunch</span>
              </div>
            </div>
          </div>

          <a
            className="date-location-btn date-reveal"
            href="https://www.google.com/maps/search/?api=1&query=Bhandari+Resort+Onyx+Hall+Indore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Bhandari Resort Onyx Hall on Google Maps"
          >
            <MapPin aria-hidden="true" />
            <span>VIEW VENUE LOCATION</span>
          </a>

          <p className="date-footer date-reveal">
            Join us for lunch and celebrate this special day
            with our families.
          </p>
        </div>
      </section>
    </>
  );
}
