// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [skillsInput, setSkillsInput] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!skillsInput.trim()) return;

    setLoading(true);
    const userSkills = skillsInput.split(',').map(s => s.trim());

    try {
      const response = await axios.post('https://careerhub-ai-career-placement-assistant.onrender.com', { userSkills });
      if (response.data.success) {
        setResults(response.data.recommendations);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      alert('Could not connect to the backend server. Make sure node index.js is running on port 5000!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#1A365D', marginBottom: '5px' }}>CareerHub AI</h1>
        <p style={{ color: '#4A5568' }}>Personalized Career & Placement Assistant</p>
      </header>

      {/* Input Form */}
      <div style={{ background: '#F7FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '24px', marginBottom: '30px' }}>
        <h3>Enter Your Technical & Soft Skills</h3>
        <p style={{ color: '#718096', fontSize: '14px' }}>Separate skills with commas (e.g., Python, SQL, HTML, React)</p>
        
        <form onSubmit={handleAnalyze} style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="Python, SQL, HTML, React, Node.js..."
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #CBD5E0', fontSize: '16px' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px 24px', background: '#3182CE', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }}
          >
            {loading ? 'Analyzing...' : 'Analyze Career Fit'}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {results.length > 0 && (
        <div>
          <h2>Recommended Career Paths & Skill Gaps</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {results.map((rec, index) => (
              <div key={index} style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '20px', background: '#FFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, color: '#2B6CB0' }}>{rec.role}</h3>
                  <span style={{ background: '#EBF8FF', color: '#2B6CB0', fontWeight: 'bold', padding: '6px 12px', borderRadius: '20px' }}>
                    Match: {rec.matchPercentage}%
                  </span>
                </div>

                <div style={{ marginTop: '15px' }}>
                  <strong>Acquired Skills:</strong>{' '}
                  {rec.acquiredSkills.length > 0 ? rec.acquiredSkills.join(', ') : 'None'}
                </div>

                <div style={{ marginTop: '10px', color: '#C53030' }}>
                  <strong>Missing Skills (Skill Gap):</strong>{' '}
                  {rec.missingSkills.length > 0 ? rec.missingSkills.join(', ') : 'None! You are 100% target ready.'}
                </div>

                <div style={{ marginTop: '15px', background: '#EDF2F7', padding: '10px 15px', borderRadius: '6px' }}>
                  <strong>Recommended Learning Resources:</strong>
                  <ul style={{ margin: '5px 0 0 20px', padding: 0 }}>
                    {rec.learningResources.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;