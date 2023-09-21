package com.example.ser531.restaurantRecomender;

import java.util.ArrayList;
import java.util.List;

import org.apache.jena.query.*;
import org.apache.jena.sparql.exec.ResultSetAdapter;
import org.springframework.stereotype.Service;

@Service
public class fusekiServer {

    static String restaurantServiceEndpoint = "http://ec2-52-38-235-210.us-west-2.compute.amazonaws.com:3030/ResRecommender/query";

    public String createRestaurantsQuery(String rating, String michelin, String emotion, String category) {

        String str = "PREFIX recommendation: <http://www.semanticweb.org/tapas/ontologies/2022/10/untitled-ontology-40#>\n"
                +
                "PREFIX recomSystem: <http://ec2-52-38-235-210.us-west-2.compute.amazonaws.com:3030/ResRecommender/>\n"
                +
                "PREFIX ds: <http://purl.org/ctic/dcat#>\n" +
                "SELECT ?restaurantID ?restaurantName ?restaurantLocation ?maxCalories ?minCalories ?restaurantCuisine ?price \n"
                +
                "WHERE {\n" +
                "SERVICE recomSystem:sparql {\n" +
                "?subject recommendation:has_Cuisine ?cui.\n" +
                "?cui recommendation:is_Cuisine ?restaurantCuisine.\n" +
                "?subject recommendation:has_Location ?loc .\n" +
                "?loc recommendation:is_Location ?restaurantLocation .\n" +
                "?subject recommendation:has_Category ?cat .\n" +
                "?cat recommendation:is_Category '" + category + "' .\n" +
                "?subject recommendation:has_ID ?restaurantID .\n" +
                "?subject recommendation:has_Name ?name .\n" +
                "?name recommendation:is_Name ?restaurantName .\n" +
                "?subject recommendation:has_Pricing ?pr .\n" +
                "?pr recommendation:is_Price ?price .\n" +
                "?subject recommendation:has_MichelinStar ?ms .\n" +
                "?ms recommendation:is_MichelinStar '" + michelin + "' .\n" +
                "?subject recommendation:has_Rating ?rat .\n" +
                "?rat recommendation:is_Rating '" + rating + "' .\n" +
                "?subject recommendation:has_MaxCalorie ?mc .\n" +
                "?mc recommendation:is_MaxCalorie ?maxCalories .\n" +
                "?subject recommendation:has_MinCalorie ?mc1 .\n" +
                "?mc1 recommendation:is_MinCalorie ?minCalories .\n" +
                "?subject recommendation:has_Emotion ?emo .\n" +
                "?emo recommendation:is_Emotion '" + emotion + "' .\n" +
                "}\n" +
                "}\n" +
                "LIMIT 30\n";
        return str;

    }

    public String createRestaurantsByCuisineQuery(String cuisine, String price) {

        String str = "PREFIX recommendation: <http://www.semanticweb.org/tapas/ontologies/2022/10/untitled-ontology-40#>\n"
                +
                "PREFIX recomSystem: <http://ec2-52-38-235-210.us-west-2.compute.amazonaws.com:3030/ResRecommender/>\n"
                +
                "PREFIX ds: <http://purl.org/ctic/dcat#>\n" +
                "SELECT ?restaurantID ?restaurantName ?restaurantLocation ?maxCalories ?minCalories ?rating ?michelinStar ?emotions ?category \n"
                +
                "WHERE {\n" +
                "SERVICE recomSystem:sparql {\n" +
                "?subject recommendation:has_Cuisine ?cui.\n" +
                "?cui recommendation:is_Cuisine '" + cuisine + "'.\n" +
                "?subject recommendation:has_Location ?loc .\n" +
                "?loc recommendation:is_Location ?restaurantLocation .\n" +
                "?subject recommendation:has_Category ?cat .\n" +
                "?cat recommendation:is_Category ?category .\n" +
                "?subject recommendation:has_ID ?restaurantID .\n" +
                "?subject recommendation:has_Name ?name .\n" +
                "?name recommendation:is_Name ?restaurantName .\n" +
                "?subject recommendation:has_Pricing ?pr .\n" +
                "?pr recommendation:is_Price '" + price + "' .\n" +
                "?subject recommendation:has_MichelinStar ?ms .\n" +
                "?ms recommendation:is_MichelinStar ?michelinStar .\n" +
                "?subject recommendation:has_Rating ?rat .\n" +
                "?rat recommendation:is_Rating ?rating .\n" +
                "?subject recommendation:has_MaxCalorie ?mc .\n" +
                "?mc recommendation:is_MaxCalorie ?maxCalories .\n" +
                "?subject recommendation:has_MinCalorie ?mc1 .\n" +
                "?mc1 recommendation:is_MinCalorie ?minCalories .\n" +
                "?subject recommendation:has_Emotion ?emo .\n" +
                "?emo recommendation:is_Emotion ?emotions .\n" +
                "}\n" +
                "}\n" +
                "LIMIT 30\n";
        return str;

    }

    private static List<Restaurant> loadRestaurant(String uri, String query) {

        QueryExecution queryExecution = QueryExecutionFactory.sparqlService(uri, query);
        ResultSetAdapter result = (ResultSetAdapter) queryExecution.execSelect();
        List<Restaurant> restaurants = new ArrayList<>();

        while ((result).hasNext()) {

            Restaurant restaurant = new Restaurant();
            QuerySolution soln = (result).nextSolution();
            restaurant.setrestaurantID(soln.getLiteral("restaurantID").toString());
            restaurant.setrestaurantName(soln.getLiteral("restaurantName").toString());
            restaurant.setrestaurantLocation(soln.getLiteral("restaurantLocation").toString());
            restaurant.setminCalories(soln.getLiteral("minCalories").toString());
            restaurant.setmaxCalories(soln.getLiteral("maxCalories").toString());
            restaurant.setrestaurantCuisine(soln.getLiteral("restaurantCuisine").toString());
            restaurant.setprice(soln.getLiteral("price").toString());

            restaurants.add(restaurant);
        }

        return restaurants;
    }

    private static List<Restaurant> loadRestaurantByCuisine(String uri, String query) {

        QueryExecution queryExecution = QueryExecutionFactory.sparqlService(uri, query);
        ResultSetAdapter result = (ResultSetAdapter) queryExecution.execSelect();
        List<Restaurant> restaurants = new ArrayList<>();

        while ((result).hasNext()) {

            Restaurant restaurant = new Restaurant();
            QuerySolution soln = (result).nextSolution();
            restaurant.setrestaurantID(soln.getLiteral("restaurantID").toString());
            restaurant.setrestaurantName(soln.getLiteral("restaurantName").toString());
            restaurant.setrestaurantLocation(soln.getLiteral("restaurantLocation").toString());
            restaurant.setminCalories(soln.getLiteral("minCalories").toString());
            restaurant.setmaxCalories(soln.getLiteral("maxCalories").toString());
            restaurant.setemotions(soln.getLiteral("emotions").toString());
            restaurant.setrating(soln.getLiteral("rating").toString());
            restaurant.setmichelinStar(soln.getLiteral("michelinStar").toString());
            restaurant.setcategory(soln.getLiteral("category").toString());

            restaurants.add(restaurant);
        }

        return restaurants;
    }

    public List<Restaurant> getRestaurants(String rating, String michelin, String emotion, String category) {
        String query = createRestaurantsQuery(rating, michelin, emotion, category);
        return loadRestaurant(restaurantServiceEndpoint, query);
    }

    public List<Restaurant> getRestaurantsByCuisine(String cuisine, String price) {
        String query = createRestaurantsByCuisineQuery(cuisine, price);
        return loadRestaurantByCuisine(restaurantServiceEndpoint, query);
    }

}
