import { padding } from "@mui/system";
import { useState } from "react";

export function PriceFilters({ handleFilter }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleMax = (value) => {
    setMax(value);
    handleFilter(
      value ? (any) => any.price >= min && any.price <= value : null
    );
  };
  const handleMin = (value) => {
    setMin(value);
    handleFilter(
      value ? (any) => any.price <= max && any.price >= value : null
    );
  };
  return (
    <>
      <div style={{ display: "flex", 
      flexDirection: "column", gap: 10 ,border:"1px solid black",
      padding : 12
      }}>
        <h3>Price Range</h3>
        <div>
          <input
            type="number"
            value={max}
            onChange={(e) => handleMax(Number(e.target.value))}
          />
          <label>max</label>
        </div>
        <div>
          <input
            type="number"
            value={min}
            onChange={(e) => handleMin(Number(e.target.value))}
          />
          <label>min</label>
        </div>
      </div>
    </>
  );
}
