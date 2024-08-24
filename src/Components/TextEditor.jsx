import React from 'react';
import './Components.css'; // Import the CSS file

const TextEditor = ({fontFamily}) => {
  const wrapSelectedText = (tag, style) => {
    const selection = document.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (selectedText) {
      const wrapper = document.createElement(tag);
      if (style) {
        Object.keys(style).forEach((key) => {
          wrapper.style[key] = style[key];
        });
      }
      wrapper.innerHTML = selectedText;
      range.deleteContents();
      range.insertNode(wrapper);
    }
  };

  const changeFontSize = (size) => wrapSelectedText('span', { fontSize: size });

  return (
    <div className="text-editor-container">
        <h1 className='text-center ' style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>Text Editor </h1>
      <div className="toolbar" >
        <p>{fontFamily}</p>
        <button onClick={() => wrapSelectedText('b')} className="toolbar-button">
          <i className="fas fa-bold"></i>
        </button>
        <button onClick={() => wrapSelectedText('i')} className="toolbar-button">
          <i className="fas fa-italic"></i>
        </button>
        <button onClick={() => wrapSelectedText('span', { textDecoration: 'underline' })} className="toolbar-button">
          <i className="fas fa-underline"></i>
        </button>
        <button onClick={() => wrapSelectedText('span', { textDecoration: 'line-through' })} className="toolbar-button">
          <i className="fas fa-strikethrough"></i>
        </button>
        <select onChange={(e) => changeFontSize(e.target.value)} className="font-size-select" defaultValue="">
          <option value="8px">8px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
          <option value="40px">40px</option>
          <option value="64px">64px</option>
        </select>
        <button onClick={() => wrapSelectedText('div', { textAlign: 'left' })} className="toolbar-button">
          <i className="fas fa-align-left"></i>
        </button>
        <button onClick={() => wrapSelectedText('div', { textAlign: 'center' })} className="toolbar-button">
          <i className="fas fa-align-center"></i>
        </button>
        <button onClick={() => wrapSelectedText('div', { textAlign: 'right' })} className="toolbar-button">
          <i className="fas fa-align-right"></i>
        </button>
      </div>
      <div
        contentEditable={true}
        className="editor"
        style={{fontFamily: fontFamily}}
      >
        Type your text here...
      </div>
    </div>
  );
};

export default TextEditor;
