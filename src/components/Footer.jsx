// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex justify-center px-6">
        <ul className="space-y-2 text-sm text-center">
          <li>
            <a href="/login" className="text-white font-bold hover:underline">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-neutral-700 mt-8 pt-4 text-xs text-center">
        <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
        <p>Created by ▲ Vercel</p>
      </div>
    </footer>
  );
}