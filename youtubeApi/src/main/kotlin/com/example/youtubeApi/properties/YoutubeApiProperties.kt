package com.example.youtubeApi.properties

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.stereotype.Component

@Component
@ConfigurationProperties(prefix = "youtube.api")
class YoutubeApiProperties {
    var keys: List<String> = listOf()
}
