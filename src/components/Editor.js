import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function BlogEditor() {
  const [content, setContent] = useState('');

  return (
    <div>
      <h2>Blog Editor</h2>
      <Editor
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        }}
        onEditorChange={(newValue) => setContent(newValue)}
      />
      <div>
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

export default BlogEditor;
