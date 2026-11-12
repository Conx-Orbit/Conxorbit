import { useEffect, useRef, useState } from "react";
import Reveal from "../common/Reveal";
import styles from "./SolutionDemo.module.css";

export default function SolutionDemo({ content, fallbackPoster }) {
  const title = "Product demo";
  const videoSrc = content?.video?.url || "";
  const posterSrc = content?.poster?.url || "";
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const poster = posterSrc || fallbackPoster;
  // Natural width / height of the media, so portrait (mobile / reel) demos are not cropped.
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    setRatio(null);
    setPlaying(false);
  }, [videoSrc]);

  const applyRatio = (width, height) => {
    if (width > 0 && height > 0) setRatio(width / height);
  };

  const toggle = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  if (!content) return null;

  return (
    <Reveal as="section" id="demo" className={styles.section} aria-label={title}>
      <div className={`${styles.header} revealHead`}>
        <h2>{title}</h2>
      </div>
      <div className={styles.frame} style={ratio ? { "--ratio": ratio } : undefined}>
        {videoSrc ? (
          <video
            ref={videoRef}
            className={styles.video}
            poster={poster}
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => applyRatio(e.currentTarget.videoWidth, e.currentTarget.videoHeight)}
            onEnded={() => setPlaying(false)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : poster ? (
          <img
            className={styles.poster}
            src={poster}
            alt=""
            onLoad={(e) => applyRatio(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)}
          />
        ) : null}
        <button type="button" className={styles.play} onClick={toggle} aria-label={playing ? "Pause demo" : "Play demo"}>
          <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
          <span>{playing ? "Pause" : "Watch Demo"}</span>
        </button>
      </div>
    </Reveal>
  );
}
