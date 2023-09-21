import Axios from "axios";

const base = "http://localhost:8080";

class RecommendationService {
    getRestaurants = (rating, michelin, emotion, category) => {
        return Axios.get(base + `/restaurants/${rating}/${michelin}/${emotion}/${category}`)
    }
    getRestaurantsByCuisine = (cuisine, price) => {
        return Axios.get(base + `/restaurants/${cuisine}/${price}`)
    }
}

export default new RecommendationService();