'use client'

import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

export function useCollabEditor(roomId: string) {
  const [editor, setEditor] = useState<Editor | null>(null)

  useEffect(() => {
    const ydoc = new Y.Doc()
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

    // クリーンアップ
    return () => {
      ed.destroy()
      provider.destroy()
      ydoc.destroy()
    }
  }, [roomId])

  return editor
}