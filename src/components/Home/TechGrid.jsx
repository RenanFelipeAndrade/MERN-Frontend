import { Card } from "../Card/Card";
export const TechGrid = () => {
  return (
    <div>
      <section className="columns">
        <div className="column">
          <Card title={"MongoDb"}>
            <p className="card-content">
              MongoDb is a non-relational database that consists in a collection
              of documents. Each document in a collection holds a data set, that
              can be numbers, objects, text/strings and so on. It was developed
              for ease of application development and scaling.
            </p>
          </Card>
        </div>
        <div className="column">
          <Card title={"ExpressJs"}>
            <p className="card-content">
              ExpressJs is a simple and lightweight web framework for the web.
              It allows the creation of web applictions and APIs by providing a
              minimal set of tools and middleware without sacrificing the
              performance.
            </p>
          </Card>
        </div>
      </section>
      <section className="columns">
        <div className="column">
          <Card title={"ReactJs"}>
            <p className="card-content">
              React is a Javascript library used to create UI components. Each
              component is reactive, which means that they will update according
              to an event that triggers a re-render. Also, beign part of the
              Javascript ecosystem, allows React to have tons of additional
              features via community libraries.
            </p>
          </Card>
        </div>
        <div className="column">
          <Card title={"NodeJs"}>
            <p className="card-content">
              NodeJs is a Javascript runtime enviroment. It allows to run
              Javascript code everywhere, not restricted to the web browser. It
              is designed to build scalable network application and is the heart
              of ReactJs and ExpressJs used in this project.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
