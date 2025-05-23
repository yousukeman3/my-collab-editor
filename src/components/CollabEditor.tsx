import { useCollabEditor } from '@/lib/useCollabEditor'
import { EditorContent } from '@tiptap/react'

export default function CollabEditor({ roomId }: { roomId: string }) {
  const editor = useCollabEditor(roomId)

  if (!editor) return <div>Loading Editor...</div>

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}