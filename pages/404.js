import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Nothing&apos;s here</title>
      </Head>

      <div className="container text-center mt-3">
        <h1 className="fw-bold mb-3">You seem to be lost</h1>
        <p className="lead mb-3">If you entered a web address, check it is correct.</p>
        <span className="lead">
          <Link href="/">Return home</Link>
        </span>

        <pre className="my-4">Status code: 404</pre>
      </div>
    </>
  );
}
