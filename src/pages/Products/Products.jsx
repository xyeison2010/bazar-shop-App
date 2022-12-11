import React, { useMemo } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import apiCategories from "../../api/categories";
import apiProducts from "../../api/product";
import { PriceFilters } from "../../filters/PriceFilters";
import { ColorFilters } from "../../filters/ColorFilters";
import { RatingFilters } from "../../filters/RatingFilters";
import { CategoryFilters } from "../../filters/CategoryFilters";
import "./Products.scss";

function Products() {
  const [products, setProducts] = useState(apiProducts);
  const [categories, setCategories] = useState(apiCategories); //
  const [filters, setFilters] = useState({
    color: null,
    price: null,
    rating: null,
    category: null,
  });

  const matches = useMemo(() => {
    const valuesFilter = Object.values(filters).filter(Boolean);
    let match = products;
    for (let filtro of valuesFilter) {
      match = match.filter(filtro);
    }
    return match;
  }, [filters, products]);

  return (
    <>
      <div className="products">
        <div className="left">
          <aside className="filterItem">
            <PriceFilters
              handleFilter={(any) =>
                setFilters((filters) => ({ ...filters, price: any }))
              }
            />
            <RatingFilters
              handleFilter={(any) =>
                setFilters((filters) => ({ ...filters, rating: any }))
              }
            />
            <ColorFilters
              products={products}
              handleFilter={(any) =>
                setFilters((filters) => ({ ...filters, color: any }))
              }
            />
          </aside>
        </div>
        <div className="right">
          <CategoryFilters
            categories={categories}
            handleFilter={(any) =>
              setFilters((filters) => ({ ...filters, category: any }))
            }
          />
<br />
          <h3>Resultados: {matches.length}</h3>
          <br />
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {matches?.map((product) => (
              <article key={product.id}>
                <Card product={product} categories={categories}/>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default Products;
