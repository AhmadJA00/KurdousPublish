import { useState, useRef, useEffect, useCallback } from "react";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdPlayArrow,
  MdPause,
  MdSlowMotionVideo,
  MdFullscreen,
} from "react-icons/md";
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { documetaries } from "../data/Documetaries.js";

const AnimailVideo = ({ isDarkMode }) => {
  const { id } = useParams(); // Retrieve the video ID from the URL
  const video = documetaries.find((video) => video.id === parseInt(id)); // Use the video ID to find the video

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);

  const videoRef = useRef(null); // Using useRef to control the video element
  const progressRef = useRef(null);

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const handleVolumeToggle = useCallback(() => {
    if (videoRef.current) {
      const newVolume = volume > 0 ? 0 : 0.5;
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
    }
  }, [volume]);

  const handleProgressUpdate = useCallback(() => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      setProgress((currentTime / duration) * 100);
    }
  }, []);

  const handleProgressClick = (e) => {
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const clickPercentage = clickPosition / rect.width;
      videoRef.current.currentTime =
        videoRef.current.duration * clickPercentage;
    }
  };

  const skipBackward = useCallback(() => {
    if (videoRef.current) videoRef.current.currentTime -= 5;
  }, []);

  const skipForward = useCallback(() => {
    if (videoRef.current) videoRef.current.currentTime += 5;
  }, []);

  const handleSpeedChange = (speed) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setShowSpeedOptions(false);
    }
  };

  const handleFullScreen = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen)
        videoRef.current.requestFullscreen();
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen px-4 md:px-8 w-full ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div
        className={`relative flex flex-col-reverse lg:p-16 lg:pb-8 rounded-3xl justify-center items-center mt-48 ${
          isDarkMode ? "bg-slate-900" : "shadow-2xl"
        }`}
      >
        {/* Background Elements */}
        <div className="absolute hidden lg:block -top-4 -left-8 w-64 h-64 rounded-full opacity-30 blur-3xl bg-dark-tertiary"></div>
        <div className="absolute hidden lg:block -bottom-4 -right-10 w-64 h-64 rounded-full opacity-30 blur-3xl bg-dark-tertiary"></div>

        {/* Video Player */}
        <div className="bg-black rounded-md overflow-hidden relative">
          <video
            ref={videoRef}
            src={video?.linkVideo} // Dynamically load video based on the ID
            className="rounded-md"
            width="1000px"
            onTimeUpdate={handleProgressUpdate}
          ></video>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4 px-2">
            <div
              className="video-timeline w-full h-2 cursor-pointer relative"
              onClick={handleProgressClick}
              ref={progressRef}
            >
              <div className="progress-area relative h-full bg-white/60">
                <div
                  className="progress-bar absolute left-0 h-full bg-[#1FB6D8] rounded"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <ul className="video-controls flex flex-row-reverse justify-between items-center mt-4">
              <li className="options flex flex-row-reverse items-center gap-2">
                <button
                  className="text-white text-2xl"
                  onClick={handleVolumeToggle}
                >
                  {volume > 0 ? <HiOutlineVolumeUp /> : <HiOutlineVolumeOff />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-24 accent-[#1FB6D8]"
                />
              </li>
              <li className="options flex items-center gap-3">
                <button className="text-white text-2xl" onClick={skipBackward}>
                  <MdSkipNext />
                </button>
                <button
                  className="text-white text-2xl"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <MdPause /> : <MdPlayArrow />}
                </button>
                <button className="text-white text-2xl" onClick={skipForward}>
                  <MdSkipPrevious />
                </button>
              </li>
              <li className="options flex items-center gap-2">
                <button
                  className="text-white text-2xl"
                  onClick={() => setShowSpeedOptions(!showSpeedOptions)}
                >
                  <MdSlowMotionVideo />
                </button>
                {showSpeedOptions && (
                  <ul className="absolute bottom-full right-2 bg-white text-dark-primary rounded-md shadow-lg p-2">
                    {[2, 1.5, 1, 0.75, 0.5].map((speed) => (
                      <li
                        key={speed}
                        className="hover:bg-dark-tertiary hover:text-white hover:pr-1"
                        onClick={() => handleSpeedChange(speed)}
                      >
                        {speed === 1 ? "Normal" : speed}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  className="text-white text-2xl"
                  onClick={handleFullScreen}
                >
                  <MdFullscreen />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimailVideo;
