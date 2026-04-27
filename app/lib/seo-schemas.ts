/**
 * SEO and Structured Data Schema Generators
 * Generates JSON-LD schemas for various content types
 */

const BASE_URL = "https://twaheedgj.vercel.app";

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProjectSchema(project: {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features?: string[];
  category: string;
  github?: string;
  live?: string;
  year: string;
  status: "complete" | "wip" | "archived";
}) {
  const url = `${BASE_URL}/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CreativeWork", "SoftwareSourceCode"],
        "@id": url,
        name: project.title,
        description: project.description,
        abstract: project.longDescription || project.description,
        url: project.live || url,
        sameAs: url,
        ...(project.github && { codeRepository: project.github }),
        programmingLanguage: project.tags,
        ...(project.features && project.features.length > 0 && {
          featureList: project.features.join(", "),
        }),
        keywords: [...project.tags, project.category].join(", "),
        dateCreated: `${project.year}-01-01`,
        datePublished: `${project.year}-01-01`,
        inLanguage: "en-US",
        isAccessibleForFree: true,
        creativeWorkStatus: project.status === "complete"
          ? "Published"
          : project.status === "wip"
          ? "Draft"
          : "Archived",
        author: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Talha Waheed",
          url: BASE_URL,
        },
        publisher: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Talha Waheed",
        },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          name: "Talha Waheed — GIS Developer Portfolio",
          url: BASE_URL,
        },
      },
    ],
  };
}


export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author || "Talha Waheed",
    },
    publisher: {
      "@type": "Organization",
      name: "Talha Waheed",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/opengraph-image.png`,
      },
    },
    image: article.image || `${BASE_URL}/opengraph-image.png`,
    articleBody: article.content,
  };
}

export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  company: string;
  location?: string;
  salary?: {
    currency: string;
    minValue: number;
    maxValue: number;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: job.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PK",
          },
        }
      : undefined,
    baseSalary: job.salary
      ? {
          "@type": "PriceSpecification",
          priceCurrency: job.salary.currency,
          minPrice: job.salary.minValue,
          maxPrice: job.salary.maxValue,
        }
      : undefined,
  };
}

export function generateLocalBusinessSchema(business: {
  name: string;
  description: string;
  image?: string;
  telephone?: string;
  address?: string;
  openingHours?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    image: business.image || `${BASE_URL}/opengraph-image.png`,
    telephone: business.telephone,
    address: business.address,
    openingHoursSpecification: business.openingHours?.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
    })),
  };
}

export function generateContactSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "talha@example.com",
    url: BASE_URL,
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
    },
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 1,
      },
    }),
  };
}
