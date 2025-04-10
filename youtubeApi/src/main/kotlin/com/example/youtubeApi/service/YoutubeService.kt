package com.example.youtubeApi.service

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient

@Service
class YoutubeService(
    private val webClient: WebClient
) {
    @Value("\${youtube.api.key}")
    private lateinit var apiKey: String

    fun searchVideosByChannelId(channelId: String): String {
        val baseUrl = "https://www.googleapis.com/youtube/v3/search"

        val url = if (channelId.isNotBlank()) {
            "$baseUrl?part=snippet" +
                    "&channelId=$channelId" +
                    "&type=video" +
                    "&eventType=upcoming,live" + // 둘 다 포함
                    "&order=date" +
                    "&maxResults=10" +
                    "&key=$apiKey"
        } else {
            "$baseUrl?part=snippet" +
                    "&q=고양이" +
                    "&type=video" +
                    "&maxResults=10" +
                    "&order=date" +
                    "&key=$apiKey"
        }

        return webClient.get()
            .uri(url)
            .retrieve()
            .bodyToMono(String::class.java)
            .block() ?: "{}"
    }
}
