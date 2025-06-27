import { C } from "../types/country";

type Props = {
  country: C
}

export default function Country({country}: Props) {
    const {flag, name, cca2} = country
    return <div>
                 <span style={{ fontSize: "48px", marginRight: "12px" }}>
              {flag}
            </span>
            {name.common} ({cca2})
    </div>
}