import React, { useState } from "react";
import { htmlToText } from "html-to-text";

function BlogSummarizer() {
  const [blogUrl, setBlogUrl] = useState("");
  const [summarizedText, setSummarizedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const extractTextFromBlog = async () => {
    setIsLoading(true);

    try {
      // Step 1: Retrieve the Blog Content
      const response = await fetch(blogUrl);
      const htmlContent = await response.text();

      // Step 2: Parse the HTML
      const textContent = htmlToText(htmlContent);

      // Step 3: Set the extracted text
      setSummarizedText(textContent);
    } catch (error) {
      // Handle any errors that occurred during the process
    }

    setIsLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={blogUrl}
        onChange={(e) => setBlogUrl(e.target.value)}
        placeholder="Enter Blog URL"
      />
      <button onClick={extractTextFromBlog}>Extract Text</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Extracted Text</h2>
          <p>{summarizedText}</p>
        </div>
      )}
    </div>
  );
}

export default BlogSummarizer;
