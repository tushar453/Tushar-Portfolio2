import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlayss ${play ? "overlay--disabless" : ""}
    ${hasScroll ? "overlay--scrolledss" : ""}`}
    >
      <div
        className={`loaderss ${progress === 100 ? "loader--disappearss" : ""}`}
      />
      {progress === 100 && (
        <div className={`intross ${play ? "intro--disappearss" : ""}`}>
          <h1 className="logoss">
            WAWATMOS
            <div className="spinnerss">
              <div className="spinner__imagess" />
            </div>
          </h1>
          <p className="intro__scrollss">Scroll to begin the journey</p>
          <button
            className="exploress"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outross ${end ? "outro--appearss" : ""}`}>
        <p className="outro__textss">Wish you had a great flight with us...</p>
      </div>
    </div>
  );
};
