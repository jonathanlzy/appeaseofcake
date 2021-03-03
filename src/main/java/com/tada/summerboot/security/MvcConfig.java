package com.tada.summerboot.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
	public void addViewControllers(ViewControllerRegistry registry) {
		//Map the browser's URL to a specific View (HTML) inside resources/templates directory
		registry.addViewController("/hello").setViewName("hello");
		registry.addViewController("/error").setViewName("error");
		registry.addViewController("/register").setViewName("register");
		registry.addViewController("/cakes").setViewName("cakes");
		registry.addViewController("/index").setViewName("index");
		registry.addViewController("/login").setViewName("login");
		registry.addViewController("/about_us").setViewName("about_us");
		registry.addViewController("/contact_us").setViewName("contact_us");
		registry.addViewController("/register_signup").setViewName("register_signup");
		registry.addViewController("/cake_template").setViewName("cake_template");
		registry.addViewController("/cakes_cart").setViewName("cakes_cart");
		registry.addViewController("/charge_result").setViewName("charge_result");
//		registry.addViewController("/cakes_checkout").setViewName("cakes_checkout");



		//Just to demo fragments
		registry.addViewController("/fragment1").setViewName("fragment1");
		registry.addViewController("/fragment2").setViewName("fragment2");

		registry.addViewController("/cart").setViewName("cart");
		registry.addViewController("/view-cart").setViewName("view-cart");

		registry.addViewController("/admin").setViewName("admin");
		//TODO commented out this
//		registry.addViewController("/addproduct").setViewName("product");
		registry.addViewController("/every-products").setViewName("every-products");
//		registry.addViewController("/every-users").setViewName("every-users");
//		registry.addViewController("/contact_us").setViewName("contact_us");

	}
}
