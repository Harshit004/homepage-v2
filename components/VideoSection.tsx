'use client'

import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
  ssr: false
})

interface VideoSectionProps {
  src: string
}

export default function VideoSection({ src }: VideoSectionProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="w-[1200px] h-[640px]">
        <VideoPlayer src={src} />
      </div>
    </div>
  )
} 