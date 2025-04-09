package service

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
        val url = "https://www.googleapis.com/youtube/v3/search"

        val response = webClient.get()
            .uri { uriBuilder ->
                uriBuilder
                    .path(url)
                    .queryParam("part", "snippet")
                    .queryParam("channelId", channelId)
                    .queryParam("type", "video")
                    .queryParam("eventType", "live")
                    .queryParam("key", apiKey)
                    .build()
            }
            .retrieve()
            .bodyToMono(String::class.java)
            .block() // 비동기 → 동기 변환 (일단 지금은 이걸로 충분)

        return response ?: ""
    }
    fun getUpcomingVideos(channelId: String): String {
        val url = "https://www.googleapis.com/youtube/v3/search"

        val response = webClient.get()
            .uri { uriBuilder ->
                uriBuilder
                    .path(url)
                    .queryParam("part", "snippet")
                    .queryParam("channelId", channelId)
                    .queryParam("type", "video")
                    .queryParam("eventType", "upcoming")
                    .queryParam("key", apiKey)
                    .build()
            }
            .retrieve()
            .bodyToMono(String::class.java)
            .block()

        return response ?: ""
    }
}