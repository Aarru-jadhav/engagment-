
import { useState, useRef, useEffect } from "react";
import { Music2, VolumeX } from "lucide-react";

import Couple from "./Section/Couple";
import DateSection from "./Section/Date";
import Rsvp from "./Section/Rsvp";

import gatePoster from "./assets/image/gate.png";
import gateVideo from "./assets/video/engagment-video-optimized.mp4";
import weddingAudio from "./assets/audio/audio.mp3";

const styles = `
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    scroll-behavior: auto;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .wedding-page {
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    overflow-x: clip;
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

  .gold-divider {
    width: 75px;
    height: 1px;
    margin-bottom: 16px;
    background: #d4af63;
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
    transition:
      background 0.3s ease,
      color 0.3s ease,
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
    color: #fff5df;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02),
      rgba(0, 0, 0, 0.12)
    );
  }

  .welcome-line {
    max-width: 100%;
    margin: 8px 0;
    opacity: 0;
    transform: translateY(18px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.75);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(20px, 4vw, 34px);
    font-weight: 400;
    color: #7B3F00;
  }

  .welcome-line.text-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .welcome-heading {
    max-width: 700px;
    font-size: clamp(18px, 5vw, 48px);
    line-height: 1.25;
  }

  /* Floating Music Button */

  .music-toggle {
    position: fixed;
    right: 20px;
    bottom: 22px;
    z-index: 99999;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d4af63;
    border-radius: 50%;
    background: rgba(54, 35, 22, 0.94);
    color: #f5d58b;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition:
      transform 0.25s ease,
      background 0.25s ease,
      color 0.25s ease;
  }

  .music-toggle:hover {
    transform: scale(1.08);
    background: #704832;
  }

  .music-toggle:focus-visible {
    outline: 2px solid #d4af63;
    outline-offset: 4px;
  }

  .music-toggle svg {
    width: 21px;
    height: 21px;
  }

  .music-toggle.music-playing svg {
    animation: music-pulse 1.5s ease-in-out infinite;
  }

  @keyframes music-pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
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

    .welcome-overlay {
      padding: 18px;
    }

    .welcome-heading {
      max-width: 330px;
    }

    .music-toggle {
      right: 14px;
      bottom: 16px;
      width: 44px;
      height: 44px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gate-poster,
    .welcome-line,
    .blob-btn,
    .music-toggle {
      transition-duration: 0.01ms;
    }

    .music-toggle.music-playing svg {
      animation: none;
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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const timersRef = useRef([]);
  const startedRef = useRef(false);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  // Turn music ON or OFF
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsMusicPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsMusicPlaying(true);
    } catch (error) {
      console.error("Wedding music playback failed:", error);
      setIsMusicPlaying(false);
    }
  };

  // Open the invitation and start music
  const handleOpen = async () => {
    if (isOpening || showContent) return;

    clearTimers();
    startedRef.current = false;
    setTextStep(0);

    const audio = audioRef.current;

    if (audio && audio.paused) {
      try {
        await audio.play();
        setIsMusicPlaying(true);
      } catch (error) {
        console.error("Wedding audio playback failed:", error);
        setIsMusicPlaying(false);
      }
    } else if (audio) {
      setIsMusicPlaying(true);
    }

    setIsOpening(true);
  };

  // Start opening video once it is ready
  const handleVideoReady = async () => {
    const video = videoRef.current;

    if (!video || startedRef.current) return;

    startedRef.current = true;

    try {
      video.currentTime = 0;
      video.muted = true;
      await video.play();
    } catch (error) {
      console.error("Video playback failed:", error);

      startedRef.current = false;
      setIsOpening(false);
      setTextStep(0);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      setIsMusicPlaying(false);
    }
  };

  // Show invitation content when video ends
  const handleVideoEnd = () => {
    clearTimers();
    setTextStep(3);

    timersRef.current.push(
      setTimeout(() => {
        setIsOpening(false);
        setShowContent(true);

        window.scrollTo({
          top: 0,
          behavior: "auto",
        });
      }, 2200)
    );
  };

  // Keep icon state in sync with the actual audio
  const handleAudioPlay = () => {
    setIsMusicPlaying(true);
  };

  const handleAudioPause = () => {
    setIsMusicPlaying(false);
  };

  return (
    <>
      <style>{styles}</style>

      <main className="wedding-page">
        <audio
          ref={audioRef}
          src={weddingAudio}
          preload="auto"
          loop
          onPlay={handleAudioPlay}
          onPause={handleAudioPause}
          onError={() => {
            console.error(
              "Wedding MP3 could not load. Check src/assets/audio/audio.mp3."
            );
            setIsMusicPlaying(false);
          }}
        />

        {/* Floating music ON/OFF button */}
        <button
          type="button"
          className={`music-toggle ${
            isMusicPlaying ? "music-playing" : ""
          }`}
          onClick={toggleMusic}
          aria-label={
            isMusicPlaying ? "Turn music off" : "Turn music on"
          }
          aria-pressed={isMusicPlaying}
          title={isMusicPlaying ? "Turn music off" : "Turn music on"}
        >
          {isMusicPlaying ? <Music2 /> : <VolumeX />}
        </button>

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
                  To The
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
                </button>
              </div>
            )}
          </section>
        ) : (
          <div className="wedding-content">
            <Couple />
            <DateSection />
            <Rsvp />
          </div>
        )}
      </main>
    </>
  );
}
