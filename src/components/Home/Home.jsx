import { Navbar } from "../Navbar/Navbar";
import { TechGrid } from "./TechGrid";

export const Home = () => {
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
};
