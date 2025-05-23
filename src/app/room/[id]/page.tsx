export const runtime = 'edge'          // Edge で実行

import EditorClient from './EditorClient'

type Props = { params: { id: string } }

export default function RoomPage({ params }: Props) {
  const { id } = params
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Room: {id}</h1>
      <EditorClient id={id} />         {/* ← そのまま呼ぶ */}
    </main>
  )
}