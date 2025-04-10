package com.example.youtubeApi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.example.youtubeApi"])
class YoutubeApiApplication

fun main(args: Array<String>) {
    runApplication<YoutubeApiApplication>(*args)
}
