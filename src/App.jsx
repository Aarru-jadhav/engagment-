
import { useState, useRef } from "react";
import "./App.css";
import Couple from "./Section/Couple";



import gatePoster from "./assets/image/gate.png";
import gateVideo from "./assets/video/engagment-video-optimized.mp4";

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [showCouple, setShowCouple] = useState(false);
  const [textStep, setTextStep] = useState(0);
  const videoRef = useRef(null);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);
    setTextStep(0);

    requestAnimationFrame(async () => {
      try {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          await videoRef.current.play();

          setTimeout(() => setTextStep(1), 500);
          setTimeout(() => setTextStep(2), 1300);
          setTimeout(() => setTextStep(3), 2100);
        }
      } catch (error) {
        console.error("Video playback failed:", error);
        setIsOpening(false);
        setTextStep(0);
      }
    });
  };

  const handleVideoEnd = () => {
    setIsOpening(false);
    setShowCouple(true);
  };

  return (
    <main className="wedding-page">
      {showCouple ? (
        <Couple />
      ) : (
        <section className="gate-screen">
          <img
            className={`gate-poster ${isOpening ? "poster-hidden" : ""}`}
            src={gatePoster}
            alt="Engagement entrance"
          />

          <video
            ref={videoRef}
            className={`gate-video ${isOpening ? "video-visible" : ""}`}
            src={gateVideo}
            playsInline
            preload="none"
            onEnded={handleVideoEnd}
          />

          {isOpening && (
            <div className="welcome-overlay">
              <p className={`welcome-line ${textStep >= 1 ? "text-visible" : ""}`}>
                A Warm Welcome
              </p>

              <p className={`welcome-line ${textStep >= 2 ? "text-visible" : ""}`}>
                to Our
              </p>

              <h2 className={`welcome-line welcome-heading ${textStep >= 3 ? "text-visible" : ""}`}>
                Engagement Celebration
              </h2>
            </div>
          )}

          {!isOpening && (
            <div className="gate-overlay">
              <p className="invitation-label">|| श्री जिनेन्द्राय नमः ||</p>
              <div className="gold-divider" />

             
              <p className="gate-subtitle">
                मंगलमय आयोजन में सादर आमंत्रण
              </p>

              <button
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

              <p className="tap-note">द्वार खोलने हेतु स्पर्श करें</p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
