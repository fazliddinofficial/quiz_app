import { AssemblyAI } from 'assemblyai'

const client = new AssemblyAI({
  apiKey: "87f072517dbf473a884d22c2d71efcb2"
})

const audioUrl =
  'https://assembly.ai/sports_injuries.mp3'

const config = {
  audio_url: audioUrl
}

export const run = async () => {
  const transcript = await client.transcripts.transcribe(config)
  console.log(transcript.text)
}
