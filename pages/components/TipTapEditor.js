'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import {
    Bold,
    Italic,
    Strikethrough,
    Code,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    ImageIcon,
    VideoIcon,
    Link as LinkIcon
} from 'lucide-react'
import { useState } from 'react'

const MenuBar = ({ editor }) => {
    const [showLinkInput, setShowLinkInput] = useState(false)
    const [url, setUrl] = useState('')

    if (!editor) return null

    const addImage = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'image/*'
        input.onchange = async e => {
            const file = e.target.files[0]
            if (!file) return

            // 👇 Upload logic — replace with your API endpoint
            const reader = new FileReader()
            reader.onload = () => {
                editor.chain().focus().setImage({ src: reader.result }).run()
            }
            reader.readAsDataURL(file)
        }
        input.click()
    }

    const addVideo = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = 'video/*'
        input.onchange = async e => {
            const file = e.target.files[0]
            if (!file) return

            // 👇 Upload logic — replace with your upload API endpoint
            const reader = new FileReader()
            reader.onload = () => {
                editor.chain().focus().setVideo({ src: reader.result }).run()
            }
            reader.readAsDataURL(file)
        }
        input.click()
    }

    const addLink = () => {
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
            setUrl('')
            setShowLinkInput(false)
        }
    }

    return (
        <div className="border border-gray-300 rounded-md p-2 mb-2 flex flex-wrap gap-2 items-center">
            <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                <Bold className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
                <Italic className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
                <Strikethrough className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleCode().run()}>
                <Code className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <List className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                <ListOrdered className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                <Quote className="w-4 h-4" />
            </button>
            <button onClick={addImage}>
                <ImageIcon className="w-4 h-4" />
            </button>
            <button onClick={addVideo}>
                <VideoIcon className="w-4 h-4" />
            </button>
            <button onClick={() => setShowLinkInput(!showLinkInput)}>
                <LinkIcon className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().undo().run()}>
                <Undo className="w-4 h-4" />
            </button>
            <button onClick={() => editor.chain().focus().redo().run()}>
                <Redo className="w-4 h-4" />
            </button>

            {showLinkInput && (
                <div className="flex items-center ml-2 gap-2">
                    <input
                        type="text"
                        placeholder="Paste link..."
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className="border p-1 text-sm rounded"
                    />
                    <button onClick={addLink} className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Add</button>
                </div>
            )}
        </div>
    )
}

const TipTapRichEditor = ({ content = '', onChange, placeholder = "Write something amazing..." }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder,
            }),
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
            Link.configure({
                openOnClick: true,
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            onChange && onChange(html)
        },
        immediatelyRender: false
    })

    return (
        <div className="border rounded-md p-3">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} className="prose min-h-[200px] p-2 focus:outline-none" />
        </div>
    )
}

export default TipTapRichEditor
