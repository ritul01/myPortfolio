import project1 from "../assets/projects/project1.png"
import project2 from "../assets/projects/project2.png"

export const HERO_CONTENT = `I am Ritul Singh currently doing B.Tech in Electrical Engineering and
 Passionate to be a web developer and also doing DSA.`;

export const ABOUT = `I am a dedicated and versatile full stack developer
 with a passion for creating efficient and user-friendly web applications., I have worked with a variety 
  of technologies, including HTML, CSS, Javascript,React,  Node.js, MySQL, 
  and MongoDB. My journey in web development began with a deep curiosity 
  for how things work, and it has evolved into a career where I continuously 
  strive to learn and adapt to new challenges. I thrive in collaborative
   environments and enjoy
 solving complex problems to deliver high-quality solutions. Outside of coding,
  I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

  export const EXPERIENCE=[
    {
      year:"2023-Present",
      role:"Senior Member",
      company:"TESLA-NITP",
      description:`I am a senior member of TESLA-NITP, a student-run organization 
      that aims to promote innovation and entrepreneurship among students.`,
      Technologies:["Git", "Gitlab"]
    },
    {
      year:"2022-2023",
      role:"Summer Intern",
      company:"Mechanical Workshop Gorakhpur",
      description:`I worked as a summer intern at Mechanical Workshop Gorakhpur, where I was
      done a Project on Refrigeration and Air Conditioning`,
      Technologies:["MS Excel","MS Word"]
    }
  ]

export const PROJECTS=[
  {
    title:"Transparent Login Form",
    image:project1,
    description:`A simple login form with a transparent background and a modern design.
    Integrated responsive design, ensuring compatibility across devices and screen sizes`,
    technologies:["HTML", "CSS"],
  },
  {
    title:"Dance Website",
    image:project2,
    description:`A website for a dance school, featuring a modern design and a user-friendly interface.
    Designed an interactive and responsive layout to ensure seamless viewing across different devices
    Created a dedicated Sponsership section to highlight sponsers, with customizable tiers and visibility options.`,
    technologies:["HTML", "CSS", "JavaScript"],
  }
]

export const CONTACT={
  address:"Brahmputra Hostel, Ashok Rajpath, Patna, 800006, Bihar",
  phoneNo:"+91 7378125935",
  email:"ritulssoff000@gmail.com",
}