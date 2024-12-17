import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products/"); // Backend URL
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  /* Render first time when url hit */
  useEffect(() => {
    fetchData(); // Call the async function
  }, []);

  function handleDelete(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        console.log("Product deleted successfully");
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  }
  function handleGreater() {
    axios.get("http://localhost:5000/products/gt")  // Correct the URL to match the backend route
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <button
        className="m-4 p-4 text-white bg-gray-800"
        onClick={() => handleGreater()}
      >
        Greater than 100
      </button>
      <div className="p-4 grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 border border-gray-300 shadow-sm rounded-lg"
          >
            <div className="flex flex-col justify-start ">
              <div className="">Name: {product.name}</div>
              <div className="">₹ {product.price}</div>
              <div className="">Category: {product.category} <button>Update</button> </div>  
              <button
                className="p-2 text-white bg-red-600 mt-4"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
