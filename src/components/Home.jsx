import Navbar from "./Navbar";
import TechGrid from "./TechGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="title has-text-centered mt-4">
          A simple app using MongoDb, ReactJs, ExpressJs and Node, a.k.a MERN
          stack
        </h3>
        <TechGrid />
      </div>
    </>
  );
}
