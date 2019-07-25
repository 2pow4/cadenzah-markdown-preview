const React = require('react')

const Editor = (props) => (
  <div className="editor">
    <textarea
      placeholder="마크다운을 작성해보세요"
      autoFocus={false}
      onChange={(e) => props.onInputChange(e)}
      value={props.editorValue}
    />
  </div>
)

module.exports = Editor
