import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, channelId } = req.query

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        channelId,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        type: 'video',
      },
    })
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'YouTube API 호출 실패', detail: error })
  }
}
