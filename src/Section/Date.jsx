
import React from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";
import bg2 from "../assets/image/bg2.jpg";

export default function DateSection() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .date-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          padding: 30px 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url(${bg2});
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          color: #70452b;
          text-align: center;
          font-family: Georgia, "Times New Roman", serif;
        }

        .date-content {
          position: relative;
          width: 100%;
          max-width: 370px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .date-heading {
          width: 100%;
          font-size: clamp(25px, 7vw, 34px);
          line-height: 1.3;
          font-weight: normal;
          font-style: italic;
          margin: 10px 0 16px;
          overflow-wrap: anywhere;
        }

        .date-subtitle {
          max-width: 310px;
          font-size: 13px;
          line-height: 1.7;
          font-style: italic;
          margin: 0 0 24px;
        }

        .date-details {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding: 10px 0 0;
        }

        .date-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .date-icon {
          width: 22px;
          height: 22px;
          margin-bottom: 8px;
          color: #a5773e;
          stroke-width: 2;
        }

        .date-label {
          font-family: Arial, sans-serif;
          font-size: 9px;
          letter-spacing: 2.5px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .date-value {
          font-size: 14px;
          line-height: 1.5;
          font-weight: bold;
          margin: 0;
        }

        .date-venue {
          font-size: 14px;
          line-height: 1.5;
          margin-top: 5px;
        }

        .date-lunch {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          font-size: 17px;
          font-style: italic;
          line-height: 1.5;
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
          gap: 6px;
          width: fit-content;
          max-width: 100%;
          min-height: 36px;
          margin-top: 20px;
          padding: 9px 15px;
          background: #704b30;
          color: #fffaf1;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          line-height: 1.4;
          border-radius: 8px;
          position: relative;
          z-index: 2;
        }

        .date-location-btn svg {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
        }

        .date-footer {
          max-width: 300px;
          margin: 16px auto 0;
          font-size: 12px;
          line-height: 1.7;
        }

        @media (max-width: 380px) {
          .date-section {
            padding: 24px 14px 28px;
            background-position: center top;
          }

          .date-heading {
            font-size: 25px;
            margin: 8px 0 14px;
          }

          .date-subtitle {
            font-size: 12px;
            margin-bottom: 18px;
          }

          .date-details {
            gap: 18px;
            padding-top: 6px;
          }

          .date-icon {
            width: 21px;
            height: 21px;
            margin-bottom: 7px;
          }

          .date-value {
            font-size: 14px;
          }

          .date-venue {
            font-size: 13px;
          }

          .date-lunch {
            font-size: 16px;
          }

          .date-location-btn {
            margin-top: 16px;
            padding: 8px 12px;
            font-size: 9px;
            min-height: 34px;
          }

          .date-footer {
            margin-top: 12px;
            font-size: 11px;
          }
        }

        @media (max-height: 720px) {
          .date-section {
            padding-top: 22px;
            padding-bottom: 24px;
          }

          .date-subtitle {
            margin-bottom: 16px;
          }

          .date-details {
            gap: 16px;
          }

          .date-icon {
            width: 20px;
            height: 20px;
            margin-bottom: 6px;
          }

          .date-label {
            margin-bottom: 6px;
          }

          .date-location-btn {
            margin-top: 15px;
          }

          .date-footer {
            margin-top: 10px;
          }
        }
      `}</style>

      <section className="date-section">
        <div className="date-content">
          <h1 className="date-heading">
            A Celebration of Togetherness
          </h1>

          <div className="date-details">
            <div className="date-item">
              <CalendarDays className="date-icon" />

              <div className="date-label">THE DATE</div>

              <p className="date-value">
                Sunday, 1 November 2026
              </p>
            </div>

            <div className="date-item">
              <Clock className="date-icon" />

              <div className="date-label">THE TIME</div>

              <p className="date-value">
                12:15 PM Onwards
              </p>
            </div>

            <div className="date-item">
              <MapPin className="date-icon" />

              <div className="date-label">THE VENUE</div>

              <p className="date-value">Bhandari Resort</p>

              <div className="date-venue">Onyx Hall</div>
            </div>

            <div className="date-item">
              <div className="date-lunch">
                <UtensilsCrossed className="date-lunch-icon" />
                <span>Followed by Lunch</span>
              </div>
            </div>
          </div>

          <a
            className="date-location-btn"
            href="https://www.google.com/maps/search/?api=1&query=Bhandari+Resort+Onyx+Hall+Indore"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin />
            <span>VIEW VENUE LOCATION</span>
          </a>

          <p className="date-footer">
            Join us for lunch and celebrate this special day
            with our families.
          </p>
        </div>
      </section>
    </>
  );
}
