// app/contact/SupportButton.js
'use client'

import { useState } from 'react'

export default function SupportButton() {
  const [showSupport, setShowSupport] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowSupport(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-md transition-colors shadow-md"
      >
        Still need help? Contact Support
      </button>

      {showSupport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowSupport(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If our FAQs didn't answer your question, reach out to our dedicated support team.
            </p>
            <ul className="space-y-2 text-left text-gray-700 dark:text-gray-300">
              <li>📧 <a href="mailto:support@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@example.com</a></li>
              <li>📞 +971 7 123 4569</li>
              <li>🕒 Mon–Sat, 9 AM – 9 PM</li>
            </ul>
            <button
              onClick={() => setShowSupport(false)}
              className="mt-6 w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}