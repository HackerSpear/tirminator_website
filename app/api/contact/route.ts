import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY
    const sourceEmail = process.env.SOURCE_EMAIL
    const receiverEmail = process.env.WEBSITE_EMAIL_RECEIVER

    if (!apiKey || !sourceEmail || !receiverEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, description } = body

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    sgMail.setApiKey(apiKey)

    await sgMail.send({
      to: receiverEmail,
      from: sourceEmail,
      replyTo: email,
      subject: `Website Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${description}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${description}</p>`,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
