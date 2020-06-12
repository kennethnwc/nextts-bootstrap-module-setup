import Link from "next/link";
import Layout from "../components/Layout";
import { btn, btnPrimary } from "./_app.module.scss";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <button className={`${btn} ${btnPrimary}`}>Test</button>
    </p>
  </Layout>
);

export default IndexPage;
