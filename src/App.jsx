
import { useState, useRef, useEffect } from "react";

import Couple from "./Section/Couple";
import DateSection from "./Section/Date";

import gatePoster from "./assets/image/gate.png";
import gateVideo from "./assets/video/engagment-video-optimized.mp4";
import Rsvp from "./Section/Rsvp";

const styles = `
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .wedding-page {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background: #fdfbf7;
  }

  .gate-screen {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100svh;
    min-height: 560px;
    overflow: hidden;
    isolation: isolate;
    background: #201811;
  }

  .gate-poster {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 1;
    opacity: 1;
    transition: opacity 0.45s ease;
  }

  .gate-poster.poster-hidden {
    opacity: 0;
    pointer-events: none;
  }

  .gate-video {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 2;
    opacity: 0;
    background: #201811;
  }

  .gate-video.video-visible {
    opacity: 1;
  }

  .gate-overlay {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 40px 20px 8vh;
    text-align: center;
    color: #fff5df;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02) 25%,
      rgba(0, 0, 0, 0.2) 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  .invitation-label {
    margin: 0 0 15px;
    color: #f2d69b;
    font-size: 14px;
    letter-spacing: 2px;
  }

  .gold-divider {
    width: 75px;
    height: 1px;
    margin-bottom: 16px;
    background: #d4af63;
  }

  .gate-subtitle {
    margin: 0 0 25px;
    color: #fff3dc;
    font-size: 15px;
    line-height: 1.7;
  }

  .blob-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 175px;
    min-height: 48px;
    padding: 13px 28px;
    border: 1px solid #e4c47e;
    border-radius: 50px;
    background: rgba(54, 35, 22, 0.85);
    color: #fff3d5;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease,
      transform 0.3s ease;
  }

  .blob-btn:hover {
    background: #d4af63;
    color: #332316;
    transform: translateY(-2px);
  }

  .blob-btn:focus-visible {
    outline: 2px solid #fff3d5;
    outline-offset: 4px;
  }

  .blob-btn__inner,
  .blob-btn__blobs {
    display: none;
  }

  .tap-note {
    margin: 15px 0 0;
    color: #f7e9ce;
    font-size: 12px;
    letter-spacing: 1px;
  }

  .welcome-overlay {
    position: absolute;
    inset: 0;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
    color: #fff1cf;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.04),
      rgba(0, 0, 0, 0.2)
    );
  }

  .welcome-line {
    max-width: 100%;
    margin: 8px 0;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.75);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(20px, 4vw, 34px);
    font-weight: 400;
  }

  .welcome-line.text-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .welcome-heading {
    max-width: 700px;
    font-size: clamp(25px, 5vw, 48px);
    line-height: 1.25;
  }

  @media (max-width: 600px) {
    .gate-screen {
      min-height: 100svh;
    }

    .gate-poster,
    .gate-video {
      object-position: center;
    }

    .gate-overlay {
      padding: 30px 18px 9vh;
    }

    .invitation-label {
      font-size: 12px;
    }

    .gate-subtitle {
      max-width: 290px;
      font-size: 13px;
    }

    .welcome-overlay {
      padding: 18px;
    }

    .welcome-heading {
      max-width: 330px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gate-poster,
    .welcome-line,
    .blob-btn {
      transition-duration: 0.01ms;
    }

    html {
      scroll-behavior: auto;
    }
  }
`;

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [textStep, setTextStep] = useState(0);

  const videoRef = useRef(null);
  const timersRef = useRef([]);
  const startedRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const handleOpen = () => {
    if (isOpening || showContent) return;

    clearTimers();
    startedRef.current = false;
    setTextStep(0);
    setIsOpening(true);
  };

  const handleVideoReady = async () => {
    const video = videoRef.current;

    if (!video || startedRef.current) return;

    startedRef.current = true;

    try {
      video.currentTime = 0;
      await video.play();

      timersRef.current.push(
        setTimeout(() => setTextStep(1), 500),
        setTimeout(() => setTextStep(2), 1300),
        setTimeout(() => setTextStep(3), 2100)
      );
    } catch (error) {
      console.error("Video playback failed:", error);
      startedRef.current = false;
      setIsOpening(false);
      setTextStep(0);
    }
  };

  const handleVideoEnd = () => {
    clearTimers();
    setIsOpening(false);
    setShowContent(true);
  };

  return (
    <>
      <style>{styles}</style>

      <main className="wedding-page">
        {!showContent ? (
          <section className="gate-screen">
            <img
              className={`gate-poster ${
                isOpening ? "poster-hidden" : ""
              }`}
              src={gatePoster}
              alt="Engagement entrance"
            />

           {isOpening && (
  <video
    ref={videoRef}
    className="gate-video video-visible"
    src={gateVideo}
    playsInline
    preload="auto"
    muted
    onLoadedData={handleVideoReady}
    onEnded={handleVideoEnd}
    onError={() => {
      console.error(
        "Opening video failed to load. Check the file path."
      );
    }}
  />
)}

            {isOpening && (
              <div className="welcome-overlay">
                <p
                  className={`welcome-line ${
                    textStep >= 1 ? "text-visible" : ""
                  }`}
                >
                  A Warm Welcome
                </p>

                <p
                  className={`welcome-line ${
                    textStep >= 2 ? "text-visible" : ""
                  }`}
                >
                  to Our
                </p>

                <h2
                  className={`welcome-line welcome-heading ${
                    textStep >= 3 ? "text-visible" : ""
                  }`}
                >
                  Engagement Celebration
                </h2>
              </div>
            )}

            {!isOpening && (
              <div className="gate-overlay">
                
                <div className="gold-divider" />

                

                <button
                  type="button"
                  className="blob-btn open-button"
                  onClick={handleOpen}
                >
                  TAP TO OPEN

                  <span className="blob-btn__inner">
                    <span className="blob-btn__blobs">
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                      <span className="blob-btn__blob" />
                    </span>
                  </span>
                </button>

                
              </div>
            )}
          </section>
        ) : (
          <>
            <Couple />
            <DateSection />
            <Rsvp/>
          </>
        )}
      </main>
    </>
  );
}
