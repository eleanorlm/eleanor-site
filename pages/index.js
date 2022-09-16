import Link from "next/link";
import Image from "next/future/image";

import Header from "../components/header";
import Footer from "../components/footer";

function LinkCard({ href, label, description }) {
  return (
    <div className="card-col">
      <div className="card linkCard text-center h-100">
        <div className="card-body">
          <Link href={href} passHref>
            <a className="h5 card-title stretched-link">{label}</a>
          </Link>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default function HomePage() {
  return (
    <>
      <div className="bg-light p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 me-4 d-none d-lg-block">
              <Image src="/eleanor.png" alt="" width={512} height={512} className="rounded-circle img-fluid" />
            </div>

            <div className="col-md-8 d-flex flex-column justify-content-center">
              <h1>Hello, world</h1>
              <p className="lead mb-1">My name's Eleanor. Welcome to my website!</p>
              <p className="mb-1">
                I'm a programmer, web developer, and general nerd from North London. I'm currently in Year 13 working
                towards my A-Levels.
              </p>
              <p>You can check out what I'm currently up to on my social media &ndash; linked in the header.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-5 pt-4">
        <h1 className="text-center mb-4">Key Pages</h1>

        <div className="row row-cols-1 row-cols-lg-4 g-4 justify-content-center d-none d-lg-flex">
          <LinkCard
            label="About"
            description="Details on my background, education, interests, and skills"
            href="/about"
          />
          <LinkCard
            label="Projects"
            description="Details on my previous projects and their technologies"
            href="/projects"
          />
          <LinkCard
            label="Contact"
            description="Need to get in touch? What else did you expect 'Contact' to be for?"
            href="/contact"
          />
        </div>

        <p className="d-block d-lg-none mt-3 text-center">
          <Link href="/about">About</Link> • <Link href="/projects">Projects</Link> •{" "}
          <Link href="/contact">Contact</Link>
        </p>
      </div>
    </>
  );
}

HomePage.getLayout = function (page) {
  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
};
