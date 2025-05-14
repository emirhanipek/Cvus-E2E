

export default function generateRandomTitle() {
  const titles = [
    'Frontend Developer',
    'Backend Engineer',
    'Full Stack Developer',
    'QA Tester',
    'Mobile App Developer',
    'DevOps Engineer',
    'Software Engineer',
    'Automation Specialist',
    'Cloud Architect',
    'AI Developer',
  ];

  const random = titles[Math.floor(Math.random() * titles.length)];
  const suffix = Math.floor(Math.random() * 1000); // örn: Software Engineer 847
  return `${random} TEST E2E ${suffix}`;
}