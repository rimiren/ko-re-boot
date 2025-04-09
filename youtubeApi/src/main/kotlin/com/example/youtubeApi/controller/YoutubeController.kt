package com.example.youtubeApi.controller

import com.example.youtubeApi.service.YoutubeService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/youtube")
class YoutubeController(
    private val youtubeService: YoutubeService
) {
    @GetMapping("/live")
    fun getLive(@RequestParam channelId: String): ResponseEntity<String> {
        val result = youtubeService.getLiveVideos(channelId)
        return ResponseEntity.ok(result)
    }

    @GetMapping("/upcoming")
    fun getUpcoming(@RequestParam channelId: String): ResponseEntity<String> {
        val result = youtubeService.getUpcomingVideos(channelId)
        return ResponseEntity.ok(result)
    }
}
