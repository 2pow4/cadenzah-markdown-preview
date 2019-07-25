const React = require('react')
const Showdown = require('showdown')

const Preview = (props) => {
  const converter = new Showdown.Converter()
  const html = converter.makeHtml(props.inputValue)

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: html }}>
    </div>
  )
}

module.exports = Preview
