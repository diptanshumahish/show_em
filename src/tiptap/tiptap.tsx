"use client";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

interface ButtonStyle {
    border: string;
    padding: string;
    borderRadius: string;
    backgroundColor: string;
    marginRight: string;
    marginBottom: string;
    cursor: string;
}

const buttonStyle: ButtonStyle = {
    border: "none",
    marginBottom: "1rem",
    cursor: "pointer",
    padding: "5px 10px",
    borderRadius: "1rem",
    backgroundColor: "white",
    marginRight: "1rem",
};

const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <div className="px-[5vw] gap-4  items-start ">
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive("bold") ? "is-active" : ""}
            >
                bold
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive("italic") ? "is-active" : ""}
            >
                italic
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive("strike") ? "is-active" : ""}
            >
                strike
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={editor.isActive("code") ? "is-active" : ""}
            >
                code
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().unsetAllMarks().run()}
            >
                clear marks
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().clearNodes().run()}
            >
                clear nodes
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive("paragraph") ? "is-active" : ""}
            >
                paragraph
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive("heading", { level: 1 }) ? "is-active" : ""
                }
            >
                h1
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive("heading", { level: 2 }) ? "is-active" : ""
                }
            >
                h2
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive("heading", { level: 3 }) ? "is-active" : ""
                }
            >
                h3
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                    editor.isActive("heading", { level: 4 }) ? "is-active" : ""
                }
            >
                h4
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                    editor.isActive("heading", { level: 5 }) ? "is-active" : ""
                }
            >
                h5
            </button>
            <button
                style={buttonStyle}
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                    editor.isActive("heading", { level: 6 }) ? "is-active" : ""
                }
            >
                h6
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive("bulletList") ? "is-active" : ""}
            >
                bullet list
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={editor.isActive("orderedList") ? "is-active" : ""}
            >
                ordered list
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive("codeBlock") ? "is-active" : ""}
            >
                code block
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={editor.isActive("blockquote") ? "is-active" : ""}
            >
                blockquote
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
                horizontal rule
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().setHardBreak().run()}
            >
                hard break
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                undo
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                redo
            </button>
            <button
                style={buttonStyle}
                onClick={() => editor.chain().focus().setColor("#958DF1").run()}
                className={
                    editor.isActive("textStyle", { color: "#958DF1" })
                        ? "is-active"
                        : ""
                }
            >
                purple
            </button>
        </div>
    );
};

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({}),

    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
];

const content = `
<h1> Welcome to Show'em</h1>
<hr/>
<p>You can start writing here</P
`;

export default function TipTap() {
    return (
        <EditorProvider
            slotBefore={<MenuBar />}
            extensions={extensions}
            content={content}
            children={undefined}
            onFocus={(ele) => {
                console.log(ele);
            }}
        ></EditorProvider>
    );
}
