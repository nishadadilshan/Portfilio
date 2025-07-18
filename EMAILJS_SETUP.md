# EmailJS Setup Guide

This guide will help you set up EmailJS to handle contact form submissions.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

You can reply directly to this email to respond to {{from_name}}.

Best regards,
Your Portfolio
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "user_def456", // Your actual public key
  SERVICE_ID: "service_abc123", // Your actual service ID
  TEMPLATE_ID: "template_xyz789", // Your actual template ID
};
```

## Step 6: Test the Form

1. Start your React app: `npm start`
2. Navigate to the contact form
3. Fill out the form and submit
4. Check your email to confirm you received the message

## Optional: Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=user_def456
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
```

2. Update `src/config/emailjs.js`:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
};
```

3. Add `.env` to your `.gitignore` file to keep credentials secure

## Features

- ✅ Form validation
- ✅ Loading state during submission
- ✅ Success/error messages
- ✅ Form reset after successful submission
- ✅ Reply-to email functionality
- ✅ Secure credential management

## Troubleshooting

- **"Service not found"**: Double-check your Service ID
- **"Template not found"**: Verify your Template ID
- **"Public key invalid"**: Ensure your Public Key is correct
- **Email not received**: Check your spam folder and EmailJS dashboard for delivery status

## EmailJS Free Plan Limits

- 200 emails per month
- Basic templates
- Standard support

For higher limits, consider upgrading to a paid plan. 