import { useMemo, useEffect } from 'react'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
// 省略…

export function useCollabEditor(roomId: string) {
  // ① Y.Doc & Provider
  const { ydoc, provider } = useMemo(() => {
    const ydoc = new Y.Doc()

    const provider = new WebsocketProvider(
      `${process.env.NEXT_PUBLIC_WS_ENDPOINT}/room/${roomId}`,
      roomId,           // room name (= DO id)
      ydoc,
    )
    // provider.awareness にカーソル情報が入る

    return { ydoc, provider }
  }, [roomId])

  // ② TipTap Editor
  const editor = useMemo(
    () =>
      new Editor({
        extensions: [
          StarterKit,
          Collaboration.configure({ document: ydoc }),
          CollaborationCursor.configure({
            provider,                     // ここに WebsocketProvider
            user: {
              name: 'anon',
              color: '#38bdf8',
            },
          }),
        ],
      }),
    [ydoc, provider],
  )

  useEffect(() => () => editor.destroy(), [editor])
  return editor
}