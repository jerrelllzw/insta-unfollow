import React, { useState } from 'react';

function App() {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      processFileData(text);
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const processFileData = (data) => {
    // Assuming the file is a CSV and parsing it accordingly
    const rows = data.split('\n').map((row) => row.split(','));
    setFileData(rows);
  };

  return (
    <div>
      <header>
        <p>Hello World!</p>
        <input type="file" onChange={handleFileUpload} />
        {fileData && (
          <table>
            <thead>
              <tr>
                {fileData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fileData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
