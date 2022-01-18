import type { NextPage, GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import Sidebar from "../components/Sidebar";
import Center from "../components/Center";

export const getSeversideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
const Home: NextPage = () => {
  return (
    <div className="bg-black text-gray-500  h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  );
};

export default Home;
