package controller

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class ReactRestController {

    @PostMapping("/testData")
    fun testData(@RequestBody params: List<String>): Map<Int, String> {
        val data = mutableMapOf(
            1 to "사과",
            2 to "포도",
            3 to "바나나"
        )

        params.forEachIndexed { index, param ->
            data[ 4 + index] = param
        }
        return data
    }
}