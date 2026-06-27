// app/contact/GoogleMap.js
export default function GoogleMap() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.123456789!2d54.123456!3d24.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4f7e8a9b0c1d%3A0x123456789abcdef!2sAnantara%20Qeshm%20Resort!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Anantara Qeshm Resort Location"
        className="dark:opacity-90"
      />
    </div>
  )
}