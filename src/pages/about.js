import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>CodeBilal | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="!pt-16">

        <AnimatedText text={"Passion Fuels Purpose!"} /> <p></p>
        </Layout>
      </main>
    </>
  );
};

export default about;