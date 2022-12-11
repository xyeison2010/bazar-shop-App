
import { useMemo, useState } from "react";

export function ColorFilters({ products, handleFilter }) {
  const [selected, setSelected] = useState(new Set());

  const Colors = useMemo(() => {
    const set = new Set();
    for (let p of products) {
      set.add(p.color);
    }
    return Array.from(set);
  }, [products]);

  const handleChange = (color, ischeked) => {
    const copySelected = structuredClone(selected);
    if (ischeked) {
      copySelected.add(color);
    } else {
      copySelected.delete(color);
    }
    handleFilter((any) =>
      copySelected.size ? copySelected.has(any.color) : any
    ); //si no devuelve los any q seran todos los products

    setSelected(copySelected);
  };

  return (
    <>
      <div style={{border:"1px solid black" ,padding :12}} >
        <h3>Color</h3>
        {Colors.map((color) => (
          <div key={color}>
            <label>
              <input
                onChange={(e) => handleChange(e.target.value, e.target.checked)}
                value={color}
                type="checkbox"
                name=""
              />
              {color}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
