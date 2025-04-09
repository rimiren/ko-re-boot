package com.example.youtubeApi.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class YoutubeService(
    private val webClient: WebClient,
    @Value("\${youtube.api.key}")
    private val apiKey: String
) {
    fun getLiveVideos(channelId: String): String {
        val url = "https://www.googleapis.com/youtube/v3/search" +
                "?part=snippet" +
                "&channelId=$channelId" +
                "&type=video" +
                "&eventType=live" +
                "&key=$apiKey"

        println("📡 YouTube Live API 호출: $url")

        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String::class.java)
            .block() ?: ""
    }

    fun getUpcomingVideos(channelId: String): String {
        val url = "https://www.googleapis.com/youtube/v3/search" +
                "?part=snippet" +
                "&channelId=$channelId" +
                "&type=video" +
                "&eventType=upcoming" +
                "&key=$apiKey"

        println("📡 YouTube Upcoming API 호출: $url")

        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String::class.java)
            .block() ?: ""
    }
}
