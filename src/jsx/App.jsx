const React = require('react')
const Editor = require('./Editor.jsx')
const Preview = require('./Preview.jsx')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rawText: ""
    }
  }

  componentWillMount() {
    if (window.localStorage.content) {
      this.setState({
        rawText: window.localStorage.content // local cache to save the content
      })
    }
  }

  handleEditorInput(e) {
      this.setState({ rawText: e.target.value })
      window.localStorage.setItem('content', e.target.value)
  }

  render() {
    return (
      <div className="app">
        <Editor
          onInputChange={(e) => this.handleEditorInput(e)}
          editorValue={this.state.rawText}
        />
        <Preview
          inputValue={this.state.rawText}
        />
      </div>
    )
  }
}

module.exports = App
