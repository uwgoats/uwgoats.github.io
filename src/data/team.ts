export interface TeamMember {
  name: string;
  subsystem: 'Mechanical' | 'Electrical' | 'Controls' | 'Software';
  linkedin: string;
  photo: string;
}

// Replace `photo` with a real image in `public/team/` (e.g. "/team/jane-doe.jpg")
// and `linkedin` with each person's profile URL.
export const team: TeamMember[] = [
  { name: 'Team Member 1', subsystem: 'Mechanical', linkedin: 'https://www.linkedin.com/', photo: '/team/placeholder-avatar.svg' },
  { name: 'Team Member 2', subsystem: 'Electrical', linkedin: 'https://www.linkedin.com/', photo: '/team/placeholder-avatar.svg' },
  { name: 'Team Member 3', subsystem: 'Controls', linkedin: 'https://www.linkedin.com/', photo: '/team/placeholder-avatar.svg' },
  { name: 'Team Member 4', subsystem: 'Software', linkedin: 'https://www.linkedin.com/', photo: '/team/placeholder-avatar.svg' },
  { name: 'Team Member 5', subsystem: 'Software', linkedin: 'https://www.linkedin.com/', photo: '/team/placeholder-avatar.svg' },
];
