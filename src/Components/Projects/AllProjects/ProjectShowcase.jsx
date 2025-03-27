import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProjectShowcase = ({ title, liveUrl, htmlCode, cssCode, jsCode }) => {
  const [activeTab, setActiveTab] = useState('html');

  const renderCode = () => {
    switch (activeTab) {
      case 'html':
        return <SyntaxHighlighter language="html" style={darcula}>{htmlCode}</SyntaxHighlighter>;
      case 'css':
        return <SyntaxHighlighter language="css" style={darcula}>{cssCode}</SyntaxHighlighter>;
      case 'js':
        return <SyntaxHighlighter language="javascript" style={darcula}>{jsCode}</SyntaxHighlighter>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Live Project */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Live Demo</h2>
          <iframe 
            src={liveUrl}
            title="Live Project"
            className="w-full h-96 border-none"
          ></iframe>
        </div>

        {/* Code Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Code</h2>

          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button 
              className={`py-2 px-4 rounded ${activeTab === 'html' ? 'bg-gray-600' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button 
              className={`py-2 px-4 rounded ${activeTab === 'css' ? 'bg-gray-600' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
            <button 
              className={`py-2 px-4 rounded ${activeTab === 'js' ? 'bg-gray-600' : 'bg-gray-700'}`}
              onClick={() => setActiveTab('js')}
            >
              JavaScript
            </button>
          </div>

          {/* Code Display */}
          <div className="overflow-auto max-h-96">
            {renderCode()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;


