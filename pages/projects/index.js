import Head from "next/head";

function Project({ title, text, badges, links }) {
  return (
    <div className="col card-col">
      <div className="card h-100">
        <div className="card-body">
          {badges && (
            <span className="small">
              {badges.map(({ color, label }) => (
                <span className={`badge text-bg-${color} me-1 rounded-pill`} key={`${title}_badge-${color}__${label}`}>
                  {label}
                </span>
              ))}
            </span>
          )}

          <h5 className={`card-title ${badges && "mt-2"}`}>{title}</h5>
          <p className={`card-text ${links && "mb-2"}`}>{text}</p>

          {links && (
            <>
              {links.map(({ href, label }) => (
                <a className="card-link" href={href} key={`${title}_link-${href}__${label}`}>
                  {label}
                </a>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const DESCRIPTIONS = {
  SOCIALLY_DISTANCED: `During the 2020 Coronavirus pandemic, myself and my sister created a web app that would predict how busy
  places were. I was responsible for creating the web server API (which was hosted on Amazon EC2, and communicated with
  the Python ML code) and the web frontend (which was hosted on Amazon S3). I used Express for the backend, using a fairly standard boilerplate
  that I had memorised to build the API, and created a simple frontend builder (using Nunjucks for page templating) to handle the web HTML, CSS, and JS.`,

  THIS_WEBSITE: `This website was built using Next.js and is a static site with a markdown-based blog. It is hosted using Vercel.
  I created the website myself using Bootstrap was used as a base for common components and styles to modify and build upon.
  The source code is viewable below, and you can also see the content and code be iterated on via Git history.`,

  RBX_DEV: `Roblox was my introduction to computer programming and my gateway into the field of computer science. It was also the vessel
  of which many of my older technical projects were built using or built for. I was actively involved in Roblox development from 2014 and
  more professionally since 2017-18. I utilised a number of tools and languages to enable or coordinate development, including TypeScript,
  VS Code, Git, npm, bash, and various CLI tools made for the Roblox ecosystem in Rust and other languages. Across projects on the Roblox platform,
  I have contributed to 379M+ plays and 3.6M community members.`,

  KAYAK: `Kayak was a package manager intended for Roblox developers storing their game development
  files on their computer (rather than in the cloud). It was written in Node.js and allowed developers to import
  and manage various packages and dependencies, any GitHub repository could be downloaded. Kayak was originally made
  to act as a placeholder while a 'proper' package manager was developed. Its source code is no-longer available.`,
};

export default function ProjectsPage() {
  return (
    <div className="container mb-4">
      <Head>
        <title>Projects • Eleanor Mozley</title>
      </Head>

      <h1>My Projects</h1>

      <p className="mb-3 lead">
        Programming is my passion; I regularly invest in expanding my knowledge and technical skills. This list
        demonstrates some of my best or most notable pieces of work.
      </p>

      <div className="row row-cols-1 row-cols-lg-2 g-4 mt-1">
        <Project
          title="Socially Distanced"
          text={DESCRIPTIONS.SOCIALLY_DISTANCED}
          badges={[
            { color: "warning", label: "JavaScript" },
            { color: "aws", label: "AWS" },
          ]}
          links={[{ href: "https://github.com/kyralmozley/sociallydistanced", label: "GitHub" }]}
        />

        <Project
          title="This website"
          text={DESCRIPTIONS.THIS_WEBSITE}
          badges={[
            { color: "warning", label: "JavaScript" },
            { color: "info", label: "React" },
          ]}
          links={[{ href: "https://github.com/eleanorlm/eleanor-site", label: "GitHub" }]}
        />

        <Project
          title="Roblox Development"
          text={DESCRIPTIONS.RBX_DEV}
          badges={[
            { color: "luau", label: "Luau" },
            { color: "ts", label: "TypeScript" },
            { color: "danger", label: "Roblox" },
          ]}
          links={[]}
        />
      </div>

      <h1 className="mt-5">Graveyard</h1>

      <p className="mb-3 lead">
        These projects are deprecated, archived, and no-longer maintained. Not all projects will stay in the graveyard
        forever, but right now these are old projects and not necessarily reflective of my current work and standards.
      </p>

      <div className="row row-cols-1 row-cols-lg-2 g-4 mt-1">
        <Project
          title="Kayak"
          text={DESCRIPTIONS.KAYAK}
          badges={[
            { color: "warning", label: "JavaScript" },
            { color: "danger", label: "Roblox" },
          ]}
          links={[]}
        />
      </div>
    </div>
  );
}
