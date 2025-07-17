package com.elanyin.leethintbackend.service;

import com.elanyin.leethintbackend.dto.LeetcodeProblem;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.stream.Collectors;

@Service
public class HintService {

    @Value("${gemini.api-key}")
    private String geminiApiKey;

    public String  generateHint(LeetcodeProblem problem) {
        String title = problem.getTitle();
        String description = problem.getDescription();

        String prompt = String.format("""
        You are an expert programming assistant. Give a hint (not full answers) to solve this LeetCode problem:
        %s
        %s
        You only need to output the best and complete prompt, don't output any extra content. Do not include the word "AI" in the content and output an additional Chinese translation.
        """, title, description);

        try {
            // request Gemini
            URL url = new URL("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + geminiApiKey);

            // construct request
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("content-type", "application/json");
            connection.setDoOutput(true);

            String requestBody = String.format("""
            {
              "contents": [
                {
                  "parts": [
                    { "text": %s }
                  ]
                }
              ]
            }
            """, new ObjectMapper().writeValueAsString(prompt));

            connection.getOutputStream().write(requestBody.getBytes(StandardCharsets.UTF_8));
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String result = reader.lines().collect(Collectors.joining("\n"));

            // decode result
            JsonNode node = new ObjectMapper().readTree(result);

            return node.path("candidates").get(0).path("content").path("parts").get(0).path("text").asText();
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
