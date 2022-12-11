


export function CategoryFilters({ handleFilter, categories }) {
 
  const handleClick = (id ) =>{
       handleFilter( id ? (product) => product.categoryId === id : null )

  }
    return (
    <>
      <nav style={{ display: "flex", gap: 20 , }}>
        <button onClick={() => handleFilter(null)}>All</button>
        {categories.map((category) => (
          <div key={category.id}>
            <button onClick={() => handleClick(category.id)}>{category.name}</button>
          </div>
        ))}
      </nav>
    </>
  );
}
