import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  /* Fetch details */
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products/"); // Backend URL
      setProducts(response.data);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  /* Render first time when url hit */
  useEffect(() => {
    fetchData(); // Call the async function
  }, []);

  /* Delete Product */
  function handleDelete(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/products/${id}`) //Hit the Backend URL
      .then(() => {
        console.log("Product deleted successfully");
        /* Filter the products */
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts); // Update the state
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting product:", error);
      });
  }
  function handleGreater() {
    axios.get("http://localhost:5000/products/gt")  // Hit the backend URL
      .then((response) => {
        setProducts(response.data); // Update the state
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }
  return (
    <>
    {/* Button for Fetch >100 */}
      <button
        className="m-4 p-4 text-white bg-gray-800"
        onClick={() => handleGreater()}
      >
        Greater than 100
      </button>
      {/* Grid layout */}
      <div className="p-4 grid grid-cols-4 gap-4">
        {/* Render all the products */}
        {products.map((product) => (
          <Card product={product} onDelete={handleDelete} />))}
      </div>
    </>
  );
}


function Card(props) {
  return (
    <>
      <div key={props.product._id} className="bg-white p-4 border border-gray-300 shadow-sm rounded-lg">
        <div className="flex flex-col justify-start ">
          {/* Display product details */}      
          <div className="font-bold">Name: {props.product.name}</div>
          <div className="font-semibold">₹ {props.product.price}</div>
          <div>Category: {props.product.category} <button>Update</button> </div> 
          {/* Delete button to remove the product */} 
          <button className="p-2 text-white bg-red-600 mt-4"
          onClick={() => props.onDelete(props.product.id)}>Delete</button>
        </div>
      </div>
    </>
)
}

export default Products;
