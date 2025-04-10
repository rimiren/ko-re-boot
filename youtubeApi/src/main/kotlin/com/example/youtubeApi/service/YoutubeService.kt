package com.example.youtubeApi.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate

@Service
class YoutubeService(
    private val restTemplate: RestTemplate
) {
    @Value("\${youtube.api.key}")
    private lateinit var apiKey: String

    fun searchVideos(channelId: String, query: String): String {
        val baseUrl = "https://www.googleapis.com/youtube/v3/search"

        val url = if (channelId.isNotBlank()) {
            "$baseUrl?part=snippet&channelId=$channelId&type=video&order=date&maxResults=10&key=$apiKey"
        } else {
            "$baseUrl?part=snippet&q=$query&type=video&order=date&maxResults=10&key=$apiKey"
        }

        println("🔍 YouTube API 호출 URL: $url")

        return restTemplate.getForObject(url, String::class.java) ?: "{}"
    }
}
