'use client'

export const runtime = 'edge'; 

import { useCollabEditor } from '@/lib/useCollabEditor';
import { EditorContent } from '@tiptap/react';
import { useParams } from 'next/navigation';

export default function RoomPage() {
  const { id } = useParams<{ id: string }>()
  const editor = useCollabEditor(id)

  if (!editor) return null
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Room: {id}</h1>
      <div className="border rounded shadow">
        <EditorContent editor={editor} className="p-4 min-h-[400px]" />
      </div>
    </main>
  )
}