import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Main Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <Image src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/93d4d7c4-0b19-4021-6a66-c8b3a2876f00/public" alt="WAE Logo" width={120} height={50} className="mb-4" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        <p>THIS IS A TEST FOOTER</p>

        {/* Copyright */}
        <div className="text-sm text-gray-400">© {currentYear} WAE Ltd.</div>
      </div>
    </footer>
  )
}

