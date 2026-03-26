export interface Project {
  id: number
  title: string
  category: "software" | "design" | "both"
  tags: string[]
  description: string
  role: string
  learning: string
  date: string
  image: string
  prototypeImage: string
  showAllButtons?: boolean
  githubUrl?: string
  figmaUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 10,
    title: "BraillePhonics+: Inclusive Braille Literacy System",
    category: "both",
    tags: ["React", "TypeScript", "Next.js", "Supabase", "SQL", "Python", "Raspberry Pi"],
    description:
      "BraillePhonics+ is an inclusive, AI-enhanced Braille literacy system designed to support early learners—especially visually impaired and deafblind children—by providing real-time multimodal feedback through speech and haptics. It integrates RFID-enabled tactile tiles, embedded systems, and a web-based dashboard to deliver interactive learning experiences in letter recognition, phonics, and basic word formation, making Braille education more engaging, accessible, and effective.",
    role: "Researcher & Developer - developed and integrated the system’s hardware and software, including RFID detection, feedback mechanisms, and the web dashboard.",
    learning:
      "Gained practical experience in developing assistive technology systems by combining embedded systems, web development, and AI concepts, while strengthening skills in problem-solving, system integration, and designing inclusive, user-centered solutions.",
    date: "Sep 2025 - May 2026",
    image: "",
    prototypeImage: "",
  },
  {
    id: 8,
    title: "HanapBuhay",
    category: "both",
    tags: ["React", "Next.js", "TypeScript", "Figma", "UI/UX", "Web Design", "Marketplace"],
    description:
      "A web-based local freelance marketplace built with React, Next.js, and TypeScript that connects clients with skilled informal workers for everyday services like carpentry, tutoring, and babysitting. Includes job posting, worker profiles, chat, and ratings for trust-building.",
    role: "UI/UX Designer & Front-End Developer – designed marketplace workflows, client-worker interactions, and implemented front-end components for core platform features.",
    learning:
      "Gained experience in marketplace platform design, building two-sided user flows, and applying front-end implementation with React and Next.js to transform prototypes into functional components.",
    date: "Aug 2025 - Oct 2025",
    image: "/projects/hanapbuhay-logo.png",
    prototypeImage: "/projects/hanapbuhay-prototype.png",
    showAllButtons: true,
    figmaUrl: "https://www.figma.com/design/YVzfggYikPHsV2M5YtASrI/PROTOTYPE-HANAPBUHAY?t=89MiTZsaOZ96Bh6P-1",
    githubUrl: "https://github.com/SeesonLau/hanapbuhay.git",
    liveUrl: "https://hanapbuhay.vercel.app/",
  },
  {
    id: 9,
    title: "Gearfolio",
    category: "design",
    tags: ["Figma", "Canva", "UI/UX", "Web Design", "Career Platform"],
    description:
      "GearFolio functions as a personal career assistant, it evaluates a user’s skills, projects, and goals to create customized portfolio structures, identify skill gaps, and recommend relevant learning resources, while also enabling users to publish their portfolio directly.",
    role: "UI/UX Designer - responsible for crafting the Account Settings page using Figma, designing key interface components including the logo, navigation bar, and color system, and contributing to the overall user experience through continuous feedback and design improvements during prototyping.",
    learning:
      "Gained hands-on experience in designing user-centered interfaces, developing cohesive visual systems, and improving usability through iterative feedback and prototyping.",
    date: "Mar 2025 - Apr 2025",
    image: "/projects/gearfolio-logo.png",
    prototypeImage: "/projects/gearfolio-projects.png",
  },
  {
    id: 7,
    title: "Whaloo",
    category: "both",
    tags: ["Flutter", "Dart", "Android", "Figma", "UI/UX", "Mobile Design", "Education"],
    description:
      "A mobile app built with Flutter and Dart for managing study materials on Android. Features include tracking deadlines, organizing class schedules, and creating to-do lists. Designed in Figma with front-end development implementation.",
    role: "UI/UX Designer & Front-End Developer – built mobile prototypes and implemented UI screens for academic management.",
    learning:
      "Learned how to design education-focused productivity apps, integrate scheduling features, and transition prototypes into front-end code using Flutter.",
    date: "Feb 2025 - Apr 2025",
    image: "/projects/whaloo-logo.png",
    prototypeImage: "/projects/whaloo-prototype.png",
    showAllButtons: true,
    figmaUrl: "https://www.figma.com/design/SpJIYZsLGrxLTC6iDHmeJK/Whaloo-Prototype?t=89MiTZsaOZ96Bh6P-1",
    githubUrl: "https://github.com/settery7/whaloo.git",
  },
  {
    id: 6,
    title: "OptiCare",
    category: "design",
    tags: ["Figma", "UI/UX", "Web Design", "Healthcare"],
    description:
      "A web-based UI/UX prototype for patient record management, diagnosis, and appointment scheduling for optometry clinics.",
    role: "UI/UX Designer – designed web dashboards and patient record forms using Figma.",
    learning:
      "Learned how to handle input-heavy healthcare interfaces, structure medical data systems, and apply usability principles in clinical workflows.",
    date: "Oct 2024 - Dec 2024",
    image: "/projects/opticare-logo.png",
    prototypeImage: "/projects/opticare-prototype.png",
    figmaUrl: "https://www.figma.com/design/yEy8Fb8PxIs2Am8pZB2rXx/OPTICARE-VER.1?t=yDu0fdAPyzSfVAWw-1",
  },
  {
    id: 5,
    title: "SmashZone: Badminton x Tennis Booking Hub",
    category: "design",
    tags: ["Figma", "UI/UX", "Mobile Design", "Sports"],
    description:
      "A mobile UI/UX prototype for a badminton and tennis appointment booking system. Focused on creating intuitive layouts, clean forms, and simple navigation.",
    role: "UI/UX Designer – created high-fidelity prototype and designed user flows for booking sports courts.",
    learning: "Developed strong skills in Figma prototyping, user-friendly booking workflows, and UI consistency.",
    date: "Oct 2024 - Nov 2024",
    image: "/projects/smashzone-mobile-logo.png",
    prototypeImage: "/projects/smashzone-mobile-prototype.png",
    figmaUrl: "https://www.figma.com/design/aNDjXDKBJGzWdBrM7qXA0e/SmashZone?node-id=0-1&t=FJAsf8IxPiB8aa6V-1",
  },
  {
    id: 3,
    title: "MentorMatch",
    category: "both",
    tags: [".NET MAUI", "Figma", "UI/UX", "Mobile Design", "Mentorship"],
    description:
      "A Tinder-like platform for mentor-mentee matching. Users start as mentees and can apply to become mentors. Built using .NET MAUI with swipe-based mentor discovery and profile transitions.",
    role: "UI/UX Designer & Front-End Developer – designed Figma prototype and implemented front-end features using .NET MAUI.",
    learning:
      "Learned how to create role-based systems, integrate swipe functionality, and design engaging user flows for mentorship platforms.",
    date: "Jun 2024 - Jul 2024",
    image: "/projects/mentormatch-logo.png",
    prototypeImage: "/projects/mentormatch-prototype.png",
    showAllButtons: true,
    figmaUrl:
      "https://www.figma.com/design/T1zhA46vmmzbTA8egCJVTH/MentorMatch-Prototype?node-id=0-1&t=JYwehYTbv8eUScCi-1",
    githubUrl: "https://github.com/SeesonLau/ProjectMentorMatch.git",
  },
  {
    id: 2,
    title: "SmashZone: Badminton x Tennis Booking Hub",
    category: "software",
    tags: ["Windows Form", "OOP", "Booking System", "C#"],
    description:
      "A badminton and tennis appointment booking system using C# Windows Form. Integrated OOP principles for efficient management of reservations, scheduling, and availability tracking.",
    role: "Full-Stack Developer – designed the Windows Form UI and developed backend logic for managing booking and scheduling.",
    learning:
      "Improved knowledge in desktop app development, handling booking logic, and applying object-oriented design for system scalability.",
    date: "Mar 2024 - Apr 2024",
    image: "/projects/smashzone-windows-logo.png",
    prototypeImage: "/projects/smashzone-windows-prototype.png",
    githubUrl: "https://github.com/angeliedejer/SmashZone-BadmintonxTennis-BookingHub.git",
  },
  {
    id: 1,
    title: "BaonBuddy",
    category: "software",
    tags: ["C#", "OOP", "Console App", "Finance"],
    description:
      "A simplified expense monitoring system using C# Console Application with OOP principles to help students track allowances and daily spending.",
    role: "Full-Stack Developer – handled both the backend logic (OOP-based expense tracking) and console-based user interface.",
    learning:
      "Learned how to apply object-oriented programming concepts in real-world finance tracking, and how to build simple yet effective console applications.",
    date: "Oct 2023 - Dec 2023",
    image: "/projects/baonbuddy-logo.png",
    prototypeImage: "/projects/baonbuddy-prototype.png",
  },
]
