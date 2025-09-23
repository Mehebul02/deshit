import { Link } from "react-router-dom";

export default function CustomBanner({ pageTitle }: { pageTitle: string }) {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Product</h1>
        <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900">{pageTitle}</span>
        </nav>
      </div>
    </div>
  )
}
