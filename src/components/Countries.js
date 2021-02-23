import Card from "./Card";

const Countries = ({ countries, openDetails }) => {

  return (
    <section className="countries">
      {countries.map((country) => (
        <Card key={countries.name} country={country} openDetails={openDetails} />
      ))}
    </section>
  );
};

export default Countries;
