# SEO Implementation Guide for Next.js Projects

## 1. Basic Setup

1. Create a config file (config.ts) with basic SEO information:
   ```typescript
   const config = {
     appName: "YourAppName",
     appDescription: "A compelling description of your app (150-160 characters)",
     domainName: "yourdomain.com"
   };
   ```

2. Create an SEO utility file (lib/seo.ts):
   ```typescript
   import type { Metadata } from "next";
   import config from "@/config";

   export const getSEOTags = ({
     title,
     description,
     keywords,
     openGraph,
     canonicalUrlRelative,
     extraTags,
   }) => {
     return {
       title: title || config.appName,
       description: description || config.appDescription,
       keywords: keywords || [config.appName],
       metadataBase: new URL(process.env.NODE_ENV === "development" 
         ? "http://localhost:3000/" 
         : `https://${config.domainName}/`),
       openGraph: {
         title: openGraph?.title || config.appName,
         description: openGraph?.description || config.appDescription,
         url: openGraph?.url || `https://${config.domainName}/`,
         siteName: openGraph?.title || config.appName,
         locale: "en_US",
         type: "website",
       },
       twitter: {
         card: "summary_large_image",
         title: openGraph?.title || config.appName,
         description: openGraph?.description || config.appDescription,
       },
       alternates: canonicalUrlRelative ? { 
         canonical: canonicalUrlRelative 
       } : undefined,
       ...extraTags,
     };
   };
   ```

## 2. Implement Schema Markup

1. Add Schema.org markup for rich snippets:
   ```typescript
   export const renderSchemaTags = () => {
     return (
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify({
             "@context": "http://schema.org",
             "@type": "WebApplication", // or your appropriate type
             name: config.appName,
             description: config.appDescription,
             url: `https://${config.domainName}/`,
             author: {
               "@type": "Organization",
               name: "Your Company Name"
             },
             // Add more relevant schema properties
           })
         }}
       />
     );
   };
   ```

## 3. Page-Level Implementation

1. In each page file (e.g., app/page.tsx):
   ```typescript
   import { getSEOTags } from "@/lib/seo";
   
   export const metadata = getSEOTags({
     title: "Page Specific Title",
     description: "Page specific description",
     canonicalUrlRelative: "/current-page-path",
     openGraph: {
       title: "OG Title",
       description: "OG Description",
       // Add og:image if needed
     }
   });
   ```

## 4. Image Optimization

1. Add OpenGraph and Twitter card images:
   - Place opengraph-image.(jpg|jpeg|png|gif) in the /app folder
   - Place twitter-image.(jpg|jpeg|png|gif) in the /app folder
   - Next.js will automatically handle these images

2. For dynamic OG images, add them to the metadata:
   ```typescript
   openGraph: {
     images: [{
       url: 'your-image-url',
       width: 1200,
       height: 630,
       alt: 'Image description'
     }]
   }
   ```

## 5. Additional Optimizations

1. Add robots.txt in the public folder:
   ```text
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

2. Create a dynamic sitemap.xml:
   - Create app/sitemap.ts or pages/sitemap.xml.ts
   - Implement dynamic sitemap generation based on your content

3. Add meta viewport tag in root layout:
   ```typescript
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

## 6. Best Practices

1. Use semantic HTML elements:
   - <header>, <main>, <footer>, <article>, <section>, <nav>
   - Proper heading hierarchy (h1, h2, h3, etc.)

2. Implement proper alt texts for images:
   ```typescript
   <Image src={src} alt="Descriptive text" />
   ```

3. Ensure proper heading hierarchy in components:
   - One h1 per page
   - Logical nesting of h2-h6

4. Add language attribute to HTML:
   ```typescript
   <html lang="en">
   ```

## 7. Performance Optimization

1. Use Next.js Image component for automatic optimization:
   ```typescript
   import Image from 'next/image'
   ```

2. Implement lazy loading for below-the-fold content:
   ```typescript
   const Component = dynamic(() => import('./Component'))
   ```

3. Add proper caching headers:
   ```typescript
   export async function generateMetadata(): Promise<Metadata> {
     return {
       other: {
         'Cache-Control': 'public, max-age=3600'
       }
     }
   }
   ```

## 8. Monitoring and Testing

1. Set up monitoring tools:
   - Google Search Console
   - Google Analytics
   - Implement logging for 404s

2. Regular testing:
   - Use Lighthouse for performance and SEO audits
   - Test meta tags with social media debuggers
   - Monitor Core Web Vitals

Remember to:
- Keep titles under 60 characters
- Keep descriptions between 150-160 characters
- Use relevant keywords naturally
- Update content regularly
- Monitor performance metrics
- Test on multiple devices and browsers 


----NEW SEO Stuff----

Absolutely! Here are the **rules** and **implementation steps** you should add to your `cursor rules` and `SEO_Implementation_Guide.txt` to ensure SEO and accessibility best practices for animated/hidden content in your Next.js app:

---

## SEO & Accessibility Rules for Animations and Visibility

### General Rules
- **Never hide critical content by default** (e.g., `opacity: 0`, `display: none`, or `visibility: hidden`) unless it is truly non-essential or controlled by user interaction.
- **All essential content must be visible in the initial HTML**. Animations should only enhance, not block, content visibility.
- **Animations should be progressive enhancement**: Only apply animated transitions if JavaScript is enabled.
- **Do not rely on JavaScript for initial content visibility**. Use CSS classes or utility components that ensure content is visible by default.
- **Test with JavaScript disabled** to ensure all content is accessible and visible to search engines and users.

### Component-Specific Rules
- **Header, Hero, and Key Sections**:  
  - Must be visible by default in the DOM.
  - Animation classes should only add transitions, not hide content initially.
- **Animated Gradients and Visuals**:  
  - Gradients and decorative elements should be visible by default.
  - Only animate properties like opacity or transform if JS is enabled.
- **SEO-Friendly Animation Utility**:  
  - Use a utility component (e.g., `SeoFriendlyAnimation`) to conditionally apply animation classes only when JS is enabled.

### CSS/Utility Rules
- **Animation Classes**:  
  - Default state must be visible (`opacity: 1`, `transform: none`).
  - Use a `.animate-on-load` or similar class that is only added when JS is enabled.
  - Avoid global CSS that sets `opacity: 0` or hides elements by default.

---

## Implementation Steps

1. **Component Refactor**  
   - Refactor all key components (header, hero, gradients, etc.) to be visible by default.
   - Remove any default `opacity: 0` or hidden states from initial render.

2. **SEO-Friendly Animation Utility**  
   - Create a utility component (e.g., `components/utilities/seo-friendly-animation.tsx`) that:
     - Renders children with animation classes only if JS is enabled.
     - Ensures children are always visible in the initial HTML.

3. **CSS Animation Classes**  
   - Update animation classes in your CSS (e.g., `app/globals.css`):
     - Default state: visible.
     - Only add animation transitions when `.animate-on-load` or similar class is present.

4. **Testing**  
   - Test all pages with JavaScript disabled:
     - All content must be visible and accessible.
     - No critical content should be hidden or missing.
   - Use Lighthouse or similar tools to verify SEO and accessibility.

5. **Documentation**  
   - Add these rules to your `cursor rules` and `SEO_Implementation_Guide.txt`.
   - Document the use of the SEO-friendly animation utility and CSS approach.

---

## Example: SEO-Friendly Animation Utility

```tsx
// components/utilities/seo-friendly-animation.tsx
import { useEffect, useState } from "react"

export default function SeoFriendlyAnimation({ children, className }) {
  const [animate, setAnimate] = useState(false)
  useEffect(() => setAnimate(true), [])
  return (
    <div className={animate ? `animate-on-load ${className}` : className}>
      {children}
    </div>
  )
}
```

## Example: CSS Animation

```css
/* app/globals.css */
.animate-fade-in-up {
  opacity: 1;
  transform: none;
  transition: opacity 0.5s, transform 0.5s;
}
.animate-on-load.animate-fade-in-up {
  opacity: 1;
  transform: translateY(0);
}
```

---

## Summary

- **Always render content visible by default.**
- **Only animate if JS is enabled.**
- **Test with JS disabled for SEO/accessibility.**
- **Document and enforce these rules for all future development.**

---

Let me know if you want this as a markdown file or want me to update any project documentation directly!
