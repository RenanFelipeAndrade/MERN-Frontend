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
            zIndex: 40,
            width: "100%",
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
