import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import Image from "next/image";

import styles from "../../styles/BlogPost.module.scss";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const file = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data, content } = matter(file);
  return {
    props: {
      data,
      content,
    },
  };
}

export default function PostPage({ data, content }) {
  return (
    <div className="container mt-2">
      <img className={styles.image} alt="" src={data.image} />

      <h1 class="fw-bold mt-4">{data.title}</h1>
      <p class="text-muted mb-4">
        Published {data.date}
        {data.tags && (
          <>
            <br />
            <span className="small mt-1">
              {data.tags.map((tag) => (
                <span class="badge text-bg-secondary me-1">{tag}</span>
              ))}
            </span>
          </>
        )}
      </p>

      <div class="content" dangerouslySetInnerHTML={{ __html: md("commonmark").render(content) }}></div>
    </div>
  );
}
