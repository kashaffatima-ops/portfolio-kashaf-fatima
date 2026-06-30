export const personalInfo = {
  name: 'Kashaf Fatima',
  title: 'Software Quality Assurance Engineer',
  tagline: 'Ensuring Software Quality Through Precision, Testing Excellence, and Continuous Improvement.',
  location: 'Islamabad, Pakistan',
  email: 'kashaf.fatimaa132@gmail.com',
  phone: '+92 3466208273',
  linkedin: 'https://www.linkedin.com/in/kashaf-fatima-199ab6323/',
  github: 'https://github.com/kashaffatima-ops',
  roles: [
    'Software Quality Assurance Engineer',
    'Manual Testing Specialist',
    'QA Automation Engineer',
    'Quality Engineering Professional',
  ],
  summary: `Detail-oriented Software Quality Assurance Engineer with hands-on experience in manual testing, test automation, defect lifecycle management, and software quality engineering. Proficient in Cypress, JUnit, Postman, and Jira to design and execute robust verification plans.

Equipped with a solid foundation in software engineering, test case design, boundary value analysis, static code analysis, and continuous integration workflows.

Committed to delivering reliable, user-centric software solutions through structured quality assurance methodologies and meticulous attention to detail.`,
}

export const stats = [
  { label: 'QA Portfolio Projects', value: 5, suffix: '+' },
  { label: 'Test Cases Designed', value: 47, suffix: '+' },
  { label: 'Source Files Reviewed', value: 20, suffix: '+' },
  { label: 'Technologies Mastered', value: 15, suffix: '+' },
]

export const experience = [
  {
    id: 1,
    title: 'Teaching Assistant & Lab Demonstrator',
    company: 'FAST NUCES Islamabad',
    duration: 'January 2025 – June 2026',
    type: 'Academic',
    color: '#3B82F6',
    responsibilities: [
      'Evaluated programming assignments, automated test suites, and projects for 100+ CS students, verifying code standards and correctness.',
      'Conducted constructive code reviews and guided students on debugging techniques, logical error troubleshooting, and software quality concepts.',
      'Assisted in lab instruction and grading for Operating Systems, Computer Networks, and Design & Analysis of Algorithms.',
      'Reproduced, documented, and helped resolve environment setup and technical compilation issues in student workstations.',
    ],
    skills: ['Code Review', 'Debugging', 'Operating Systems', 'Technical Mentorship', 'Quality Standards'],
  },
  {
    id: 2,
    title: 'AI & DevOps Intern',
    company: 'Cognara Training',
    duration: 'December 2025 – May 2026',
    type: 'Internship',
    color: '#60A5FA',
    responsibilities: [
      'Contributed to cross-platform React Native and web applications with a focus on UI verification, stability, and UX alignment.',
      'Collaborated on RAG-based AI system integration, validating response accuracy and testing API endpoints under various edge cases.',
      'Participated actively in Agile/Scrum processes, including daily standups, task prioritization, and review sessions.',
      'Practiced standard Git branch management, code collaboration, and learned automated testing configurations within CI/CD pipelines.',
    ],
    skills: ['React Native', 'API Testing', 'Agile/Scrum', 'CI/CD Concepts', 'Git'],
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'Quantum Edge LLC',
    duration: '2024',
    type: 'Internship',
    color: '#2563EB',
    responsibilities: [
      'Contributed to the development and gameplay logic of a first-person shooter game built with Unity and C#.',
      'Designed and executed functional manual test passes to identify gameplay bugs, collision issues, and logical discrepancies.',
      'Partnered with technical designers to optimize scene rendering and troubleshoot performance bottlenecks to improve frame rates.',
    ],
    skills: ['Unity', 'C#', 'Game Testing', 'Manual QA', 'Performance Optimization'],
  },
  {
    id: 4,
    title: 'Software Developer Intern',
    company: 'Software Engineering & Automation Lab – FAST NUCES',
    duration: 'June 2025 – August 2025',
    type: 'Research',
    color: '#3B82F6',
    responsibilities: [
      'Developed user workflows and database schemas for a Flutter & Firebase-based society management platform.',
      'Conducted system testing, interface verification, and validation of real-time database queries to ensure smooth synchronization.',
      'Drafted clear, reproducible bug reports and collaborated on resolving UI anomalies and edge cases.',
    ],
    skills: ['Flutter', 'Firebase', 'System Testing', 'UI/UX Verification', 'Bug Tracking'],
  },
]

export const skillCategories = [
  {
    title: 'Testing & QA',
    icon: 'testing',
    color: '#2563EB',
    skills: [
      'Manual Testing',
      'Automation Testing',
      'Regression Testing',
      'Smoke Testing',
      'Responsive UI Testing',
      'API Testing',
      'Bug Reporting',
      'Test Case Design',
      'Unit Testing',
      'Black Box Testing',
      'White Box Testing',
    ],
  },
  {
    title: 'Automation Tools',
    icon: 'automation',
    color: '#60A5FA',
    skills: ['Cypress', 'Postman', 'Jira', 'JUnit'],
  },
  {
    title: 'Programming Languages',
    icon: 'code',
    color: '#93C5FD',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'C#', 'SQL', 'NoSQL'],
  },
  {
    title: 'Development Technologies',
    icon: 'dev',
    color: '#3B82F6',
    skills: ['Flutter', 'Firebase', 'REST APIs', 'Git', 'GitHub'],
  },
  {
    title: 'DevOps & Platforms',
    icon: 'devops',
    color: '#60A5FA',
    skills: ['Docker', 'Kubernetes', 'Android Studio', 'VS Code', 'Visual Studio'],
  },
  {
    title: 'Professional Skills',
    icon: 'professional',
    color: '#93C5FD',
    skills: [
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Attention to Detail',
      'Critical Thinking',
      'Analytical Thinking',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Jira-Based Manual Testing & Defect Analysis',
    category: 'Manual Testing & Defect Analysis',
    categoryColor: '#3B82F6',
    description:
      'A comprehensive manual testing project for an Event Management System implementing the complete Software Testing Life Cycle (STLC). Designed 47 test cases, managed defect lifecycle through Jira, and created detailed bug reports with severity classification.',
    github: 'https://github.com/kashaffatima-ops/Jira-manual-testing-project',
    technologies: ['Jira', 'Manual Testing', 'Defect Analysis', 'STLC', 'Bug Reporting'],
    highlights: [
      '47 Test Cases Designed and Executed',
      'Jira Dashboard Creation',
      'Defect Lifecycle Management',
      'Bug Reporting & Severity Classification',
      'STLC Implementation',
      'Event Management System Testing',
    ],
    metrics: [
      { label: 'Test Cases', value: '47' },
      { label: 'Defects Found', value: '15+' },
      { label: 'STLC Phases', value: '6' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    featured: true,
  },
  {
    id: 2,
    title: 'POS System Code Review & Refactoring Report',
    category: 'Test Design & QA Documentation',
    categoryColor: '#60A5FA',
    description:
      'Comprehensive static analysis and code review of a Point-of-Sale system involving 20 source files. Applied systematic refactoring techniques, identified security vulnerabilities, and improved overall code maintainability and quality metrics.',
    github: 'https://github.com/kashaffatima-ops/Static-Analysis-Code-Review-Refactoring-POS-System',
    technologies: ['Java', 'JUnit', 'Static Analysis', 'Refactoring', 'SonarQube'],
    highlights: [
      '20 Source Files Reviewed',
      'Refactoring Applied',
      'Static Analysis Performed',
      'Security Assessment Completed',
      'Maintainability Improvements',
      'Code Quality Metrics',
    ],
    metrics: [
      { label: 'Files Reviewed', value: '20' },
      { label: 'Issues Fixed', value: '30+' },
      { label: 'Quality Score', value: '↑40%' },
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    featured: true,
  },
  {
    id: 3,
    title: 'Online Event Registration: EP & BVA Testing',
    category: 'Test Design & QA Documentation',
    categoryColor: '#60A5FA',
    description:
      'Black box testing of an Online Event Registration System using Equivalence Partitioning (EP) and Boundary Value Analysis (BVA) techniques. Comprehensive validation testing with systematic test case design covering edge cases and boundary conditions.',
    github: 'https://github.com/kashaffatima-ops/Black-box-testing-by-EP-BVA',
    technologies: ['EP', 'BVA', 'Black Box Testing', 'QA Documentation', 'Test Design'],
    highlights: [
      'Equivalence Partitioning Applied',
      'Boundary Value Analysis',
      'Black Box Testing Methodology',
      'Validation Testing',
      'Edge Case Coverage',
      'Systematic Test Design',
    ],
    metrics: [
      { label: 'Test Partitions', value: '12+' },
      { label: 'Boundary Tests', value: '24+' },
      { label: 'Coverage', value: '95%' },
    ],
    gradient: 'from-violet-500/20 to-purple-500/20',
    featured: false,
  },
  {
    id: 4,
    title: 'POS System JUnit Testing & Code Coverage',
    category: 'Automation Testing & Code Quality',
    categoryColor: '#3B82F6',
    description:
      'Automated unit testing of a POS System using JUnit framework with comprehensive code coverage analysis via EclEmma. Achieved high coverage metrics across statement, decision, and condition coverage criteria, with systematic defect identification.',
    github: 'https://github.com/kashaffatima-ops/junit-testing-pos-system',
    technologies: ['Java', 'JUnit', 'EclEmma', 'Code Coverage', 'Unit Testing'],
    highlights: [
      'JUnit Testing Framework',
      'Statement Coverage Analysis',
      'Decision Coverage Analysis',
      'Condition Coverage Analysis',
      'Defect Identification',
      'EclEmma Integration',
    ],
    metrics: [
      { label: 'Statement Coverage', value: '85%+' },
      { label: 'Unit Tests', value: '30+' },
      { label: 'Defects Found', value: '8+' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    featured: true,
  },
  {
    id: 5,
    title: 'TradXSell Cypress Automation & ECP/BVA Testing',
    category: 'Automation Testing & Code Quality',
    categoryColor: '#2563EB',
    description:
      'End-to-end test automation of TradXSell e-commerce platform using Cypress with JavaScript. Combined automation testing with manual EP/BVA testing and comprehensive Jira defect management for a complete QA workflow implementation.',
    github: 'https://github.com/kashaffatima-ops/tradxsell-ecp-bva-cypress-test-automation',
    technologies: ['Cypress', 'JavaScript', 'Jira', 'ECP', 'BVA', 'E2E Testing'],
    highlights: [
      'Cypress Automation Framework',
      'End-to-End Testing',
      'ECP & BVA Methods',
      'Jira Defect Reporting',
      'E-commerce Testing',
      'Full QA Workflow',
    ],
    metrics: [
      { label: 'Automated Tests', value: '20+' },
      { label: 'Jira Tickets', value: '10+' },
      { label: 'Test Coverage', value: '90%+' },
    ],
    gradient: 'from-green-500/20 to-teal-500/20',
    featured: true,
  },
]

export const education = {
  degree: 'Bachelor of Science in Software Engineering',
  university: 'National University of Computer and Emerging Sciences (FAST NUCES)',
  location: 'Islamabad, Pakistan',
  duration: '2022 – 2026',
  cgpa: '3.42 / 4.00',
  highlights: [
    "Dean's List of Honors – 6th & 7th Semester",
    'Silver Medal – Outstanding Academic Performance (7th Semester)',
    'Teaching Assistant in multiple courses',
    'Active member of Software Engineering & Automation Lab',
  ],
}

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    color: '#2563EB',
    icon: 'aws',
    badge: 'AWS',
  },
  {
    title: "Dean's List of Honors",
    issuer: 'FAST NUCES Islamabad',
    year: '6th & 7th Semester',
    color: '#60A5FA',
    icon: 'honor',
    badge: 'DEAN',
  },
  {
    title: 'Silver Medal – Academic Excellence',
    issuer: 'FAST NUCES Islamabad',
    year: '7th Semester',
    color: '#93C5FD',
    icon: 'medal',
    badge: 'MED',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
