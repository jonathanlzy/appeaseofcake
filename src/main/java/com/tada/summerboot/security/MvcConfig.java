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


		//Just to demo fragments
		registry.addViewController("/fragment1").setViewName("fragment1");
		registry.addViewController("/fragment2").setViewName("fragment2");

		registry.addViewController("/cart").setViewName("cart");
		registry.addViewController("/view-cart").setViewName("view-cart");

		registry.addViewController("/admin").setViewName("admin");
		registry.addViewController("/addproduct").setViewName("product");
		registry.addViewController("/everyproduct").setViewName("every-products");
//		registry.addViewController("/contact_us").setViewName("contact_us");

	}
}
