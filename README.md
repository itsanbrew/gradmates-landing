# Gradmates Landing Page

A modern, sleek landing page for Gradmates - an AI-driven platform for matching graduate students with housemates and housing options.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment ready)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy your logo to the public directory:
```bash
cp assets/taglinelogo.png public/assets/taglinelogo.png
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Email Signup Integration

The email signup form is currently a frontend placeholder. To connect it to Airtable:

1. Create a Vercel serverless function in `app/api/waitlist/route.ts`
2. Use the Airtable API to save email submissions
3. Update the `EmailSignup` component to call the API endpoint

## Color Scheme

- Dark Navy: `#1B1F3B`
- Sky Blue: `#66B2FF`
- Anchor: `#0072CE`
- Accent: `#FF6F61`
- Orange: `#FD9E09`
- Cool Grey: `#F5F6FA`

