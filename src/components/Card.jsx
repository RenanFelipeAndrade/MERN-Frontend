export default function Card({ title, children }, ...props) {
  return (
    <div className="card p-4">
      <h2 className="title is-4">{title}</h2>
      {/* <h2 className="title is-4">MongoDb</h2> */}
      {children}
    </div>
  );
}
