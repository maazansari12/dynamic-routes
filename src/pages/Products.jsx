
import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../component/ProductCard"
import CategoryChip from "../component/CategoryChip"

function Products() {
  const [products, setproduct] = useState([])
  const [categories, setcategories] = useState([])
  const [choosencategory, setchoosencategory] = useState("All")
  const [loading, setloading] = useState(true)
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const url = choosencategory === "All" ? "https://dummyjson.com/products": `https://dummyjson.com/products/category/${choosencategory}`
    axios.get(url)
      .then((res) => {
        console.log(res.data.products)
        setproduct(res.data.products)
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
        setloading(false)

      });
  }, [choosencategory])
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        console.log(res)
        setcategories(res.data)
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
        setloading(false)

      });
  }, []);;
  const allProducts = products
  
  
  const sortedProducts = allProducts.sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "priceHighToLow") {
      return b.price - a.price;
    } else if (sortOption === "alphabetical") {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  });
  // console.log("thi is ",sortOption);
  
  // console.log( "sorted option",sortedProducts);
  

  return (
    <div className="container mx-auto">
      {
        loading ? (
          <h1 className="text-center text-3xl">loading...</h1>
        ) : (
          <div>
            <div className="flex flex-wrap">
              <CategoryChip
              onClick={()=>setchoosencategory("All")}
                ischoosen={choosencategory === "All"}
                category={{
                  slug: "All",
                  name: "All",

                }} />
              {categories.map((category) => (<CategoryChip
                onClick={() => setchoosencategory(category.slug)
                }
                ischoosen={category.slug === choosencategory}

                category={category}
                key={category.slug} />))}

            </div>
            <div className="mt-4 mb-4">
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="default">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
            <div className="flex flex-wrap -m-4">
              {products.map((item) => (<ProductCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
export default Products