export default function PresentationVideo() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="m-16 mx-auto w-[90%] rounded-xl shadow-2xl xs:w-[60%] xs:rounded-3xl"
        src="assets/presentation.mp4"
        type="video/mp4"
      >
      </video>
    </div>
  );
}
