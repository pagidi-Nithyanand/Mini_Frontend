import PropTypes from "prop-types";
import {
  ChevronDoubleRight,
  ShieldShaded,
  ReceiptCutoff,
  Box,
  Images,
} from "react-bootstrap-icons";

const data = {
  title: `Welcome to SilentVox`,
  description: `  
    The ultimate platform where innovation, collaboration, and
    creativity unite. We're more than just a website;
    we're a community of content creators, viewers, and
    thinkers, dedicated to breaking down barriers and fostering a
    diverse and engaging online ecosystem.
  `,
  features: [
    {
      title: "Our Mission",
      icon: (
        <ReceiptCutoff
          className="d-inline-block align-middle text-primary"
          style={{ fontSize: "30px" }}
        ></ReceiptCutoff>
      ),
      description: `
        At SilentVox, we believe in the power of ideas. 
        Our mission is to provide a space where people 
        from all walks of life can come together to express themselves Anonymously`,
    },
    {
      title: "Our Story",
      icon: (
        <Box
          className="d-inline-block align-middle text-primary"
          style={{ fontSize: "30px" }}
        ></Box>
      ),
      description: `
        Our journey began with a simple idea: to create a digital space
        that combined the best of YouTube's visual storytelling
        and Reddit's collaborative discussions.`,
    },
    {
      title: "Our Vision",
      icon: (
        <Images
          className="d-inline-block align-middle text-primary"
          style={{ fontSize: "30px" }}
        ></Images>
      ),
      description: `
        We envision a world where ideas and creativity flow freely,
        unburdened by the constraints of identity`,
    },
    {
      title: "Join Us Today",
      icon: (
        <ShieldShaded
          className="d-inline-block align-middle text-primary"
          style={{ fontSize: "30px" }}
        ></ShieldShaded>
      ),
      description: `
        We invite you to become a part of our thriving community.
        Share your insights, collaborate with fellow enthusiasts,
        and embark on a journey of discovery`,
    },
  ],
};
function Text({ text }) {
  return (
    <p
      style={{
        fontSize: "1.5rem",
        fontWeight: "400",
        lineHeight: "1.5",
        textAlign: "justify",
        marginBottom: "1rem",
      }}
    >
      {text}
    </p>
  );
}
Text.propTypes = {
  text: PropTypes.string.isRequired,
};

function InfoCard({ icon, title, description }) {
  return (
    <div className="col-md-6 mt-4" data-aos="fade-up" data-aos-delay={100}>
      <div className="bs-primary">{icon}</div>
      <h4
        className="mt-3"
        style={{
          fontSize: "2.5rem",
        }}
      >
        {title}
      </h4>
      <Text style={{ color: "#848484" }} className="p-2" text={description} />
    </div>
  );
}
InfoCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function About() {
  return (
    <section
      style={{
        backgroundSize: "cover",
        padding: "60px",
      }}
    >
      <div className="row">
        <div className="col-xl-5 my-auto" data-aos="fade-up">
          <div className="py-5" style={{ maxWidth: "500px" }}>
            <h3
              style={{
                fontSize: "3.2rem",
                fontWeight: "700",
                lineHeight: "1.2",
                marginBottom: "1rem",
              }}
            >
              {data.title}
            </h3>
            <Text className="p-2" text={data.description} />
            <button
              href="#"
              className="btn btn-primary fs-3 text-white border-0 mt-4"
              style={{
                padding: "6px 44px 8px 30px",
                borderRadius: "50px",
              }}
            >
              About us
              <ChevronDoubleRight className="d-inline-block text-white align-middle"></ChevronDoubleRight>
            </button>
          </div>
        </div>
        <div className="col-xl-7 d-flex align-items-stretch">
          <div className="d-flex flex-column justify-content-center">
            <div className="row">
              {data.features.map((feature) => (
                <InfoCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                ></InfoCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
