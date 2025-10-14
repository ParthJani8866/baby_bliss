'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

// Dynamically import JoditEditor only on client
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

export default function SimpleJoditEditor({ value = '', onChange }) {
  const [content, setContent] = useState(value)

  const config = {
    readonly: false,
    height: 300,
    toolbarAdaptive: true,
    toolbarSticky: false,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'outdent', 'indent', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'image', 'video', 'link', 'table', '|',
      'align', 'undo', 'redo', 'hr', 'eraser'
    ],
    uploader: { insertImageAsBase64URI: true },
  }

  return (
    <JoditEditor
      value={content}
      config={config}
      onBlur={(newContent) => {
        setContent(newContent)
        onChange && onChange(newContent)
      }}
      onChange={() => {}}
    />
  )
}
