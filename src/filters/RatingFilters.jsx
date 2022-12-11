
import { useState } from "react";


export function RatingFilters({ handleFilter }) {
  const [selected, setSelected] = useState(new Set());

  const handleChange = (rating, ischeked) => {
    const copySelected = structuredClone(selected);

    if (ischeked) {
      copySelected.add(rating);
    } else {
      copySelected.delete(rating);
    }

      handleFilter( copySelected.size ? (product) =>  copySelected.has(product.rating)  : null )
    setSelected(copySelected);
  };

  return (
    <>
    <div style={{border:"1px solid black" , padding : 12 }} >
        <h3>Rating</h3>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating}>
            <label>
              <input
                type="checkbox"
                value={rating}
                onChange={(e) =>
                  handleChange(Number(e.target.value), e.target.checked)
                }
              />
              {"★".repeat(rating).padEnd(5, "☆")}
            </label>
          </div>
        ))}
      </div>
     
    </>
  );
}
