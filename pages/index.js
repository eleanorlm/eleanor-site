import Image from "next/future/image";
import Head from "next/head";
// TODO: Remove unneeded packages from package.json

import Header from "../components/header";
import Footer from "../components/footer";

import styles from "../styles/Home.module.scss";

// TODO: Split some of these off into component files

// The colors here have no semantic meaning and are for stylistic reasons only
const BADGES = {
  FRONTEND: { color: "ts", label: "Frontend" },
  SYSADMIN: { color: "danger", label: "System Administration" },
  SOFTWARE: { color: "secondary", label: "Software" },
  LANGUAGE: { color: "luau", label: "Language" },
  TOOLS: { color: "warning", label: "Tools" },
  DATABASES: { color: "primary", label: "Database" },
  BACKEND: { color: "info", label: "Backend" },
};

const SKILL_LEVELS = {
  novice: "Novice",
  competent: "Competent",
  experienced: "Experienced",
  proficient: "Proficient",

  // Not used
  // At least, not yet
  expert: "Expert",
};

const LOGO_BASE = `/assets/logos`;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Skill({ image, level, title, badges, imageBackground = "#eee", paddingLevel = "2" }) {
  return (
    <div className="col card-col">
      <div className="card h-100">
        <div className="card-body">
          {/* I don't use next/image here because it sucks */}
          {image && (
            <div className="d-flex justify-content-center mb-2">
              <div style={{ backgroundColor: imageBackground }} className={`rounded-4 p-${paddingLevel}`}>
                <img src={image} alt="" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
              </div>
            </div>
          )}

          <h5 className={`card-title mb-0`}>{title}</h5>
          <p className={`card-text mb-0`}>{level}</p>

          {badges && (
            <span className="small">
              {badges.map(({ color, label }) => (
                <span className={`badge text-bg-${color} me-1 rounded-pill`} key={`${title}_badge-${color}__${label}`}>
                  {label}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function getStaticProps() {
  // The skills array is shuffled for UX purposes, with the goal of spreading
  // everything around a bit more.
  const SKILLS = shuffle([
    // Web dev
    { title: "Node.js", level: SKILL_LEVELS.proficient, badges: [BADGES.LANGUAGE], image: "/assets/logos/node.png" },
    {
      title: "npm",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.TOOLS],
      image: `${LOGO_BASE}/npm.png`,
    },

    {
      title: "Express.js",
      level: SKILL_LEVELS.proficient,
      badges: [BADGES.BACKEND],
      image: `${LOGO_BASE}/express.svg`,
    },
    {
      title: "Fastify",
      level: SKILL_LEVELS.novice,
      badges: [BADGES.BACKEND],
      image: `${LOGO_BASE}/fastify.png`,
    },
    {
      title: "Webpack.js",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.FRONTEND],
      image: `${LOGO_BASE}/webpack.png`,
    },
    {
      title: "Babel.js",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.FRONTEND],
      image: `${LOGO_BASE}/babel.png`,
      imageBackground: "#323330",
    },
    {
      title: "MongoDB & Mongoose",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.DATABASES],
      image: `${LOGO_BASE}/mongodb.png`,
      imageBackground: "#001e2b",
    },
    { title: "MySQL", level: SKILL_LEVELS.competent, badges: [BADGES.DATABASES], image: `${LOGO_BASE}/mysql.png` },
    {
      title: "SQLite",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.DATABASES],
      image: `${LOGO_BASE}/sqlite.png`,
    },
    { title: "Redis", level: SKILL_LEVELS.competent, badges: [BADGES.DATABASES], image: `${LOGO_BASE}/redis.svg` },

    {
      title: "JavaScript",
      level: SKILL_LEVELS.proficient,
      badges: [BADGES.LANGUAGE],
      image: `${LOGO_BASE}/js.png`,
      imageBackground: "#f0db4f",
      paddingLevel: 1,
    },
    {
      title: "TypeScript",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.LANGUAGE],
      image: `${LOGO_BASE}/ts.png`,
      imageBackground: "#2d79c7",
      paddingLevel: 1,
    },

    { title: "HTML & CSS", level: SKILL_LEVELS.proficient, badges: [BADGES.FRONTEND], image: `${LOGO_BASE}/html.png` },
    {
      title: "React",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.FRONTEND],
      image: `${LOGO_BASE}/react.png`,
      imageBackground: "#222222",
    },
    { title: "Next.js", level: SKILL_LEVELS.competent, badges: [BADGES.FRONTEND], image: `${LOGO_BASE}/next.png` },
    { title: "Vue.js", level: SKILL_LEVELS.competent, badges: [BADGES.FRONTEND], image: `${LOGO_BASE}/vue.png` },
    {
      title: "SCSS (SASS)",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.FRONTEND, BADGES.LANGUAGE],
      image: `${LOGO_BASE}/sass.png`,
      imageBackground: "#CD6799",
    },

    {
      title: "Bootstrap",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.FRONTEND],
      image: `${LOGO_BASE}/bootstrap.png`,
    },
    {
      title: "Embedded Javascript (EJS)",
      level: SKILL_LEVELS.proficient,
      badges: [BADGES.FRONTEND, BADGES.LANGUAGE],
      image: `${LOGO_BASE}/ejs.png`,
      imageBackground: "#bac973",
    },
    {
      title: "Nunjucks",
      level: SKILL_LEVELS.proficient,
      badges: [BADGES.FRONTEND, BADGES.LANGUAGE],
      image: `${LOGO_BASE}/nunjucks.jpg`,
      imageBackground: "#1d4914",
    },

    // Systems
    {
      title: "Amazon Web Services",
      level: SKILL_LEVELS.novice,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/aws.png`,
      imageBackground: "#ee6900",
    },
    {
      title: "DigitalOcean",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/digitalocean.png`,
      imageBackground: "#0080ff",
      paddingLevel: 1,
    },
    { title: "Vercel", level: SKILL_LEVELS.competent, badges: [BADGES.SYSADMIN], image: `${LOGO_BASE}/vercel.svg` },
    {
      title: "Cloudflare",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/cloudflare.png`,
    },

    {
      title: "NGINX",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.SYSADMIN, BADGES.LANGUAGE],
      image: `${LOGO_BASE}/nginx.png`,
      imageBackground: "#008d36",
    },

    {
      title: "Bash",
      level: SKILL_LEVELS.novice,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/bash.png`,
    },
    {
      title: "Powershell",
      level: SKILL_LEVELS.novice,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/powershell.png`,
    },
    {
      title: "SSH",
      level: SKILL_LEVELS.competent,
      badges: [BADGES.SYSADMIN],
      image: `${LOGO_BASE}/putty.png`,
    },

    { title: "Linux", level: SKILL_LEVELS.competent, badges: [BADGES.SYSADMIN], image: `${LOGO_BASE}/linux.png` },

    // Generic
    {
      title: "Google Docs & Sheets",
      level: SKILL_LEVELS.proficient,
      badges: [BADGES.SOFTWARE],
      image: `${LOGO_BASE}/drive.svg`,
    },
    {
      title: "Microsoft Office",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.SOFTWARE],
      image: `${LOGO_BASE}/office.png`,
    },
    {
      title: "Google Workspace",
      level: SKILL_LEVELS.experienced,
      badges: [BADGES.SOFTWARE],
      image: `${LOGO_BASE}/admin.png`,
    },

    // Misc
    { title: "Luau", level: SKILL_LEVELS.proficient, badges: [BADGES.LANGUAGE], image: `${LOGO_BASE}/luau.png` },
    { title: "Git & GitHub", level: SKILL_LEVELS.competent, badges: [BADGES.TOOLS], image: `${LOGO_BASE}/git.png` },
    { title: "Python", level: SKILL_LEVELS.novice, badges: [BADGES.LANGUAGE], image: `${LOGO_BASE}/python.png` },
  ]);

  const CURRENTLY_LEARNING = shuffle([
    {
      title: "Java",
      badges: [BADGES.LANGUAGE],
      image: `${LOGO_BASE}/java.png`,
    },
    {
      title: "Go",
      badges: [BADGES.LANGUAGE],
      image: `${LOGO_BASE}/gopher.png`,
    },
    {
      title: "C++",
      badges: [BADGES.LANGUAGE],
      image: `${LOGO_BASE}/cpp.png`,
    },
  ]);

  return {
    props: {
      SKILLS,
      CURRENTLY_LEARNING,
    },
  };
}

export default function HomePage({ SKILLS, CURRENTLY_LEARNING }) {
  return (
    <>
      <Head>
        <title>Eleanor Mozley</title>
      </Head>

      <div className="bg-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 me-4 d-none d-lg-block">
              {/* TODO: Replace this with an actual headshot and then change the rounded value to rounded-5 */}
              <Image src="/assets/eleanor.png" alt="" width={512} height={512} className="rounded-circle img-fluid" />
            </div>

            <div className="col-md-8 d-flex flex-column justify-content-center">
              <h1 className="font-monospace" style={{ color: "var(--bs-code-color)" }}>
                Hello, world
              </h1>
              <p className="lead mb-1">My name's Eleanor. Welcome to my website!</p>
              <p className="mb-1">
                I'm a programmer &amp; web developer from North London. I'm currently in Year 13 wrapping up my
                A-Levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container content py-4">
        <h2>Background</h2>
        <section className={styles.essay}>
          <p>
            Despite not having been able to study IT or computer science formally, it has been a significant interest
            throughout my life. I love the joys and challenges that come with programming, the unique problems to solve
            while venturing into the unknown, and combining different experiences together to create something new. My
            skills are incredibly broad, covering multiple areas of technology such as full stack development, cloud
            knowledge, software infrastructure, game development, and cyber security.
          </p>

          <p>
            I've been interested in IT from a very young age where I was curious to discover all the ins nad outs of
            computers' operation and explore just what could be done with them. This led to me taking apart computers
            and often breaking the OS, which meant that I also had to learn how to recover from my mistakes. I began
            programming whe I was around 11 years old, using Java to create Minecraft plugins, PHP to create websites,
            and Lua to create games on the Roblox platform.
          </p>

          <p>
            I discovered Node.JS about five years ago, and have used it heavily since for web development due to its
            strong ecosystem in this space. In addition to websites and apps, I have used Node to build chat bots that
            take advantage of REST APIs and command-line tools such as an exe patcher (specifically - to apply mods to a
            video game) and a submodule downloader (since I personally didn't like the user experience of git
            submodules).
          </p>

          <p>
            While Node is where I feel most comfortable, I have regularly sought to step outside my comfort area and
            expand my knowledge, experimenting with Python and Go, and investigating languages such as Rust, C#, and
            Ruby - although my experience with these languages currently is very minimal.
          </p>

          <p>
            I administer several domain names and use Google Workspace as an e-mail exchange for my personal addresses.
            To maintain and secure internet applications, I began to explore OWASP guidance and internet standards on
            security headers (such as HSTS and Content Security Policy). I plan to further advance my proficiency in
            software, such as by learning tools like Kubernetes and Docker, and paradigms like unit and end-to-end
            testing.
          </p>

          <p>
            In addition to my interest in software development, I also have an interest in cyber security and like to
            ensure anything I develop is up to a secure standard, but additionally that any third parties I interact
            with uphold best practices. An outcome of these measures led to me submitting a successful bug bounty for
            sensitive data exposure issue of high severity. While exploring a website's API I learnt that a publicly
            accessible endpoint would return user information such as their email addresses from a given username. I
            responsibly disclosed this via HackerOne, creating a report and fully communicating this with the company's
            staff to get it resolved.
          </p>

          <p>
            I have also worked with others to create games on the Roblox platform and tooling for developers who create
            Roblox games (such as the submodule downloader I discussed above). Roblox development was my introduction to
            a range of tools, languages, and practices, especially with collaborating in software development. The
            various games I have worked on have collectively accrued over 379 million play sessions; at that scale, a
            high level of coordination is required to ensure games work effectively and that development runs to plan.
          </p>
        </section>

        <h2 className="mt-3">Skills &amp; Experience</h2>
        <section>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 mb-3">
            {SKILLS.map(({ title, image, level, badges, imageBackground, paddingLevel }) => (
              <Skill
                image={image}
                title={title}
                level={level}
                badges={badges}
                imageBackground={imageBackground}
                paddingLevel={paddingLevel}
                key={`skill_${title}`}
              />
            ))}
          </div>
        </section>

        <h3>Currently Learning</h3>
        <section>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 mb-5">
            {CURRENTLY_LEARNING.map(({ title, image, badges, imageBackground, paddingLevel }) => (
              <Skill
                image={image}
                title={title}
                badges={badges}
                imageBackground={imageBackground}
                paddingLevel={paddingLevel}
                key={`learning_${title}`}
              />
            ))}
          </div>
        </section>

        <h2>Achievements</h2>
        <section>
          <ul className={styles.achievements_list}>
            <li>
              <b>School council (2021-22)</b>
              <br />
              Duties included: organising, minuting, and attending meetings; advising senior teachers on policy,
              particularly regarding diversity and inclusion; attended college Board of Directors meeting alongside
              three other council members.
            </li>

            <li>
              <b>First place, 3VB debate competition (2021)</b>
              <br />
              Debating competition hosted by a barristers chambers.
            </li>

            <li>
              <b>Volunteer content moderator (since 2020)</b>
              <br />
              Reviewing content flagged by community members and handling complaints in a professional and courteous
              manner; advising other team members on policy decisions (i.e. community guidelines changes).
            </li>

            <li>
              <b>School Yearbook (2021)</b>
              <br />
              In secondary school, I worked with year group staff and other students to organise and create the Class of
              2021 Yearbook. I was tasked with labelling and organising 1,589 photos for the project and ensuring quote
              submission and hoodie requests were effective and appropriate.
            </li>

            <li>
              <b>Ran my secondary school's 'Autism Ambassadorship' program (2019)</b>
              <br />
              Responsible for advising staff on and taking the lead with autism awareness events. Helped staff to create
              assemblies and posters on autism awareness to be shown to younger years and on occasion presented about
              autism awareness from the perspective of an autistic student.
            </li>

            <li>
              <b>First place, Pinsent Masons cyber challenge (2019)</b>
              <br />
              Day competition with teams from local schools to create cyber policy in response to fictional data breach
              scenario.
            </li>

            <li>
              <b>School Ambassador (2017-2019)</b>
              <br />
              Representing the school as a student and assisting staff in coordinating events such as parents evenings.
              Also a regular member of 'student panels' used to interview teacher candidates and prospective senior
              leaders.
            </li>
          </ul>
        </section>

        <h2>Education</h2>
        <section>
          <p>
            GCSEs: one 8, two 6s, one 5, four 4s
            <br />
            Subjects: Combined Science, History, Maths, Business, Psychology, Sociology, English Language, English
            Literature
          </p>

          <p>
            I am currently in Year 13 studying Business Applied (predicted A*), Psychology (predicted B), and Sociology
            (predicted C).
          </p>
        </section>

        <h2>Hobbies &amp; Interests</h2>
        <section>
          <p>
            Beyond programming, I'm interested quite heavily in law, psychology, business and operations, politics,
            railways, engineering and infrastructure, electronics, broadcast logistics, and technology. I regularly
            explore these areas in my own personal research.
          </p>
        </section>
      </div>
    </>
  );
}

// Remove the main class (padding after the header)
HomePage.getLayout = function (page) {
  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
};
