export interface TeamMember {
  name: string;
  subsystem: 'Mechanical' | 'Electrical' | 'Controls' | 'Software';
  linkedin: string;
  photo: string;
}

// Replace `photo` with a real image in `public/team/` (e.g. "/team/jane-doe.jpg")
// and `linkedin` with each person's profile URL.
export const team: TeamMember[] = [
  { name: 'Ethan Ahn', subsystem: 'Electrical & Controls', linkedin: 'https://www.linkedin.com/in/ethanahn/', photo: '/team/ethan.jpg' },
  { name: 'Tong Zhang', subsystem: 'Behaviour & Planning', linkedin: 'https://www.linkedin.com/in/tongzh/', photo: '/team/tong.jpg' },
  { name: 'Camron Sabahi-Pourkashani', subsystem: 'Mechanical & Controls', linkedin: 'https://www.linkedin.com/in/camron-sabahi/', photo: '/team/camron.jpg' },
  { name: 'David Yen', subsystem: 'Mechanical & Electrical', linkedin: 'https://www.linkedin.com/in/davidyenn/', photo: '/team/dtyen.jpg' },
  { name: 'Karthigan Uthayan', subsystem: 'Behaviour & Planning', linkedin: 'https://www.linkedin.com/in/karthiganu2004/', photo: '/team/karthi.png' },
];
