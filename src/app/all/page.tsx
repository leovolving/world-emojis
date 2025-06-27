import { countries } from "../../data/countries";

import Country from "../../components/Country";

export default function AllCountriesPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>All Countries and Flags</h1>
      <ul>
        {countries.map((country) => (
          <li
            key={country.cca2}
            style={{ fontSize: "24px", marginBottom: "8px" }}
          >
            <Country country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}
