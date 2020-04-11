import React from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import "./ShowHTML.css";
const showdown = require('showdown');



export default function ShowHTML(props) {
  const converter = new showdown.Converter()
  const { text } = props;
  return (
    <div className="show-html">{ReactHtmlParser(converter.makeHtml(text))}</div>

  )
}
