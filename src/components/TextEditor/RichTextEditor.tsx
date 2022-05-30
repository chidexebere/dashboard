import { useState } from 'react';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { unescape } from 'html-escaper';
import { Interweave } from 'interweave';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import { useEditProduct } from '../../api/hooks';
import { PencilIcon } from '@heroicons/react/solid';

interface Props {
  contentFromAPI: string;
}

const RichTextEditor = ({ contentFromAPI }: Props) => {
  const content = ContentState.createFromText(contentFromAPI);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(content),
  );
  const [convertedContent, setConvertedContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const editDescription = useEditProduct();

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const rawContentState = convertToRaw(state.getCurrentContent());
    const currentContentAsHTML = draftToHtml(rawContentState);
    const unescapedHTML = unescape(currentContentAsHTML);
    setConvertedContent(unescapedHTML);
  };

  const handleSave = () => {
    const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    editDescription.mutate(data);
    handleEditing();
  };

  return (
    <div className="text-sm bg-white lowercase text-left">
      {isEditing ? (
        <div className="flex flex-col">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="p-4 border border-solid border-gray-200"
            editorClassName="p-4 border-solid border-gray-200 bg-gray-100"
            toolbarClassName="toolbar-class"
            toolbar={{
              options: ['inline', 'blockType', 'history'],
              blockType: { inDropdown: false },
            }}
          />
          <div className="mt-2 px-8 py-4 border border-solid border-teal-200 overflow-auto ">
            <Interweave content={convertedContent} />
          </div>
          <div className="p-4 flex justify-between">
            <button
              className="py-2 px-4 border border-solid text-red-400 hover:text-red-600"
              onClick={handleEditing}
            >
              cancel
            </button>

            <button
              className="py-2 px-4 bg-amber-200 hover:text-white hover:bg-amber-400"
              onClick={handleSave}
            >
              save
            </button>
          </div>
        </div>
      ) : (
        <div className="px-4 py-2 border border-solid border-gray-200 overflow-auto text-gray-600">
          <div className="pb-2 flex justify-end">
            <PencilIcon
              className="h-6 w-6 cursor-pointer text-gray-400"
              aria-hidden="true"
              onClick={handleEditing}
            />
          </div>
          <Interweave content={contentFromAPI} />
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
