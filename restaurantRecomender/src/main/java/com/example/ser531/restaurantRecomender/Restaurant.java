package com.example.ser531.restaurantRecomender;

public class Restaurant {
    private String restaurantID;
    private String restaurantName;
    private String restaurantLocation;
    private String restaurantCuisine;
    private String minCalories;
    private String maxCalories;
    private String price;
    private String rating;
    private String michelinStar;
    private String emotions;
    private String category;

    public String getrestaurantID() {
        return restaurantID;
    }

    public void setrestaurantID(String restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getrestaurantName() {
        return restaurantName;
    }

    public void setrestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getrestaurantLocation() {
        return restaurantLocation;
    }

    public void setrestaurantLocation(String restaurantLocation) {
        this.restaurantLocation = restaurantLocation;
    }

    public String getrestaurantCuisine() {
        return restaurantCuisine;
    }

    public void setrestaurantCuisine(String restaurantCuisine) {
        this.restaurantCuisine = restaurantCuisine;
    }

    public String getminCalories() {
        return minCalories;
    }

    public void setminCalories(String minCalories) {
        this.minCalories = minCalories;
    }

    public String getmaxCalories() {
        return maxCalories;
    }

    public void setmaxCalories(String maxCalories) {
        this.maxCalories = maxCalories;
    }

    public String getprice() {
        return price;
    }

    public void setprice(String price) {
        this.price = price;
    }

    public String getrating() {
        return rating;
    }

    public void setrating(String rating) {
        this.rating = rating;
    }

    public String getmichelinStar() {
        return michelinStar;
    }

    public void setmichelinStar(String michelinStar) {
        this.michelinStar = michelinStar;
    }

    public String getemotions() {
        return emotions;
    }

    public void setemotions(String emotions) {
        this.emotions = emotions;
    }

    public String getcategory() {
        return category;
    }

    public void setcategory(String category) {
        this.category = category;
    }
    
}
