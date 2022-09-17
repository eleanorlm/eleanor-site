import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import styles from "../../styles/BlogLanding.module.scss";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const file = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data } = matter(file);
    return { slug, data };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function BlogLandingPage({ posts }) {
  return (
    <div className="container mb-4">
      <h1 className="mt-1">My Blog</h1>

      <div className="row row-cols-1 row-cols-lg-4 g-4 mt-1">
        {posts.map(({ slug, data }) => (
          <div key={slug} className="col card-col">
            <div className={`card linkCard ${styles.postCard}`}>
              {/* TODO: Migrate to using next/future/image here */}
              {data.image && <img src={data.image} className={`card-img-top ${styles.postImage}`} alt="" />}
              <div className="card-body">
                <Link href={`/blog/${slug}`} passHref>
                  <a className="h5 card-title stretched-link">{data.title}</a>
                </Link>
                <p className="card-text">{data.description}</p>
                <p className="card-text text-muted">{data.date}</p>
                {data.tags && (
                  <p className="card-text small mt-1">
                    {data.tags.map((tag) => (
                      <span className="badge text-bg-secondary me-1" key={`${slug}_${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
