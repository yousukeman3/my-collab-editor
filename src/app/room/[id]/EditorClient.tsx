'use client'

import { useCollabEditor } from '@/lib/useCollabEditor'
import { EditorContent } from '@tiptap/react'

export default function EditorClient({ id }: { id: string }) {
  const editor = useCollabEditor(id)
  if (!editor) return <p>Loading…</p>
  return (
    <div className="border rounded shadow">
      <EditorContent editor={editor} className="p-4 min-h-[400px]" />
    </div>
  )
}