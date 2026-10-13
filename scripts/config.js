/**
 * PORTFOLIO CONFIGURATION - THARANGINI SIDDENKI
 * 
 * You can easily update your contact details and links in this configuration file.
 */

const CONFIG = {
  // Personal Details
  name: "Tharangini Siddenki",
  role: "UI/UX Designer & Web Developer",
  subRole: "Creative Developer · Computer Science Student",
  
  // Education
  education: [
    {
      institution: "BITS Pilani",
      degree: "B.Sc. in Computer Science",
      status: "Currently Pursuing"
    },
    {
      institution: "NxtWave Institute of Advanced Technologies",
      degree: "Computer Science & Full Stack Specialization",
      status: "Currently Pursuing"
    }
  ],

  // Contact Information
  // Change your email address here! It will automatically update across the entire website.
  email: "tharangini.siddenki@gmail.com", // <-- EDIT THIS EMAIL IF NEEDED
  
  // Social & Profiles
  socials: {
    github: "https://github.com/siddenkitharangini",
    linkedin: "https://www.linkedin.com/in/tharangini-siddenki",
    username: "siddenkitharangini"
  },

  // GitHub API integration
  githubApi: {
    username: "siddenkitharangini",
    endpoint: "https://api.github.com"
  }
};

// Export to window for global access
window.PORTFOLIO_CONFIG = CONFIG;
