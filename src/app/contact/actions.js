// app/contact/actions.js
'use server'

export async function submitContactForm(formData) {
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    country: formData.get('country'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    inquiryType: formData.get('inquiryType'),
    message: formData.get('message'),
  }

  // TODO: send email, save to DB, etc.
  console.log('Contact form submitted:', data)

  // Redirect or return success (you can use redirect() if needed)
  // For demo, just return a success object (client can handle with useActionState)
  return { success: true }
}