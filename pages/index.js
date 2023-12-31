// Styles
import Image from "next/image";
import Head from "next/head";

// Img
import icon from "../public/img/icons8-garden-secateurs-78.png";
import plantTop from "../public/img/flower1.png";
import plantBottom from "../public/img/flower2.png";
import gateClosed from "../public/img/icons8-gate-100.png";
import gateOpen from "../public/img/icons8-front-gate-open-100.png";

// Imports
import { useState } from "react";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();
  // States
  const [gate, setGate] = useState(true);
  return (
    <div className="home">
      <Head>
        <title>Constance Bluebell Gardens Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero">
        <div className="plantTop">
          <Image alt="plant" src={plantTop} width="360" />
        </div>
        <div className="plantBottom">
          <Image alt="plant" src={plantBottom} width="430" />
        </div>

        {/* <Image src={icon} width="60" /> */}
        <h1>Constance Bluebell Gardens</h1>
        <h2>South-East London based gardening company</h2>
      </section>
      <div
        onMouseEnter={() => setGate(false)}
        onMouseLeave={() => setGate(true)}
        className="gate"
        onClick={() => router.push("/services")}
      >
        {gate ? (
          <Image alt="gate" src={gateClosed} width="40" />
        ) : (
          <Image alt="gate" src={gateOpen} width="40" />
        )}
      </div>
    </div>
  );
}
