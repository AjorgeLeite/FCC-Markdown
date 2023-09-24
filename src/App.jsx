import React, { useState } from "react";

import "./App.css";
import defaultMarkdown from "./components/defaultMarkdown";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <div className="editor--container">
          <textarea
            rows="20"
            cols="100"
            id="editor"
            onChange={(e) => setMarkdown(e.target.value)}
            value={markdown}
          ></textarea>
        </div>
        <div className="previewer--container">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default App;
