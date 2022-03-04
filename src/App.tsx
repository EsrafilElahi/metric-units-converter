import React, { ReactElement, FunctionComponent, useState } from "react";
import Select from "./Select";
import { units } from "./units";
import "../styles/app.css";

import a from "../public/a.JPG"; // for test img JPG
import logo from "../public/logo.svg"; // for test img svg

function App(): ReactElement {
  const [result, setResult] = useState<number>(0);
  const [val, setVal] = useState<number>();
  const [factorFrom, setFactorFrom] = useState<number>();
  const [factorTo, setFactorTo] = useState<number>();

  const handleConverter = (
    val: number,
    factorFrom: number,
    factorTo: number
   ) => {
    const mm = val;
    const mc = val * 100;
    const mmi = val * 1000;
    const mk = val / 1000;

    const cc = val;
    const cm = val / 100;
    const cmi = val * 10;
    const ck = val / 100000;

    const mimi = val;
    const mim = val / 1000;
    const mic = val / 10;
    const mik = val / 1000000;

    const kk = val;
    const km = val * 1000;
    const kc = val * 100000;
    const kmi = val * 1000000;

    // Meter To Other
    if (factorFrom == 1 && factorTo == 0.01) {
      return setResult(mc);
    } else if (factorFrom == 1 && factorTo == 1) {
      return setResult(mm);
    } else if (factorFrom == 1 && factorTo == 0.001) {
      return setResult(mmi);
    } else if (factorFrom == 1 && factorTo == 1000) {
      return setResult(mk);
    }

    // Centimeter To Other
    else if (factorFrom == 0.01 && factorTo == 1) {
      return setResult(cm);
    } else if (factorFrom == 0.01 && factorTo == 0.01) {
      return setResult(cc);
    } else if (factorFrom == 0.01 && factorTo == 0.001) {
      return setResult(cmi);
    } else if (factorFrom == 0.01 && factorTo == 1000) {
      return setResult(ck);
    }

    // Millimeter To Other
    else if (factorFrom == 0.001 && factorTo == 1) {
      return setResult(mim);
    } else if (factorFrom == 0.001 && factorTo == 0.001) {
      return setResult(mimi);
    } else if (factorFrom == 0.001 && factorTo == 0.01) {
      return setResult(mic);
    } else if (factorFrom == 0.001 && factorTo == 1000) {
      return setResult(mik);
    }

    // Kilometer To Other
    else if (factorFrom == 1000 && factorTo == 1) {
      return setResult(km);
    } else if (factorFrom == 1000 && factorTo == 1000) {
      return setResult(kk);
    } else if (factorFrom == 1000 && factorTo == 0.01) {
      return setResult(kc);
    } else if (factorFrom == 1000 && factorTo == 0.001) {
      return setResult(kmi);
    }
  };

  return (
    <div>
      <div className="form">
        <div className="amount">
          <label>amount</label>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
          />
        </div>

        <div className="select">
          <Select
            label="from"
            units={units}
            onChange={(e) => setFactorFrom(Number(e.target.value))}
          />
          <Select
            label="to"
            units={units}
            onChange={(e) => setFactorTo(Number(e.target.value))}
          />
        </div>

        <button
          className="btn"
          onClick={() =>
            handleConverter(Number(val), Number(factorFrom), Number(factorTo))
          }
        >
          convert
        </button>

        <div className="result">
          <h5>result : {result}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
