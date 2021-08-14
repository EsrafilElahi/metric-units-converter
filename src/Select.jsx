import React from 'react'

function Select({ onChange, label, units }) {
    return (
        <div className={`${label}-select`}>
            <label>{label}</label>
            <select name="select-units" id={`${label}-select`} onChange={onChange}>
                {units.map(unit => (
                    <option value={unit.factor} key={unit.id}>
                        {unit.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
