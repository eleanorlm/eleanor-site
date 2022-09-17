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

export function getStaticProps() {
  // The skills array is shuffled for UX purposes, with the goal of spreading
  // everything around a bit more.
  const SKILLS = shuffle([
    // Web dev
    "Node.js",
    "npm",

    "Express.js",
    "Webpack.js",
    "MongoDB & Mongoose",
    "MySQL & SQLite",
    "Redis",

    "JavaScript",
    "TypeScript",

    "HTML & CSS",
    "React & Next.js",
    "Vue & Nuxt.js",
    "SCSS (SASS)",

    "Bootstrap (CSS Framework)",
    "Bulma (CSS Framework)",
    "Embedded Javascript (EJS)",

    // Systems
    "AWS",
    "DigitalOcean",
    "Vercel",
    "Cloudflare",

    "NGINX",

    "Bash",
    "Powershell",
    "SSH",

    "Linux",

    // Generic
    "Google Docs & Sheets",
    "Microsoft Office",
    "Google Workspace",

    // Misc
    "Luau",
    "Git & GitHub",
  ]);

  return {
    props: {
      SKILLS,
    },
  };
}

export default function ContactPage({ SKILLS }) {
  return (
    <div className="container">
      <h1>About Me</h1>

      <div className="content">
        <p className="lead mb-0">
          Hi, my name&apos;s Eleanor &ndash; I&apos;m from North London and predominately interested in law, psychology,
          business and operations, politics, railways, engineering, electronics, technology, and programming. I
          personally consider myself a &apos;jack of all trades, master of none&apos;
        </p>
        <p className="small text-end w-100 pe-4">but a jack of some trades is better than none</p>

        {/* */}

        <h2>Background</h2>
        <p>
          Since a very young age, I&apos;ve always been fascinated with areas connected to electronics and technology.
          This curiosity manifested itself in a strong interest in computing; as a kid, I would often play with (and
          break 😅) various computers and laptops around.
        </p>

        <p>
          In 2013, I discovered the online gaming platform <i>Roblox</i>, which allowed players to create their own
          video games, and also enabled them to write Lua code to enrich these games. I would later use PHP and MySQL to
          create websites with various functions and very questionable security, and also use Java to create Minecraft
          mods and plugins.
        </p>

        <p>
          Reaching my teenage years, I learned of Node - which allowed you to run JavaScript code outside the browser -
          and Express.js, which made it possible to build web servers and sites with Node. I fell in love with Node and
          Express instantly and they&apos;re both tools I use extensively to this day. As a teen, I would build websites
          using Node, MongoDB, and EJS, this was also the time I discovered Bootstrap and frontend frameworks.
        </p>

        <p>
          Dabbling around with frontend frameworks, I initially used Vue and Nuxt.js on the recommendation of a friend
          and greatly enjoyed the simplicity of the framework. But disappointed with how powerless Vue was, I began to
          learn Angular, although never used it in a project. I would later start using React and Next.js, both powerful
          tools I continue to use and love.
        </p>

        {/* */}

        <h2>Education</h2>
        <p className="mb-0">GCSEs: one 8, two 6s, one 5, four 4s</p>
        <p className="small text-muted">
          GCSE Subjects: Combined Science Trilogy Higher (AQA) (6-6), Edexcel History (4), Edexcel Mathematics
          Foundation (4), AQA Business (4), AQA Psychology (8), AQA Sociology (6), AQA English Language (5), AQA English
          Literature (4)
        </p>

        <p>I am currently in Year 13 studying Business, Psychology, and Sociology.</p>

        {/* */}

        <h2>Interests &amp; Skills</h2>
        <div className="row">
          <div className="col-md">
            <p>
              Currently, I am primarily focused on concluding my A Levels and finishing a small game development project
              I am working on the side with my friends. However, I&apos;d like to learn Rust and Yarn, and subsequently
              look more into the world of traditional languages, such as C#.
            </p>
          </div>

          <div className="col-md">
            <p>{SKILLS.join(" / ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
