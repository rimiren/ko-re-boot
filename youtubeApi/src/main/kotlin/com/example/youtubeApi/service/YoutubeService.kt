package com.example.youtubeApi.service

import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class YoutubeService(
    private val webClient: WebClient
) {
    fun getLiveVideos(channelId: String, apiKey: String): String {
        val url = "https://www.googleapis.com/youtube/v3/search" +
                "?part=snippet" +
                "&channelId=$channelId" +
                "&type=video" +
                "&eventType=live" +
                "&key=$apiKey"

        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String::class.java)
            .block() ?: ""
    }

    fun getUpcomingVideos(channelId: String, apiKey: String): String {
        val url = "https://www.googleapis.com/youtube/v3/search" +
                "?part=snippet" +
                "&channelId=$channelId" +
                "&type=video" +
                "&eventType=upcoming" +
                "&key=$apiKey"

        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String::class.java)
            .block() ?: ""
    }
}