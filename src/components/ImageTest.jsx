import { useState } from 'react';

const ImageTest = () => {
  const [testResults, setTestResults] = useState({});

  const testImages = [
    '/images/highTension.jpg',
    '/images/highTension.webp',
    '/images/communion.jpg', 
    '/images/communion.webp',
    '/images/sunday.jpg',
    '/images/sunday.webp'
  ];

  const testImageLoad = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ src, status: 'success', size: `${img.naturalWidth}x${img.naturalHeight}` });
      img.onerror = () => resolve({ src, status: 'error', size: 'N/A' });
      img.src = src;
    });
  };

  const runTests = async () => {
    console.log('🧪 Testing image accessibility...');
    const results = {};
    
    for (const src of testImages) {
      const result = await testImageLoad(src);
      results[src] = result;
      console.log(`${result.status === 'success' ? '✅' : '❌'} ${src} - ${result.status} (${result.size})`);
    }
    
    setTestResults(results);
  };

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px', borderRadius: '8px' }}>
      <h3>🧪 Image Accessibility Test</h3>
      <button onClick={runTests} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        Test All Images
      </button>
      
      <div style={{ display: 'grid', gap: '10px' }}>
        {Object.entries(testResults).map(([src, result]) => (
          <div key={src} style={{ 
            padding: '10px', 
            background: result.status === 'success' ? '#d4edda' : '#f8d7da',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{src}</span>
            <span>{result.status === 'success' ? '✅' : '❌'} {result.size}</span>
          </div>
        ))}
      </div>
      
      {Object.keys(testResults).length > 0 && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#e2e3e5', borderRadius: '4px' }}>
          <strong>Summary:</strong>
          <br />
          ✅ Success: {Object.values(testResults).filter(r => r.status === 'success').length}
          <br />
          ❌ Failed: {Object.values(testResults).filter(r => r.status === 'error').length}
        </div>
      )}
    </div>
  );
};

export default ImageTest;
