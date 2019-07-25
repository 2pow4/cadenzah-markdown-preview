const React = require('react')

const Editor = (props) => (
  <div className="editor">
    <textarea
      autoFocus={false}
      onChange={(e) => props.onInputChange(e)}
      value={props.editorValue}
    />
  </div>
)

module.exports = Editor
