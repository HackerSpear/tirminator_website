import type { Metadata } from 'next'
import config from '@/config'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${config.domainName}`

export interface GetSEOTagsOptions {
  title?: string
  description?: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    url?: string
    images?: Array<{ url: string; width?: number; height?: number; alt?: string }>
  }
  canonicalUrlRelative?: string
  extraTags?: Partial<Metadata>
}

export function getSEOTags({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: GetSEOTagsOptions = {}): Metadata {
  const resolvedTitle = title || config.appName
  const resolvedDescription = description || config.appDescription
  const canonicalUrl = canonicalUrlRelative
    ? `${baseUrl}${canonicalUrlRelative}`
    : baseUrl

  const resolvedOpenGraphUrl = openGraph?.url
    ? openGraph.url.startsWith('http')
      ? openGraph.url
      : `${baseUrl}${openGraph.url}`
    : canonicalUrl

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: keywords || [
      config.appName,
      'transport',
      'drivers',
      'hire drivers',
      'driver jobs',
      'looking for a driver job',
      'driver jobs opening',
      'looking for truck drivers',
    ],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: openGraph?.title || resolvedTitle,
      description: openGraph?.description || resolvedDescription,
      url: resolvedOpenGraphUrl,
      siteName: config.appName,
      locale: 'en_US',
      type: 'website',
      images: openGraph?.images ?? [
        {
          url: `${baseUrl}/assets/images/header-section.png`,
          width: 1200,
          height: 630,
          alt: config.appName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraph?.title || resolvedTitle,
      description: openGraph?.description || resolvedDescription,
    },
    alternates: canonicalUrlRelative ? { canonical: canonicalUrlRelative } : undefined,
    ...extraTags,
  }
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.appName,
    description: config.appDescription,
    url: baseUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'Contact@Tirminator.com',
      telephone: '+40729798960',
      contactType: 'customer service',
      areaServed: 'RO',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Vasile Loichita',
      addressLocality: 'Timisoara',
      addressCountry: 'RO',
    },
  }
}

export function getWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: config.appName,
    description: config.appDescription,
    url: baseUrl,
    applicationCategory: 'BusinessApplication',
    author: {
      '@type': 'Organization',
      name: config.appName,
    },
  }
}

export function renderSchemaTags() {
  const organization = getOrganizationSchema()
  const webApp = getWebApplicationSchema()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
    </>
  )
}
