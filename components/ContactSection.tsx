'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
}

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (name.trim() === '') {
      newErrors.name = 'Please enter your name.'
    }

    if (email.trim() === '') {
      newErrors.email = 'Please enter your email.'
    } else {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address.'
      }
    }

    if (subject.trim() === '') {
      newErrors.subject = 'Please enter a subject.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          description: subject,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setName('')
        setEmail('')
        setSubject('')
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-us-section" id="contact-us-section">
      <div className="container">
        <div className="contact-us-main contan">
          <div className="contact-us-image">
            <Image
              src="/assets/images/contact-us-image.png"
              alt="contact-us-image"
              width={487}
              height={600}
            />
          </div>
          <div className="contact-us-data">
            <div className="contact-form-title">
              <h2>Contact Us</h2>
              <p>
                Get in touch with us for interview opportunities, sponsorships, or just to say hi! We&apos;d love to hear from
                you.
              </p>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="inpt-data pt-36">
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span id="nameError" className="error">{errors.name}</span>}
              </div>
              <div className="inpt-data">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span id="emailError" className="error">{errors.email}</span>}
              </div>
              <div className="inpt-data">
                <label htmlFor="subject">
                  Tell us what you are looking for <span>*</span>
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  placeholder="Write a description here..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                {errors.subject && <span id="subjectError" className="error">{errors.subject}</span>}
              </div>
              <div className="cont-sub-btn">
                <button className="fm-sub-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div style={{ color: 'green', paddingTop: '10px' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ color: 'red', paddingTop: '10px' }}>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Image
        className="contact-cover crv"
        width={1280}
        height={200}
        src="/assets/images/contact-curve.png"
        alt="contact-curve"
      />
    </section>
  )
}
