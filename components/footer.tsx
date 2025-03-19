import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div>
        {/* Social Media and Newsletter */}
        <div className="bg-white text-black flex flex-col md:flex-row justify-between items-start md:items-center pb-[2.0625rem] gap-6 px-4 md:px-[7.5rem]">
          <div className="flex gap-4">
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            {/*
            <Link href="#" className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            */}
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8.56 10.23c2.29 2.9 4.71 5.74 7.16 8.51.64.72 1.32 1.41 2.06 2.04.31.27.72.48 1.14.47.41-.02.83-.27.94-.68.15-.53-.25-1.02-.56-1.4-1.98-2.51-3.99-5.01-5.91-7.56 2.19-2.08 4.37-4.19 6.55-6.3.37-.36.77-.77.89-1.29a1.02 1.02 0 0 0-.48-1.11c-.46-.25-1.04-.11-1.44.23a2277.6 2277.6 0 0 1-6.7 6.49c-2.13-2.3-4.26-4.61-6.41-6.89-.45-.47-1.08-.96-1.81-.84-.55.1-1.02.51-1.1 1.08-.12.71.34 1.31.78 1.8 1.98 2.19 3.95 4.39 5.9 6.61-2.34 2.28-4.67 4.57-6.98 6.87-.4.4-.83.84-.96 1.42-.15.64.22 1.38.91 1.56.53.15 1.1-.06 1.51-.42a2555.6 2555.6 0 0 0 6.99-7.06z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div
              className="max-w-[9.375rem] max-h-[2.5rem] py-[0.4375rem] pr-[0.75rem] text-right"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "1rem", // 16px
                lineHeight: "1.25rem", // 20px
              }}
            >
              Sign up for the newsletter
            </div>

            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent border border-black px-[1.5rem] py-[0.8125rem] min-w-[15.625rem] max-h-[3.375rem] text-black text-[0.875rem]"
            />
            <button className="bg-black text-white px-16 py-[0.625rem]">
              Join
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-evenly bg-black text-white py-12 px-4 md:px-0">
          {/* PRODUCTS */}
          <div>
            <h3 className="mb-6 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              PRODUCTS
            </h3>
            <ul className="space-y-0.5 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%] whitespace-nowrap">
              <li>
                <Link href="#" className="no-underline">
                  DRINKING WATER STATIONS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  DRINKING WATER DISPENSER
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  DRINKING WATER FAUCETS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  WATER COOLERS & FOUNTAINS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  PUBLIC UTILITY SYSTEMS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  COMMERCIAL/INDUSTRIAL PLANTS
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div>
            <h3 className="mb-6 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              ABOUT US
            </h3>
            <ul className="space-y-0.5 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              <li>
                <Link href="#" className="no-underline">
                  COMPANY
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  BRAND
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  SUSTAINABILITY
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  PRODUCT & SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  NEWS & UPDATES
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-6 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              LEGAL
            </h3>
            <ul className="space-y-0.5 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              <li>
                <Link href="#" className="no-underline">
                  DATA POLICY
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  ETHICS & COMPLIANCES
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  TERMS & CONDITIONS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  COOKIES
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="mb-6 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              SOCIAL
            </h3>
            <ul className="space-y-0.5 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              <li>
                <Link href="#" className="no-underline">
                  LINKEDIN
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  TWITTER
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  FACEBOOK
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  YOUTUBE
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              CONTACT
            </h3>
            <ul className="space-y-0.5 text-[0.875rem] font-normal uppercase tracking-wide leading-[140%]">
              <li>
                <Link href="#" className="no-underline">
                  CAREERS
                </Link>
              </li>
              <li>
                <Link href="#" className="no-underline">
                  OFFICE LOCATIONS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Logo and Copyright */}
        <div className="bg-white flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300 px-4 md:px-[7.5rem]">
          <Link href="/" className="mb-4 md:mb-0 no-underline">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/df470715-8b49-4d9d-b83b-7249a328b100/public"
              alt="WAE Logo"
              width={100}
              height={40}
              className="w-auto h-auto max-h-[2.5rem]"
            />
          </Link>
          <p className="text-sm text-black">© 2025 WAE Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
