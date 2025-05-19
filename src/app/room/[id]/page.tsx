'use client'

import { useParams } from 'next/navigation'
import { EditorContent } from '@tiptap/react'
import { useCollabEditor } from '@/lib/useCollabEditor'

export default function RoomPage() {
  const { id } = useParams<{ id: string }>()
  const editor = useCollabEditor(id)

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Room: {id}</h1>
      {editor ? (
        <div className="border rounded shadow">
          <EditorContent editor={editor} className="p-4 min-h-[400px]" />
        </div>
      ) : (
        <p>Loading…</p>
      )}
    </main>
  )
}