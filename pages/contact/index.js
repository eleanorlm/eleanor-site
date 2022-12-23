import Head from "next/head";

export default function ContactPage() {
  return (
    <div className="container">
      <Head>
        <title>Contact • Eleanor Mozley</title>
      </Head>

      <h1>Contact Me</h1>

      <div className="content">
        <p>
          The best way to reach out to me is via email: <a href="mailto:contact@emozley.com">contact@emozley.com</a>.
          Any professional enquiries should be sent to this address rather than through other contact mediums.
          <br /> Please no spam :(
        </p>

        <p>
          You can also see some of my social media accounts linked in the header/navbar. There is, however, no guarantee
          that I will read or respond to messages sent on social media.
        </p>
      </div>
    </div>
  );
}
