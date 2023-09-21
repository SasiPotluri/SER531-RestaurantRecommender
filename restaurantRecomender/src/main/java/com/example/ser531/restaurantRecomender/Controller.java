package com.example.ser531.restaurantRecomender;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class Controller {
    @Autowired
    fusekiServer fusekiService;

    @RequestMapping(value="/restaurants/{rating}/{michelin}/{emotion}/{category}", method = RequestMethod.GET)
    public List<Restaurant> getRestaurants(@PathVariable String rating, @PathVariable String michelin, @PathVariable String emotion, @PathVariable String category){
        System.out.println(rating+" "+michelin+" "+emotion+" "+category);

        return fusekiService.getRestaurants(rating,michelin,emotion,category);
    }
    
    @RequestMapping(value="/restaurants/{cuisine}/{price}", method = RequestMethod.GET)
    public List<Restaurant> getRestaurantsByCuisine(@PathVariable String cuisine, @PathVariable String price){
        System.out.println(cuisine+" "+price);

        return fusekiService.getRestaurantsByCuisine(cuisine,price);
    }

}
