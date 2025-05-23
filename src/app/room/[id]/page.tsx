export const runtime = 'edge'

import EditorClient from './EditorClient'

export default function RoomPage(
  { params }: { params: { id: string } }
) {
  const { id } = params                   // ← 型チェック OK
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Room: {id}</h1>
      <EditorClient id={id} />            {/* Client Component */}
    </main>
  )
}