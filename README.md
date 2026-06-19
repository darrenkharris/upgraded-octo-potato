# ClearPath ICT Static Website

A complete static homepage for a UK ICT consultancy supporting home users, organisations, schools and charities.

## File structure

```text
ict-consultancy-site/
├── index.html
├── privacy.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── _headers
├── .nojekyll
├── SEO_PLAN.md
└── assets/
    ├── css/styles.css
    └── js/main.js
```

## What to edit before launch

### 1. Brand and business details

Search the files for these placeholders and replace them:

- `ClearPath ICT` — your real business/trading name
- `CP` — logo initials
- `hello@example.co.uk` — your real email address
- `+44 0000 000000` — your phone number
- `https://www.example.co.uk/` — your real domain
- `https://www.linkedin.com/company/example` — your real LinkedIn URL
- Footer legal wording — your company name, sole trader name or company registration details if applicable

### 2. SEO details

Update:

- `<title>` in `index.html`
- `<meta name="description">`
- Canonical URLs
- Open Graph image URL
- `robots.txt`
- `sitemap.xml`
- Schema.org JSON-LD business details

### 3. Contact form

The current form opens a pre-filled email and does not store data. For a production site, replace it with one of the following:

- Formspree
- Basin
- Cloudflare Pages Function
- Microsoft Forms
- A secure backend you control

After adding a real form, update the privacy notice and test delivery, spam protection and data retention.

### 4. Privacy page

`privacy.html` is a starter template. Replace it with wording that accurately reflects how you collect, store, use and retain personal data. Review cookie and analytics requirements if you add tracking.

### 5. Trust signals

Do not invent trust signals. Add only real items, such as:

- Certifications
- Professional memberships
- Years of experience
- Case studies
- Testimonials
- Vendor partnerships
- Cyber Essentials status
- Sector experience

### 6. Images and favicon

The starter site avoids external images for performance and privacy. Add:

- A favicon
- A social sharing image named `social-preview.png`
- Optimised WebP or AVIF images if useful
- Descriptive alt text for meaningful images

## Hosting on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/root`.
6. Save.
7. Wait for GitHub Pages to publish the site.
8. Test the published URL.
9. If using a custom domain, configure it in **Settings > Pages** and enable **Enforce HTTPS** once available.

## Hosting on Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Log in to Cloudflare.
3. Go to **Workers & Pages**.
4. Select **Create application**.
5. Select **Pages**.
6. Choose **Import an existing Git repository**.
7. Select the repository.
8. Use these build settings:
   - Framework preset: None
   - Production branch: `main`
   - Build command: `exit 0`
   - Build output directory: `/`
9. Deploy.
10. Add your custom domain in Cloudflare Pages.
11. Check HTTPS and test the site.

## Recommended next development steps

1. Add dedicated landing pages for each audience.
2. Add a real contact form or booking link.
3. Add a resources section or blog.
4. Add case studies once real examples are available.
5. Add Google Search Console and submit the sitemap.
6. Run Lighthouse checks for performance, accessibility, SEO and best practices.
7. Review security headers after deployment.

## Suggested page expansion

Use the included `SEO_PLAN.md` to build separate pages for:

- School ICT support
- Charity IT support
- Small business IT support
- Home IT support
- Cyber security reviews
- Microsoft 365 consultancy
- ICT health checks
