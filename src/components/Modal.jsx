export default function Modal({ children, isVisible, setIsVisible, ...props }) {
  return (
    <>
      {isVisible && (
        <div className={`modal ${isVisible && "is-active"}`}>
          <div className="modal-background"></div>
          <div className="modal-content">{children}</div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setIsVisible(false)}
          />
        </div>
      )}
    </>
  );
}
