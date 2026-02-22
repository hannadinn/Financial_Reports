// src/main/java/com/example/config/WebClientConfig.java
package com.example.backend.config;

import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${external.apis.base-url}")
    private String externalApiBaseUrl;

    @Value("${external.apis.api-key}")
    private String externalApiKey;

    @Value("${external.apis.reports.balance-sheet-route}")
    private String externalApiBalanceSheetRoute;

    @Bean
    @Qualifier("reportsApiClient")
    public WebClient webClient(WebClient.Builder builder) {
        return builder
                .baseUrl(externalApiBaseUrl + externalApiBalanceSheetRoute)
                .defaultUriVariables(Map.of("apikey",externalApiKey))
                .build();
    }
}