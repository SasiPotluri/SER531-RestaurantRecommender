package com.example.ser531.restaurantRecomender;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })

public class RestaurantRecomenderApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestaurantRecomenderApplication.class, args);
	}

}
