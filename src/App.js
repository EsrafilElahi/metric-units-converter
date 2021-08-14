import { useState } from 'react'
import Select from './Select';
import { units } from './units';
import './App.css';

function App() {

  const [result, setResult] = useState(0)
  const [val, setVal] = useState('')
  const [factorFrom, setFactorFrom] = useState('')
  const [factorTo, setFactorTo] = useState('')

  const handleConverter = (val, factorFrom, factorTo) => {

    const mm = val
    const mc = val * 100
    const mmi = val * 1000
    const mk = val / 1000

    const cc = val
    const cm = val / 100
    const cmi = val * 10
    const ck = val / 100000

    const mimi = val
    const mim = val / 1000
    const mic = val / 10
    const mik = val / 1000000

    const kk = val
    const km = val * 1000
    const kc = val * 100000
    const kmi = val * 1000000

    // Meter To Other
    if (factorFrom == 1 && factorTo == 0.01) {
      return setResult(mc)
    }
    else if (factorFrom == 1 && factorTo == 1) {
      return setResult(mm)
    }
    else if (factorFrom == 1 && factorTo == .001) {
      return setResult(mmi)
    }
    else if (factorFrom == 1 && factorTo == 1000) {
      return setResult(mk)
    }

    // Centimeter To Other
    else if (factorFrom == 0.01 && factorTo == 1) {
      return setResult(cm)
    }
    else if (factorFrom == 0.01 && factorTo == 0.01) {
      return setResult(cc)
    }
    else if (factorFrom == 0.01 && factorTo == 0.001) {
      return setResult(cmi)
    }
    else if (factorFrom == 0.01 && factorTo == 1000) {
      return setResult(ck)
    }

    // Millimeter To Other
    else if (factorFrom == 0.001 && factorTo == 1) {
      return setResult(mim)
    }
    else if (factorFrom == 0.001 && factorTo == 0.001) {
      return setResult(mimi)
    }
    else if (factorFrom == 0.001 && factorTo == 0.01) {
      return setResult(mic)
    }
    else if (factorFrom == 0.001 && factorTo == 1000) {
      return setResult(mik)
    }

    // Kilometer To Other
    else if (factorFrom == 1000 && factorTo == 1) {
      return setResult(km)
    }
    else if (factorFrom == 1000 && factorTo == 1000) {
      return setResult(kk)
    }
    else if (factorFrom == 1000 && factorTo == 0.01) {
      return setResult(kc)
    }
    else if (factorFrom == 1000 && factorTo == 0.001) {
      return setResult(kmi)
    }

  }


  return (

    <div>

      <div className='form'>

        <div className='amount'>
          <label>amount</label>
          <input type='text' value={val} onChange={(e) => setVal(e.target.value)} />
        </div>

        <div className='select'>
          <Select label='from' units={units} onChange={(e) => setFactorFrom(e.target.value)} />
          <Select label='to' units={units} onChange={(e) => setFactorTo(e.target.value)} />
        </div>

        <button className='btn' onClick={() => handleConverter(val, factorFrom, factorTo)}>convert</button>

        <div className='result'>
          <h5>result : {result}</h5>
        </div>


      </div>

    </div>

  )
}

export default App;
