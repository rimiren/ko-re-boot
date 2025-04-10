package com.example.youtubeApi.controller

import com.example.youtubeApi.service.YoutubeService
import com.fasterxml.jackson.databind.ObjectMapper
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/youtube")
class YoutubeController(
    private val youtubeService: YoutubeService
) {
    @GetMapping("/channel")
    fun getVideosByChannelId(
        @RequestParam channelId: String,
        @RequestParam(required = false, defaultValue = "고양이") query: String
    ): ResponseEntity<Any> {
        val result = youtubeService.searchVideos(channelId, query)
        val json = ObjectMapper().readTree(result)
        return ResponseEntity.ok(json)
    }
}
