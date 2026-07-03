/* Preloader + top scroll-progress bar. Animated from page.js via GSAP. */
export default function Loader() {
  return (
    <>
      <div className="loader" id="loader">
        <span className="loader-label">Frontend Developer</span>
        <span className="loader-count">
          <span id="loaderCount">0</span>
          <span className="pc">%</span>
        </span>
        <span className="loader-bar" id="loaderBar" />
      </div>
      <div className="scroll-progress" id="scrollProgress" />
    </>
  );
}
