import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header>
      {/* Top bar with phone number */}

      {/* Main header */}
      <div className="font-sans text-xs font-normal text-gray-800 p-4 bg-[#8ca5de] text-justify">
        <div className="float-right mt-10"></div>
        <div id="site-logo" className="text-center mt-8">
          <h1 id="site-title" className="text-gray-800 font-ubuntu text-4xl">
            <a
              href="https://locktitestoragecenter.com/"
              title="Locktite"
              className="text-blue-400 no-underline hover:underline"
              style={{ letterSpacing: "-2px" }}
            >
              <img
                width="700"
                height="350"
                alt="Locktite"
                src="https://locktitestoragecenter.com/wp-content/uploads/2016/02/locktite.gif"
                className="transition-opacity duration-400 ease-in max-w-full mx-auto"
              />
            </a>
          </h1>
          <span className="block float-none"></span>
        </div>
        <span className="text-xs"></span>
      </div>

      {/* Navigation */}
      <nav className="bg-black text-white font-medium text-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-evenly p-5">
            <Link href="/" className="hover:text-blue-300 transition-colors">
              🏠 Home
            </Link>
            <Link
              href="/storage-units"
              className="hover:text-blue-300 transition-colors"
            >
              Storage Units
            </Link>
            <Link
              href="/rv-boat-storage"
              className="hover:text-blue-300 transition-colors"
            >
              Car, R.V. & Boat Storage
            </Link>
            <Link
              href="/tips"
              className="hover:text-blue-300 transition-colors"
            >
              Tips
            </Link>
            <Link href="/faq" className="hover:text-blue-300 transition-colors">
              FAQ
            </Link>
            <Link
              href="/need-space"
              className="hover:text-blue-300 transition-colors"
            >
              Need Space?
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
