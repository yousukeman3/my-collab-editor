'use client'

import { useEffect, useState } from 'react'
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'

export function useCollabEditor(roomId: string) {
  const [editor, setEditor] = useState<Editor | null>(null)

  useEffect(() => {
    // 1) ブラウザでのみ実行
    const ydoc = new Y.Doc()

    // provider:   root URL         room name     ydoc
    const provider = new WebsocketProvider(
      `${process.env.NEXT_PUBLIC_WS_ENDPOINT}/room`,
      roomId,
      ydoc,
    )

    const ed = new Editor({
      extensions: [
        StarterKit,
        Collaboration.configure({ document: ydoc }),
        CollaborationCursor.configure({
          provider,
          user: { name: 'anon', color: '#38bdf8' },
        }),
      ],
    })

    setEditor(ed)
    return () => ed.destroy()           // 自動クリーンアップ
  }, [roomId])

  return editor
}