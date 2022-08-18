export const LoadingScreen = () => {
  return (
    <div className="hero is-fullheight is-justify-content-center is-align-items-center px-6">
      <span className="title is-4">Loading...</span>
      <progress className="progress is-primary" max="100">
        15%
      </progress>
    </div>
  );
};
