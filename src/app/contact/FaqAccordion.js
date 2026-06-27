// app/contact/FaqAccordion.js
'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is an airport shuttle available?',
    answer: 'Yes, we provide complimentary shuttle services to ensure a seamless journey.',
  },
  {
    question: 'How far is ANANTARA Sanctorini Abu Dhabi retreat from the airport?',
    answer: 'The resort is 4 km away from the airport.',
  },
  {
    question: 'Are there fitness facilities at the resort?',
    answer: 'Yes, we offer state-of-the-art fitness facilities and a wellness centre.',
  },
  {
    question: 'How can I book my experience?',
    answer: 'You can book directly through our website or by contacting our concierge team.',
  },
  {
    question: 'Is there free parking onsite?',
    answer: 'Yes, complimentary parking is available for all guests.',
  },
  {
    question: 'What is the check-in and check-out time?',
    answer: 'Check-in is from 3 PM and check-out is until 12 PM.',
  },
  // add all other FAQs...
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 text-left text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span>{faq.question}</span>
            <span className="ml-4 text-xl">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}