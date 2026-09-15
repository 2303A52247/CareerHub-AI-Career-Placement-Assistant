// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Career database matching the presentation requirements
const CAREER_DATABASE = [
  {
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git"],
    learningResources: ["React Documentation", "Node.js Crash Course", "Full-Stack Bootcamp"]
  },
  {
    role: "Data Analyst",
    skills: ["Python", "SQL", "Excel", "Tableau", "Power BI", "Statistics"],
    learningResources: ["SQL for Data Analysis", "Python Data Science Handbook", "Tableau Basics"]
  },
  {
    role: "AI / ML Engineer",
    skills: ["Python", "Math", "TensorFlow", "PyTorch", "SQL", "Data Structures"],
    learningResources: ["Machine Learning Specialization", "Deep Learning Fundamentals", "Python ML Guide"]
  }
];

// Health Check API
app.get('/', (req, res) => {
  res.send('CareerHub AI API Server is running');
});

// Skill Gap Analysis & Recommendation API Endpoint
app.post('/api/analyze', (req, res) => {
  const { userSkills = [] } = req.body;

  const recommendations = CAREER_DATABASE.map((item) => {
    const userSkillsUpper = userSkills.map(s => s.toLowerCase());
    
    const acquiredSkills = item.skills.filter(skill => 
      userSkillsUpper.includes(skill.toLowerCase())
    );
    
    const missingSkills = item.skills.filter(skill => 
      !userSkillsUpper.includes(skill.toLowerCase())
    );

    const matchPercentage = Math.round((acquiredSkills.length / item.skills.length) * 100);

    return {
      role: item.role,
      matchPercentage,
      acquiredSkills,
      missingSkills,
      learningResources: item.learningResources
    };
  });

  recommendations.sort((a, b) => b.matchPercentage - a.matchPercentage);

  res.json({ success: true, recommendations });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});