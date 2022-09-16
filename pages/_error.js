import Head from "next/head";
import Link from "next/link";

export function getInitialProps({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}

export default function ErrorPage({ statusCode }) {
  return (
    <>
      <Head>
        <title>Oh no, an error!</title>
      </Head>

      <div className="container text-center mt-3">
        <h1 className="fw-bold mb-3">Something went wrong</h1>
        <p className="lead mb-3">Please try again</p>

        <pre className="my-4">Status code: {statusCode}</pre>
      </div>
    </>
  );
}
