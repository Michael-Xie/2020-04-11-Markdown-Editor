import React from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const showdown = require('showdown');



export default function ShowHTML(props) {
  const converter = new showdown.Converter()
  const { text } = props;
  return (
    <>
      {ReactHtmlParser(converter.makeHtml(text))}
    </>
  )
}
