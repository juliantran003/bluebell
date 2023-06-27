// JSON
import servicesProvided from "../json/servicesProvided.json";
import servicesNotProvided from "../json/servicesNotProvided.json";

export default function Services() {
  return (
    <div className="services">
      <section>
        <h2>What we do</h2>
        <ul>
          {servicesProvided.map((service) => {
            return <li>{service}</li>;
          })}
        </ul>
      </section>
      <section>
        <h2>What we don't do</h2>
        <ul>
          {servicesNotProvided.map((service) => {
            return <li>{service}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
