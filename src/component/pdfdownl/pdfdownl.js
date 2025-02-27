import React from 'react';

const DownloadPDF = ({ pdflink, pdfname }) => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdflink;
    link.setAttribute('download', pdfname);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Internal styles for the button
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    width: 'auto', // Adjusted to auto width
    backgroundColor: '#007bff', // Button background color
    color: '#fff', // Button text color
    border: 'none', // Remove button border
    borderRadius: '4px', // Rounded corners
    cursor: 'pointer', // Show pointer cursor on hover
    fontSize: '16px', // Font size adjusted to match Register button
    transition: 'background-color 0.3s ease', // Smooth transition on hover
  };

  return (
    <div>
      {/* Apply inline style to the button */}
      <button style={buttonStyle} onClick={downloadPdf}>
        Rules
      </button>
    </div>
  );
};

export default DownloadPDF;
