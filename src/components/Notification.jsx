export default function Notification({ children, show, variant }) {
  return (
    <>
      {show && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: 10,
            left: 0,
            right: 0,
            zIndex: 40,
          }}
        >
          <div
            className={`notification ${variant}`}
            style={{
              boxShadow: "0 0 5px 0 #111",
            }}
          >
            <span>{children}</span>
          </div>
        </div>
      )}
    </>
  );
}
