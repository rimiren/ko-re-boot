package com.example.youtubeApi.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import com.example.youtubeApi.service.YoutubeService

@RestController
@RequestMapping("/api/youtube")
class YoutubeController(
    private val youtubeService: YoutubeService
) {
    @GetMapping("/live")
    fun getLive(
        @RequestParam channelId: String,
        @RequestParam apiKey: String
    ): ResponseEntity<String> {
        val result = youtubeService.getLiveVideos(channelId, apiKey)
        return ResponseEntity.ok(result)
    }

    @GetMapping("/upcoming")
    fun getUpcoming(
        @RequestParam channelId: String,
        @RequestParam apiKey: String
    ): ResponseEntity<String> {
        val result = youtubeService.getUpcomingVideos(channelId, apiKey)
        return ResponseEntity.ok(result)
    }
}