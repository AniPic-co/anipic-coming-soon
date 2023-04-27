import Head from 'next/head'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faImage, faTags } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="bg-slate-900 flex flex-col justify-center items-center sm:h-screen">
      <Head>
        <title>AniPic: Coming Soon</title>
        <meta name="description" content="AniPic is an upcoming fast and intuitive anime frame search engine that lets you quickly find and filter images from your favorite anime series. Stay tuned for our upcoming launch!" />
        <meta name="keywords" content="anime frame search engine, AI tagging, anime images, anime series, anime search, anime database, frame search, image search, media server, categorization, tagging, anilist, myanimelist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet='utf-8' />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#2b2b2b" />
        <meta name="apple-mobile-web-app-title" content="AniPic" />
        <meta name="application-name" content="AniPic" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        <div className="bg-slate-900 py-20 flex flex-col items-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-1 text-gradient bg-gradient-to-r from-teal-400 via-pink-500 to-purple-600 bg-clip-text">
            AniPic
          </h1>
          <h2 className="text-3xl mb-6 text-green-400">Coming Soon</h2>
          <p className="text-xl mb-8 text-gray-300 bg-gray-800 p-4 rounded-lg">
            A fast and intuitive anime frame search engine powered by AI tagging.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 text-white">
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FontAwesomeIcon icon={faSearch} size="3x" className="mb-4" />
            <h2 className="text-xl font-bold">Advanced Search</h2>
            <p className="text-gray-300 text-center">
              Discover and filter images using our powerful search tools.
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <FontAwesomeIcon icon={faImage} size="3x" className="mb-4" />
            <h2 className="text-xl font-bold">Millions of Images</h2>
            <p className="text-gray-300 text-center">
              Access a vast collection of categorized anime images.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTags} size="3x" className="mb-4" />
            <h2 className="text-xl font-bold">Tagged Content</h2>
            <p className="text-gray-300 text-center">
              Easily find the perfect image with our comprehensive tagging system.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          <Link href="https://dwag.me/project/anipic" passHref className="bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-4 px-8 rounded-lg transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer">
              More of this Project
          </Link>
          <Link href="https://github.com/AniPic-co" passHref className="bg-gray-700 hover:bg-gray-800 text-white font-semibold text-lg py-4 px-8 rounded-lg transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
          </Link>
        </div>
      </div>
    </div>
  )
}
