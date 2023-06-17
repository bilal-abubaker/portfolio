import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";
import { motion } from "framer-motion";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div
      className="w-full px-32 py-8 font-medium flex items-center justify-between
     "
    >
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          href="/"
          target="_blank"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          href="/"
          target="_blank"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          href="/"
          target="_blank"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          className="w-6 mx-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          href="/"
          target="_blank"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          className="w-6 ml-3"
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          href="/"
          target="_blank"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </div>
  );
};

export default NavBar;
