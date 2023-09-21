import React from 'react';
import './style.css'
import './table.css'
import RecommendationService from '../RecommendationService';
import Header2 from "./Header2";
import Footer from "./Footer";
import { Link } from "react-router-dom";



function RestaurantRating() {
 
  const[restaurants, setRestaurants] = React.useState([]);
  const getRestaurants = async (rating, michelin, emotion, category) => {
    const response = await RecommendationService.getRestaurants(rating, michelin, emotion, category);
    setRestaurants(response.data);
  };

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    getRestaurants(rating, michelin, emotion, category);
  }

  const [rating, setRating] = React.useState('');
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };
  const [michelin, setMichelin] = React.useState('');
  const handleMichelinChange = (e) => {
    setMichelin(e.target.value);
  };
  const [emotion, setEmotion] = React.useState('');
  const handleEmotionChange = (e) => {
    setEmotion(e.target.value);
  };
  const [category, setCategory] = React.useState('');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <Header2 />
      {!rating && <p>Please select rating.</p>}
      {!michelin && <p>Please select Michelin Stars.</p>}
      {!emotion && <p>Please select emotion.</p>}
      {!category && <p>Please select category.</p>}
      <div className='parent' >
         <div>
          <select required={true} value={rating} onChange={handleRatingChange}>
            <option disabled={true} value="">
              Rating
            </option>
            <option value="1">1.00</option>
            <option value="2">2.00</option>
            <option value="3">3.00</option>
            <option value="4">4.00</option>
            <option value="5">5.00</option>
          </select>
         </div>
         <div>
          <select required={true} value={michelin} onChange={handleMichelinChange}>
            <option disabled={true} value="">
              Michelin Star
            </option>
            <option value="0-star">0-star</option>
            <option value="1-star">1-star</option>
            <option value="2-star">2-star</option>
            <option value="3-star">3-star</option>
          </select>  
         </div>
         <div>
          <select required={true} value={emotion} onChange={handleEmotionChange}>
            <option disabled={true} value="">
              Emotion
            </option>
            <option value="Boredom">Boredom</option>
            <option value="Depression">Depression</option>
            <option value="Happiness">Happiness</option>
            <option value="Lazy">Lazy</option>
            <option value="Stressed">Stressed</option>
            <option value="None">None</option>
          </select>
         </div>
         <div>
          <select required={true} value={category} onChange={handleCategoryChange}>
            <option disabled={true} value="">
              Category
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>  
         </div>
          <button onClick={handleSubmit}>Submit</button>
      </div>
      &nbsp;
      {restaurants.length > 0 ? 
   <div style={{display:"flex",alignContent:"flex-start",justifyContent:"center"}}>
      <table class="center" className="table" sx={{ minWidth: 100 }} aria-label="customized table">
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
        
        {restaurants.map((item,index)=>{
          
          return (
            <tr key = {index}>
              <td>{item.restaurantID}</td>
            <td>{item.restaurantName}</td>
            <td>{item.restaurantLocation}</td>
            <td>{item.minCalories}</td>
            <td>{item.maxCalories}</td>
            <td>{item.restaurantCuisine}</td>
            <td>{item.price}</td>
            <td>{rating}</td>
            <td>{michelin}</td>
            <td>{emotion}</td>
            <td>{category}</td>
            </tr>
          )
        })}
      </table>
      </div>
      :
      <div><p> There are no recommendations available for your selection. Please try again!</p></div>
      }
      <button className='button'><Link to="/">Back to Home</Link></button>
      
    </div>
  )
}

export default RestaurantRating;
