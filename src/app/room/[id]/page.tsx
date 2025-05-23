export const runtime = 'edge'          // ← 必須！ (Server ≠ 'use client')

import dynamic from 'next/dynamic'

type Props = { params: { id: string } }

// Editor クライアント部分は SSR しないでブラウザ実行
const EditorClient = dynamic(() => import('./EditorClient'), { ssr: false })

export default function RoomPage({ params }: Props) {
  const { id } = params
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Room: {id}</h1>
      {/* クライアント側 TipTap */}
      <EditorClient id={id} />
    </main>
  )
}