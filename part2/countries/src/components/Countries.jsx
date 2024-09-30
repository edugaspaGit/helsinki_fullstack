import Country from "./Country";

const Countries = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return <div>Too many countries to show</div>;
  }
  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  } else {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.cca3}>
            {country.name.common}{" "}
            <button onClick={() => setCountries([country])}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

export default Countries;
