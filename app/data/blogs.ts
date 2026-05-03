export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  category: string;
  focusKeyword: string;
  metaDescription: string;
  content: BlogSection[];
}

export interface BlogSection {
  type:
    | "paragraph"
    | "heading2"
    | "heading3"
    | "formula"
    | "bulletList"
    | "callout"
    | "conclusion";
  text?: string;
  items?: string[];
  variant?: "info" | "tip" | "warning";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "burn-scar-detection-sentinel-2-landsat",
    title:
      "Scalable Burn Scar Detection: Automating Wildfire Mapping with Sentinel-2 and Landsat",
    excerpt:
      "A deep-dive into the architecture and techniques behind a production-ready automated burn scar detection pipeline — multi-constellation satellite imagery, cloud-native AWS scaling, and advanced spectral refinements beyond basic NBR.",
    publishedAt: "2025-05-01",
    readingTime: "8 min read",
    tags: [
      "Python",
      "Sentinel-2",
      "Landsat",
      "AWS",
      "GIS",
      "Remote Sensing",
      "Firebase",
      "NBR",
      "Wildfire Mapping",
    ],
    category: "Remote Sensing",
    focusKeyword: "burn scar detection",
    metaDescription:
      "Explore a scalable, cloud-native approach to burn scar detection using Python, AWS, and Sentinel-2 imagery. Learn how to refine NBR accuracy for professional wildfire mapping.",
    content: [
      {
        type: "paragraph",
        text: "Wildfires are increasing in frequency and intensity, making rapid, accurate post-fire assessment a critical challenge for environmental management. As a GIS developer, I recently engineered a refined automated burn scar detection pipeline designed to handle the complexities of multi-source satellite imagery and cloud-native scaling.",
      },
      {
        type: "heading2",
        text: "1. The Challenge: Why \u201cSimple\u201d Mapping Fails",
      },
      {
        type: "paragraph",
        text: 'Traditional burn scar detection often relies heavily on the Normalized Burn Ratio (NBR). While effective, NBR can struggle with "spectral look-alikes" like cloud shadows or dark soil.',
      },
      {
        type: "formula",
        text: "NBR = (NIR − SWIR) / (NIR + SWIR)",
      },
      {
        type: "paragraph",
        text: "To improve accuracy, my project implements a multi-constellation approach, fetching data from both Sentinel-2 and Landsat 8/9 to ensure high temporal resolution and cross-verified results.",
      },
      {
        type: "heading2",
        text: "2. A Modular Cloud-Native Architecture",
      },
      {
        type: "paragraph",
        text: "To handle the heavy lifting of geospatial data, I built a modular backend that separates data ingestion from analytical logic. The core structure includes:",
      },
      {
        type: "bulletList",
        items: [
          "Multi-Source Ingestion: Dedicated services for Landsat and Sentinel-2 allow the pipeline to dynamically choose the best available cloud-free imagery.",
          "Infrastructure as Code: Utilizing AWS for heavy image processing and storage, ensuring the system can scale during peak fire seasons.",
          "State Management: Google Firestore tracks processing jobs, metadata, and final burn statistics in real-time.",
        ],
      },
      {
        type: "heading2",
        text: "3. Techniques for Refining Accuracy",
      },
      {
        type: "paragraph",
        text: "To move the needle on detection precision, the pipeline incorporates several advanced refinements beyond standard dNBR.",
      },
      {
        type: "heading3",
        text: "A. Beyond dNBR: Using the Relativized Burn Ratio (RBR)",
      },
      {
        type: "paragraph",
        text: "While the difference in NBR (dNBR) is standard, the Relativized Burn Ratio (RBR) provides a more robust signal in areas with low pre-fire vegetation. It prevents the underestimation of damage in sparse shrublands.",
      },
      {
        type: "heading3",
        text: "B. Topographic Correction",
      },
      {
        type: "paragraph",
        text: "Fire scars on steep slopes are often misidentified due to terrain shadows. By integrating a Digital Elevation Model (DEM), the pipeline masks out false positives triggered by sun-angle variations on rugged terrain.",
      },
      {
        type: "heading3",
        text: "C. Temporal Persistence Filtering",
      },
      {
        type: "paragraph",
        text: 'True burn scars persist. The pipeline analyzes 30-day and 60-day post-fire windows. If a "detected" scar disappears within two weeks, the system flags it as a temporary anomaly — such as flooding or cloud cover — rather than a fire event.',
      },
      {
        type: "callout",
        variant: "tip",
        text: "Temporal persistence filtering is one of the most underrated techniques in operational fire mapping. It drastically reduces false positives in high-cloud regions like tropical forests.",
      },
      {
        type: "heading2",
        text: "4. Engineering for the Future: Multi-Modal AI",
      },
      {
        type: "paragraph",
        text: "The current codebase is structured to facilitate the transition into deep learning. By utilizing the organized src/burnscar/ logic, we can feed these processed spectral indices into a U-Net architecture — an encoder-decoder model — to automate the segmentation of fire perimeters with sub-pixel accuracy.",
      },
      {
        type: "callout",
        variant: "info",
        text: "U-Net was originally designed for biomedical image segmentation but has become the standard backbone for satellite image segmentation tasks. Its skip connections preserve spatial detail lost during downsampling — critical for accurate fire perimeter delineation.",
      },
      {
        type: "conclusion",
        text: "Building a production-ready GIS application is about more than just calculating indices; it's about creating a resilient ecosystem. By combining modular Python services with scalable cloud infrastructure, we can turn raw satellite data into actionable environmental intelligence. Are you looking to automate your geospatial workflows or improve your satellite imagery pipelines? Let's connect and discuss how modern GIS stacks can solve your spatial data challenges.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}
