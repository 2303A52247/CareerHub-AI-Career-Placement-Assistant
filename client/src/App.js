import './App.css';
import React, { useState } from 'react';
import './App.css';

const careerData = [
  {
    role: 'AI / ML Engineer',
    match: 87,
    icon: '🤖',
    color: 'purple',
    acquired: ['Python', 'Machine Learning', 'SQL'],
    missing: ['Deep Learning', 'TensorFlow', 'Docker'],
  },
  {
    role: 'Data Scientist',
    match: 82,
    icon: '📊',
    color: 'blue',
    acquired: ['Python', 'SQL', 'Statistics'],
    missing: ['Deep Learning', 'Power BI'],
  },
  {
    role: 'Software Engineer',
    match: 79,
    icon: '💻',
    color: 'green',
    acquired: ['Python', 'React', 'JavaScript'],
    missing: ['System Design', 'Testing'],
  },
  {
    role: 'Data Analyst',
    match: 74,
    icon: '📈',
    color: 'orange',
    acquired: ['SQL', 'Python', 'Excel'],
    missing: ['Power BI', 'Advanced Statistics'],
  },
];

const skillGaps = [
  { name: 'Python', level: 90, status: 'Strong', type: 'good' },
  { name: 'SQL', level: 78, status: 'Good', type: 'good' },
  { name: 'Machine Learning', level: 68, status: 'Improving', type: 'medium' },
  { name: 'Deep Learning', level: 42, status: 'Needs Work', type: 'warning' },
  { name: 'TensorFlow / PyTorch', level: 32, status: 'Needs Work', type: 'warning' },
  { name: 'Docker', level: 25, status: 'Beginner', type: 'warning' },
];

const roadmap = [
  { title: 'Python & Programming', status: 'Completed', progress: 100 },
  { title: 'Statistics & Mathematics', status: 'Completed', progress: 100 },
  { title: 'Machine Learning', status: 'In Progress', progress: 65 },
  { title: 'Deep Learning', status: 'Upcoming', progress: 0 },
  { title: 'TensorFlow / PyTorch', status: 'Upcoming', progress: 0 },
  { title: 'Real-World Projects', status: 'Upcoming', progress: 0 },
];

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [skillsInput, setSkillsInput] = useState('');
  const [assessmentDone, setAssessmentDone] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Career Assessment', icon: '🎯' },
    { name: 'Skill Gap Analysis', icon: '🧩' },
    { name: 'Career Recommendations', icon: '💼' },
    { name: 'Learning Roadmap', icon: '📚' },
    { name: 'Resume Analyzer', icon: '📝' },
    { name: 'Interview Preparation', icon: '🎤' },
    { name: 'Job Preparation', icon: '🚀' },
    { name: 'Progress Tracker', icon: '📊' },
    { name: 'Profile', icon: '👤' },
  ];

  const handleAssessment = (e) => {
    e.preventDefault();

    if (!skillsInput.trim()) return;

    setAssessmentDone(true);
  };

  const renderDashboard = () => (
    <>
      <PageHeader
        title="Welcome back, Student 👋"
        subtitle="Here's your current career preparation overview."
      />

      <div className="stats-grid">
        <StatCard
          icon="🎯"
          title="Career Readiness"
          value="78%"
          change="+8% this month"
          type="purple"
        />
        <StatCard
          icon="💻"
          title="Skills Profile"
          value="82%"
          change="12 skills tracked"
          type="blue"
        />
        <StatCard
          icon="🧩"
          title="Skill Gap"
          value="64%"
          change="3 priority skills"
          type="orange"
        />
        <StatCard
          icon="📄"
          title="Resume Score"
          value="78/100"
          change="Good foundation"
          type="green"
        />
      </div>

      <div className="dashboard-grid">
        <section className="panel large-panel">
          <div className="panel-heading">
            <div>
              <h2>Recommended Career Paths</h2>
              <p>Based on your current skills profile</p>
            </div>
            <button
              className="text-button"
              onClick={() => setActivePage('Career Recommendations')}
            >
              View all →
            </button>
          </div>

          <div className="career-grid">
            {careerData.slice(0, 3).map((career) => (
              <CareerCard key={career.role} career={career} />
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Placement Journey</h2>
              <p>Your current progress</p>
            </div>
          </div>

          <div className="journey-list">
            <JourneyItem title="Profile Setup" done />
            <JourneyItem title="Career Assessment" done />
            <JourneyItem title="Skill Analysis" done />
            <JourneyItem title="Learning Roadmap" active />
            <JourneyItem title="Resume Preparation" />
            <JourneyItem title="Interview Preparation" />
          </div>
        </section>
      </div>

      <section className="panel">
        <div className="panel-heading">
          <div>
            <h2>Learning Progress</h2>
            <p>Keep building the skills required for your target roles.</p>
          </div>
          <button
            className="text-button"
            onClick={() => setActivePage('Learning Roadmap')}
          >
            Open roadmap →
          </button>
        </div>

        <div className="progress-grid">
          <ProgressBar label="Python" value={80} />
          <ProgressBar label="SQL" value={70} />
          <ProgressBar label="Machine Learning" value={55} />
          <ProgressBar label="React" value={72} />
        </div>
      </section>

      <BackendNotice />
    </>
  );

  const renderAssessment = () => (
    <>
      <PageHeader
        title="Career Assessment"
        subtitle="Tell CareerHub AI about your skills, interests and goals."
      />

      <div className="assessment-layout">
        <section className="panel assessment-main">
          <div className="section-icon">🎯</div>
          <h2>Build Your Career Profile</h2>
          <p className="muted">
            Enter your current technical and soft skills. This frontend preview
            demonstrates how the future AI assessment will work.
          </p>

          <form onSubmit={handleAssessment} className="assessment-form">
            <label>Technical & Soft Skills</label>
            <input
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="Python, SQL, React, Machine Learning..."
            />

            <label>Area of Interest</label>
            <select defaultValue="Artificial Intelligence">
              <option>Artificial Intelligence</option>
              <option>Data Science</option>
              <option>Software Development</option>
              <option>Cloud Computing</option>
              <option>Cyber Security</option>
            </select>

            <label>Experience Level</label>
            <div className="choice-grid">
              <button type="button" className="choice active">
                Beginner
              </button>
              <button type="button" className="choice">
                Intermediate
              </button>
              <button type="button" className="choice">
                Advanced
              </button>
            </div>

            <button className="primary-button" type="submit">
              ✨ Analyze Career Fit
            </button>
          </form>

          {assessmentDone && (
            <div className="success-box">
              <strong>Assessment preview generated!</strong>
              <span>
                Your AI-powered analysis will be connected to the backend in
                the next development phase.
              </span>
            </div>
          )}
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>What You'll Get</h2>
              <p>CareerHub AI will analyze your profile.</p>
            </div>
          </div>

          <div className="feature-list">
            <FeatureItem icon="🎯" title="Career Match" text="Find suitable career paths." />
            <FeatureItem icon="🧩" title="Skill Gap" text="Identify missing skills." />
            <FeatureItem icon="📚" title="Learning Plan" text="Get a personalized roadmap." />
            <FeatureItem icon="💼" title="Placement Prep" text="Prepare for target roles." />
          </div>
        </section>
      </div>

      <BackendNotice />
    </>
  );

  const renderSkillGap = () => (
    <>
      <PageHeader
        title="Skill Gap Analysis"
        subtitle="Understand which skills you need to improve for your target career."
      />

      <section className="panel">
        <div className="target-role">
          <div>
            <span className="small-label">TARGET ROLE</span>
            <h2>🤖 AI / ML Engineer</h2>
          </div>
          <span className="match-badge">87% Match</span>
        </div>
      </section>

      <div className="skill-layout">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Your Skill Profile</h2>
              <p>Current estimated proficiency</p>
            </div>
          </div>

          <div className="skill-list">
            {skillGaps.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-title">
                  <strong>{skill.name}</strong>
                  <span className={`status ${skill.type}`}>
                    {skill.status}
                  </span>
                </div>

                <div className="bar-track">
                  <div
                    className={`bar-fill ${skill.type}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <span className="skill-number">{skill.level}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel priority-panel">
          <div className="panel-heading">
            <div>
              <h2>Priority Skills</h2>
              <p>Focus on these first</p>
            </div>
          </div>

          <PriorityItem number="01" title="Deep Learning" priority="High" />
          <PriorityItem number="02" title="TensorFlow / PyTorch" priority="High" />
          <PriorityItem number="03" title="Docker" priority="Medium" />

          <button className="primary-button full">
            📚 Generate Learning Plan
          </button>
        </section>
      </div>

      <BackendNotice />
    </>
  );

  const renderCareers = () => (
    <>
      <PageHeader
        title="Career Recommendations"
        subtitle="Explore career paths that match your current profile."
      />

      <div className="career-grid full-careers">
        {careerData.map((career) => (
          <CareerCard key={career.role} career={career} detailed />
        ))}
      </div>

      <BackendNotice />
    </>
  );

  const renderRoadmap = () => (
    <>
      <PageHeader
        title="Learning Roadmap"
        subtitle="Your step-by-step path toward becoming an AI / ML Engineer."
      />

      <section className="panel roadmap-panel">
        <div className="roadmap-header">
          <div>
            <span className="small-label">CAREER PATH</span>
            <h2>🤖 AI / ML Engineer</h2>
          </div>
          <div className="roadmap-score">
            <strong>58%</strong>
            <span>Overall Progress</span>
          </div>
        </div>

        <div className="roadmap">
          {roadmap.map((item, index) => (
            <div className="roadmap-item" key={item.title}>
              <div className={`roadmap-number ${item.status.toLowerCase().replace(' ', '-')}`}>
                {item.status === 'Completed' ? '✓' : index + 1}
              </div>

              <div className="roadmap-content">
                <div className="roadmap-title">
                  <strong>{item.title}</strong>
                  <span>{item.status}</span>
                </div>

                <div className="bar-track">
                  <div
                    className="bar-fill purple"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BackendNotice />
    </>
  );

  const renderResume = () => (
    <>
      <PageHeader
        title="Resume Analyzer"
        subtitle="Check your resume readiness for placement opportunities."
      />

      <div className="resume-layout">
        <section className="panel upload-panel">
          <div className="upload-icon">📄</div>
          <h2>Upload Your Resume</h2>
          <p className="muted">
            Upload a PDF resume to analyze your ATS readiness.
          </p>

          <div className="upload-box">
            <span>📎</span>
            <strong>Drop your resume here</strong>
            <small>PDF files supported</small>
            <button className="secondary-button">Browse Files</button>
          </div>

          <div className="coming-badge">Backend integration in progress</div>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Preview Analysis</h2>
              <p>Sample frontend demonstration</p>
            </div>
          </div>

          <div className="resume-score">
            <div className="score-circle">78</div>
            <div>
              <strong>Resume Score</strong>
              <p>Good foundation</p>
            </div>
          </div>

          <ProgressBar label="Skills Match" value={82} />
          <ProgressBar label="Projects" value={85} />
          <ProgressBar label="Experience" value={71} />
        </section>
      </div>
    </>
  );

  const renderInterview = () => (
    <>
      <PageHeader
        title="Interview Preparation"
        subtitle="Build confidence for technical and HR interviews."
      />

      <div className="prep-grid">
        <PrepCard icon="💻" title="Technical Interview" description="Practice technical questions based on your target role." button="Start Practice" />
        <PrepCard icon="👔" title="HR Interview" description="Prepare answers for common HR and behavioral questions." button="Start Practice" />
        <PrepCard icon="🧠" title="Aptitude Practice" description="Improve logical reasoning, quantitative and verbal skills." button="Start Practice" />
        <PrepCard icon="🤖" title="AI Mock Interview" description="Practice with an AI-powered mock interviewer." button="Coming Soon" disabled />
      </div>

      <BackendNotice />
    </>
  );

  const renderJobPrep = () => (
    <>
      <PageHeader
        title="Job Preparation"
        subtitle="Everything you need to prepare for campus placements."
      />

      <div className="prep-grid">
        <PrepCard icon="🧮" title="Aptitude Tests" description="Quantitative, logical reasoning and verbal practice." button="Practice Now" />
        <PrepCard icon="💻" title="Coding Practice" description="Prepare with programming and data structure problems." button="Practice Now" />
        <PrepCard icon="🏢" title="Company Preparation" description="Company-specific placement preparation resources." button="Explore" />
        <PrepCard icon="📋" title="Placement Checklist" description="Track everything before your placement drives." button="View Checklist" />
      </div>
    </>
  );

  const renderProgress = () => (
    <>
      <PageHeader
        title="Progress Tracker"
        subtitle="Track your complete career preparation journey."
      />

      <section className="panel">
        <div className="overall-progress">
          <div>
            <span className="small-label">OVERALL READINESS</span>
            <h2>68%</h2>
            <p>You're making steady progress toward placement readiness.</p>
          </div>

          <div className="large-progress">
            <div className="bar-track">
              <div className="bar-fill purple" style={{ width: '68%' }} />
            </div>
          </div>
        </div>
      </section>

      <div className="progress-card-grid">
        <ProgressCard icon="🎯" title="Career Assessment" value="100%" />
        <ProgressCard icon="🧩" title="Skill Analysis" value="82%" />
        <ProgressCard icon="📚" title="Learning" value="58%" />
        <ProgressCard icon="📝" title="Resume" value="78%" />
        <ProgressCard icon="🎤" title="Interview Prep" value="35%" />
        <ProgressCard icon="🚀" title="Job Preparation" value="45%" />
      </div>
    </>
  );

  const renderProfile = () => (
    <>
      <PageHeader
        title="My Profile"
        subtitle="Manage your CareerHub AI student profile."
      />

      <section className="panel profile-panel">
        <div className="profile-avatar">S</div>
        <div>
          <h2>Student Profile</h2>
          <p className="muted">B.Tech Computer Science & Engineering</p>
          <div className="tag-list">
            <span>Python</span>
            <span>SQL</span>
            <span>Machine Learning</span>
            <span>React</span>
          </div>
        </div>
      </section>

      <BackendNotice />
    </>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return renderDashboard();
      case 'Career Assessment':
        return renderAssessment();
      case 'Skill Gap Analysis':
        return renderSkillGap();
      case 'Career Recommendations':
        return renderCareers();
      case 'Learning Roadmap':
        return renderRoadmap();
      case 'Resume Analyzer':
        return renderResume();
      case 'Interview Preparation':
        return renderInterview();
      case 'Job Preparation':
        return renderJobPrep();
      case 'Progress Tracker':
        return renderProgress();
      case 'Profile':
        return renderProfile();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">C</div>
          <div>
            <strong>CareerHub</strong>
            <span>AI Career Assistant</span>
          </div>
        </div>

        <div className="sidebar-label">MAIN MENU</div>

        <nav>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? 'active' : ''
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="backend-status">
            <div className="status-dot" />
            <div>
              <strong>AI Engine</strong>
              <span>Backend in development</span>
            </div>
          </div>

          <button
            className="nav-item profile-link"
            onClick={() => setActivePage('Profile')}
          >
            <span className="profile-mini">S</span>
            <span>Student Profile</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="mobile-brand">
            <div className="brand-logo">C</div>
            <strong>CareerHub AI</strong>
          </div>

          <div className="topbar-actions">
            <button className="icon-button">🔔</button>
            <div className="top-profile">
              <div className="profile-mini">S</div>
              <div>
                <strong>Student</strong>
                <span>B.Tech CSE</span>
              </div>
            </div>
          </div>
        </header>

        <div className="page-container">{renderPage()}</div>
      </main>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="preview-label">FRONTEND PREVIEW</div>
    </div>
  );
}

function StatCard({ icon, title, value, change, type }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${type}`}>{icon}</div>
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{change}</small>
      </div>
    </div>
  );
}

function CareerCard({ career, detailed = false }) {
  return (
    <div className={`career-card ${career.color}`}>
      <div className="career-top">
        <div className="career-icon">{career.icon}</div>
        <span className="match-badge">{career.match}% Match</span>
      </div>

      <h3>{career.role}</h3>

      <div className="match-bar">
        <div style={{ width: `${career.match}%` }} />
      </div>

      {detailed && (
        <div className="career-details">
          <strong>Skills you have</strong>
          <div className="mini-tags">
            {career.acquired.map((skill) => (
              <span key={skill}>✓ {skill}</span>
            ))}
          </div>

          <strong>Skills to develop</strong>
          <div className="mini-tags warning-tags">
            {career.missing.map((skill) => (
              <span key={skill}>+ {skill}</span>
            ))}
          </div>
        </div>
      )}

      <button className="card-link">View Career Roadmap →</button>
    </div>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div className="progress-item">
      <div className="progress-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="bar-track">
        <div className="bar-fill purple" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function JourneyItem({ title, done, active }) {
  return (
    <div className="journey-item">
      <div className={`journey-dot ${done ? 'done' : ''} ${active ? 'active' : ''}`}>
        {done ? '✓' : ''}
      </div>
      <span>{title}</span>
      {done && <small>Completed</small>}
      {active && <small>In Progress</small>}
    </div>
  );
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function PriorityItem({ number, title, priority }) {
  return (
    <div className="priority-item">
      <div className="priority-number">{number}</div>
      <div>
        <strong>{title}</strong>
        <span className={priority === 'High' ? 'high' : 'medium'}>
          {priority} Priority
        </span>
      </div>
    </div>
  );
}

function PrepCard({ icon, title, description, button, disabled }) {
  return (
    <div className="prep-card">
      <div className="prep-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={disabled ? 'secondary-button' : 'primary-button'}>
        {button}
      </button>
    </div>
  );
}

function ProgressCard({ icon, title, value }) {
  return (
    <div className="progress-card">
      <div className="progress-card-icon">{icon}</div>
      <span>{title}</span>
      <strong>{value}</strong>
      <div className="bar-track">
        <div className="bar-fill purple" style={{ width: value }} />
      </div>
    </div>
  );
}

function BackendNotice() {
  return (
    <div className="backend-notice">
      <div className="backend-notice-icon">⚡</div>
      <div>
        <strong>AI Backend Integration in Progress</strong>
        <p>
          This module is currently presented as a frontend demonstration.
          AI-powered backend functionality will be connected in the next phase.
        </p>
      </div>
      <span>COMING SOON</span>
    </div>
  );
}

export default App;