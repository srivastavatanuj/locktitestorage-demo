import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2">
        <a href="#" className="bg-blue-600 text-white p-3 hover:bg-blue-700 transition-colors" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="bg-blue-400 text-white p-3 hover:bg-blue-500 transition-colors" aria-label="Twitter">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="bg-pink-600 text-white p-3 hover:bg-pink-700 transition-colors" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="bg-gray-600 text-white p-3 hover:bg-gray-700 transition-colors" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
