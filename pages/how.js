// JSON
import how from "../json/how.json";

export default function How() {
  return (
    <section className="how">
      <h2>How does it work ?</h2>
      <ul>
        {how.map((how) => {
          return <li key={how}>{how}</li>;
        })}
      </ul>
    </section>
  );
}
