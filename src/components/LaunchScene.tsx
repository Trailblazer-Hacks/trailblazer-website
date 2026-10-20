import { Rocket, Spark } from './Rocket';

export function LaunchScene() {
  return (
    <div
      className="launch-scene"
      data-scene
      aria-label="Pixel rocket lifting off a dimensional launch pad"
      role="img"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="scene-coordinate">
        LAUNCH SITE / SUNNYVALE<span>ILLUSTRATED FLIGHT PATH</span>
      </span>
      <Spark className="spark spark-one" />
      <Spark className="spark spark-two" />
      <Spark className="spark spark-three" />
      <div className="scene-depth" data-depth>
        <div className="launch-pad">
          <div className="pad-side" />
          <div className="pad-top">
            <span>TH</span>
          </div>
          <div className="pad-ring" />
        </div>
        <div className="flight-path" />
        <div className="rocket-float">
          <Rocket className="hero-rocket" />
        </div>
        <div className="floating-chip chip-one">
          IDEA_001<span>READY FOR LIFTOFF ↗</span>
        </div>
        <div className="floating-chip chip-two">
          <span className="chip-cross">+</span> BUILT BY YOU.
        </div>
        <div className="space-rock rock-one" />
        <div className="space-rock rock-two" />
      </div>
      <span className="scene-caption">
        NOT ROCKET SCIENCE.
        <br />
        JUST YOUR NEXT BIG IDEA.
      </span>
    </div>
  );
}
