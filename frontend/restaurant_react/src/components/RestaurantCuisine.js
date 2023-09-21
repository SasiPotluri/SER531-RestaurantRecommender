import React from 'react';
import Header2 from "./Header2";
import './style.css'
import './table.css'
import RecommendationService from '../RecommendationService';
import Footer from "./Footer";
import { Link } from "react-router-dom";


function RestaurantCuisine() {
 
  const[restaurantsCuisine, setRestaurantsCuisine] = React.useState([]);
  const getRestaurantsByCuisine = async (cuisine, price) => {
    const response = await RecommendationService.getRestaurantsByCuisine(cuisine, price);
    setRestaurantsCuisine(response.data);
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    getRestaurantsByCuisine(cuisine, price);
  }

  const [cuisine, setCuisine] = React.useState('');
  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };
  const [price, setPrice] = React.useState('');
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <Header2/>
      {!cuisine && <p>Please select cuisine.</p>}
        {!price && <p>Please select price.</p>}
      <div className='parent'>


         <div>
          <select required={true} value={cuisine} onChange={handleCuisineChange}>
            <option disabled={true} value="">
              Cuisine
            </option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="Californian">Californian</option>
            <option value="Contemporary">Contemporary</option>
            <option value="European">European</option>
            <option value="Fast Food">Fast Food</option>
            <option value="French">French</option>
            <option value="Fusion">Fusion</option>
            <option value="GastroPub">GastroPub</option>
            <option value="Indian">Indian</option>
            <option value="International">International</option>
            <option value="Italian">Italian</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Scandinavian">Scandinavian</option>
            <option value="Seafood">Seafood</option>
            <option value="Spanish">Spanish</option>
            <option value="Steakhouse">Steakhouse</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>    
         </div>
         <div>
          <select required={true} value={price} onChange={handlePriceChange}>
            <option disabled={true} value="">
              Price
            </option>
            <option value="Easy on Pocket">Easy on Pocket</option>
            <option value="Moderate">Moderate</option>
            <option value="Expensive">Expensive</option>
          </select>    
         </div>
          <button  onClick={handleSubmit}>Submit</button>
      </div>
      &nbsp;
      {restaurantsCuisine.length > 0 ? 
      <div style={{display:"flex",alignContent:"flex-start",justifyContent:"center"}}>
      <table className="restaurantTable" sx={{ minWidth: 100 }} aria-label="customized table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Min Calories</th>
          <th>Max Calories</th>
          <th>Cuisine</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Michelin Star</th>
          <th>Emotion</th>
          <th>Category</th>
        </tr>
        {restaurantsCuisine.map((item,index)=>{
          return (
            <tr key = {index}>
              <td>{item.restaurantID}</td>
            <td>{item.restaurantName}</td>
            <td>{item.restaurantLocation}</td>
            <td>{item.minCalories}</td>
            <td>{item.maxCalories}</td>
            <td>{cuisine}</td>
            <td>{price}</td>
            <td>{item.rating}</td>
            <td>{item.michelinStar}</td>
            <td>{item.emotions}</td>
            <td>{item.category}</td>
            </tr>
          )
        })}
      </table>
      </div>
      :
      <div>
      <p>
        There are no recommendations available for your selection. Please try again!
      </p>
      </div>
      }
      <button className='button'><Link to="/">Back to Home</Link></button>
      
    </div>
  )

}

export default RestaurantCuisine;
