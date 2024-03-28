export interface Member {
  first: string,
  last: string,
  bio: string
  image: string
  socials?: {
    github?: string
    instagram?: string
    linkedin?: string
    twitter?: string
    youtube?: string
    twitch?: string
    email?: string
  }
}

export const justin_foss: Member = {
  first: 'Justin',
  last: 'Foss',
  bio: "Justin got involved with FIRST in 2003 as a student and never left. He is currently working as a Quality Engineer at Prodrive Techolonies in The Netherlands. He's an alumni of 176 and has mentored 229, 2168, 558 and 4481. Additionally he has volunteered within FIRST as a judge advisor, judge, referee, game announcer and robot inspector.",
  image: '/images/members/justin_foss.jpg',
}

export const steve_kaneb: Member = {
  first: 'Steve',
  last: 'Kaneb',
  bio: "Steve joined FIRST for the 2006 season with FRC190 and currently mentors FRC2910. He is the Lead CNC Operator at Swerve Drive Specialties, and tries to attend as many competitions as he can as a volunteer or mentor.",
  image: '/images/members/steve_kaneb.jpg',
}

export const dave_powers: Member = {
  first: 'Dave',
  last: 'Powers',
  bio: "Dave grew up around FIRST, his dad started a team in 1998 and he hasn't been able to escape since. Dave is a Senior Mechanical Engineer at Formlabs, an alumni of FRC228, and is the current lead mentor for FRC6328. In the past, he's mentored FRC1678, and has volunteeried as a Volunteer Coordinator and Master of Ceremonies. ",
  image: '/images/members/dave_powers.jpg',
}

export const matt_starke: Member = {
  first: 'Matt',
  last: 'Starke',
  bio: "Matt joined FIRST in 2003 as a freshman in high school with FRC340 and was hooked. In college, he mentored FRC 1126 and started team resources including FRC Designs and the Blue Alliance Blog. Currently, he is a Technology & Engineering Education Teacher at the Liverpool Central School District. He leads a Drone Technology program at his school at well as the VRC 174 robotics program.",
  image: '/images/members/matt_starke.jpg',
}

export const ruth_toomey: Member = {
  first: 'Ruth',
  last: 'Toomey',
  bio: "Ruth joined FIRST as a student in 2006 and never looked back. She is an aluma of 1735, has mentored with 190, 319, 1024, and is currently a mentor with 2713. Ruth also volunteers as a Judge across all FIRST programs, and as Master of Ceremonies and Game Announcing in FRC. She works for Sphero, Inc in Customer Success as the primary interface for deployment and robot support for end users.",
  image: '/images/members/ruth_toomey.jpg',
}

export const izzy_thalman: Member = {
  first: 'Izzy',
  last: 'Thalman',
  bio: "Izzy is an alumni of 2338 Gear it Forward, joining FRC as a junior in High School in 2017. She currently works as a System Engineer for Siemens. She also has been a FIRST Impact Award mentor since 2018, earning a total of 4 Regional Impact Awards with 6413 Degrees of Freedom and more recently, 498 The Cobra Commanders. She has also been a planning committee member of the Arizona Robotics League since its inception in 2022.",
  image: '/images/members/izzy_thalman.png',
}

export const karthik_kanagasabapathy: Member = {
  first: 'Karthik',
  last: 'Kanagasabapathy',
  bio: "Karthik Kanagsabapathy has designed competition robotics games that have been played by over 75,000 teams of students across the globe. He has won numerous awards for his dedication to furthering robotics education, including the prestigious Woodie Flowers Finalist Award for exemplary mentoring in FIRST. He was lead mentor for Team 1114 from 2004-2016, where he was a pioneer of FIRST analytics, helping invent the popular stat 'OPR'. He also hosts various international robotics events, having worked with media personalities such Mythbusters' Grant Imahara and Kari Byron, gave an internationally recognized TEDx talk, has hosted televised robotics specials on ESPN and CBS, and consulted with the writing and production rooms for episodes of Degrassi featuring Drake.",
  image: '/images/members/karthik_kanagasabapathy.png',
}

export const mason_markee: Member = {
  first: 'Mason',
  last: 'Markee',
  bio: "Mason Markee ignited his passions for robotics during middle school years starting with BEST Robotics and graduating to the FIRST Robotics Competition. Mason actively participated as a student of Team 118, The Robonauts four years as a student. Mason rejoined the team as a mentor in 2008 and served as drive coach until 2016, the season Mason was honored to win the Woodie Flowers Finalist Award. Mason's professional career incudes working as an R&D Robotics Engineer for NASA developing earth bound and lunar prototype mobility systems, design consumer electronics, and a team leader creating innovative products in the field of surgical robotics. Today Mason serves as Vice President of Engineering at Rugged Robotics where they are creating innovative robotic platforms to improve efficiency on the consturction site.",
  image: '/images/members/mason_markee.png',
}

export const allMembers: Record<string, Member> = {
  steve: steve_kaneb,
  matt: matt_starke,
  ruth: ruth_toomey,
  mason: mason_markee,
  karthik: karthik_kanagasabapathy,
  justin: justin_foss,
  izzy: izzy_thalman,
  dave: dave_powers,
}