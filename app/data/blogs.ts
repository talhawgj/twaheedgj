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
    | "conclusion"
    | "image"
    | "table";
  text?: string;
  items?: string[];
  variant?: "info" | "tip" | "warning";
  src?: string;
  alt?: string;
  caption?: string;
  headers?: string[];
  rows?: string[][];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "free-satellite-data-developing-economies",
    title: "The Democratization of Space: How Free Satellite Data is Transforming Developing Economies",
    excerpt: "Historically, access to Earth observation data was limited. Today, major cloud platforms host petabytes of free imagery, breaking down barriers and transforming developing economies.",
    publishedAt: "2026-05-05",
    readingTime: "7 min read",
    tags: ["AWS", "Google Earth Engine", "Planetary Computer", "GIS", "Satellite Imagery", "Sentinel-2", "Landsat", "Disaster Resilience", "Developing Economies"],
    category: "Remote Sensing",
    focusKeyword: "Free satellite data for GIS",
    metaDescription: "Discover how AWS, Google, and Azure now host petabytes of free satellite imagery, enabling developing nations to use these datasets for disaster response, agriculture, and urban planning.",
    content: [
      {
        type: "image",
        src: "/images/blog/global_satellite_networks.png",
        alt: "Global satellite data networks breaking down borders",
        caption: "Global satellite data networks breaking down borders."
      },
      {
        type: "paragraph",
        text: "Historically, access to Earth observation data was limited. Today, major cloud platforms host **petabytes** of free imagery, breaking down barriers. As AWS notes, over *300+ PB* of “high-value, cloud-optimized datasets” are now publicly available on the AWS Open Data program. This means **developers in any country** can tap into Sentinel-2, Landsat, and other archives on-demand, without heavy upfront cost. In fact, Google Earth Engine (GEE) offers a **multi-petabyte catalog** of global imagery and tools for “planetary-scale analysis”. Microsoft’s Planetary Computer similarly provides **petabytes of environmental monitoring data** in analysis-ready formats. The bottom line: free cloud data + built-in compute = empowered local analysts."
      },
      {
        type: "heading2",
        text: "The Power Players: Open Data Programs"
      },
      {
        type: "image",
        src: "/images/blog/cloud_data_platforms.png",
        alt: "Cloud platforms hosting petabytes of open Earth data",
        caption: "Cloud platforms hosting petabytes of open Earth data."
      },
      {
        type: "bulletList",
        items: [
          "**[AWS (Registry of Open Data)](https://registry.opendata.aws/):** AWS’ Open Data Sponsorship Program hosts archives like Sentinel-2 and Landsat in Amazon S3. These datasets are **publicly accessible** on AWS, with no download fees. Users can process data “in place” on AWS, avoiding costly egress. AWS highlights that this approach “makes high-quality geospatial data… available to the public for analysis”. Because data lives right next to AWS compute (like SageMaker or Lambda), developers pay only for compute, not data transfer. In practice, one can query Sentinel imagery directly via AWS Athena or AWS Lambda, sidestepping the “pay-to-play” barrier.",
          "**[Google (Earth Engine Public Data Catalog)](https://developers.google.com/earth-engine/datasets/):** Google Earth Engine provides **instant access** to over 80 PB of satellite imagery. Its catalog includes Landsat, Sentinel, MODIS, and many derived products. Crucially, Earth Engine is free for academic and non-profit use, making it popular for research in developing countries. GEE’s platform offers built-in analysis (timelapse maps, vegetation indices, machine learning) so users can prototype solutions without writing data pipelines. This lowers the technical bar: as one write-up notes, *“access to high-quality geospatial data is no longer limited to technical experts with large computing resources”*.",
          "**[Microsoft (Planetary Computer)](https://planetarycomputer.microsoft.com/):** Azure’s Planetary Computer combines free EO data with standardized metadata (STAC). It includes imagery, digital elevation, and climate datasets (e.g. ESA, NASA, USGS sources) in analysis-ready form. Users can query the Planetary Computer via Python or R APIs for specific regions and dates. This seamless access means a developer can, for example, find all Sentinel-1 SAR images of a flood site within minutes. In short, Azure wraps open data with cloud tools for easy discovery and processing."
        ]
      },
      {
        type: "heading2",
        text: "Strategic Benefits for Developing Countries"
      },
      {
        type: "paragraph",
        text: "By hosting data in the cloud, these platforms enable a **leapfrog** effect for countries without heavy IT infrastructure. Key advantages include:"
      },
      {
        type: "image",
        src: "/images/blog/flooded_streets_satellite.png",
        alt: "Flooded streets after heavy rains – satellite imagery helps responders map such disasters quickly",
        caption: "Flooded streets after heavy rains – satellite imagery helps responders map such disasters quickly."
      },
      {
        type: "bulletList",
        items: [
          "**Disaster Resilience:** Freely available imagery lets responders quickly map crises. For example, after floods or fires, algorithms can detect burn scars or flood extent from satellite images. UNDP reports that post-disaster analysis can be delivered in **48 hours or less**, dramatically speeding relief efforts. Faster mapping means responders allocate resources more effectively (as UNDP notes, “faster data means faster recovery”). In practice, a flood in a low-resource region can be mapped using Sentinel-1 radar (which sees through clouds) and shared immediately, improving situational awareness."
        ]
      },
      {
        type: "image",
        src: "/images/blog/green_agricultural_fields.png",
        alt: "Green agricultural fields – free satellite data lets farmers monitor crop health and stress",
        caption: "Green agricultural fields – free satellite data lets farmers monitor crop health and stress."
      },
      {
        type: "bulletList",
        items: [
          "**Agricultural Monitoring:** Smallholder farmers benefit from open data by using vegetation indices (NDVI, EVI, etc.) to monitor crop health. Satellite products (from MODIS, Landsat, Sentinel-2) can reveal moisture stress or pest outbreaks at field scale. In Africa, for instance, Google Earth Engine has empowered initiatives that give farmers **actionable insights**, such as irrigation timing and crop stress alerts. These tools bring “cutting-edge technology” to local fields: smallholders “stand to benefit significantly” from readily available Earth observation data, helping stabilize harvests and food supply.",
          "**Urban Growth & Planning:** Rapidly urbanizing cities can use free imagery to map informal settlements and plan infrastructure. For example, Landsat-based land-cover maps let planners quantify how cities expand into surrounding areas. NASA notes that satellite data can *“visualize the expansion of urban centers and monitor resultant changes in land use”*. This data-driven planning helps cities allocate resources (roads, utilities) before informal areas become too dense, improving long-term urban development.",
          "**Infrastructure Savings:** By leveraging cloud data, local agencies avoid owning expensive servers and storage. Platforms like Digital Earth Africa (an open-data initiative) let users process data directly in the cloud. As one case study emphasizes, analysis-ready data and cloud sandboxes let users “visualize and work with [large] data with ease – right from a browser”. In short, governments no longer need large on-premise GIS setups or to pay hefty bandwidth fees. This lowers the cost of entry for even grassroots organizations to analyze Earth data."
        ]
      },
      {
        type: "heading2",
        text: "Essential Open Datasets Every Developer Should Know"
      },
      {
        type: "paragraph",
        text: "These globally-available, high-quality datasets (all free via cloud) form the “Gold Standard” for GIS work:"
      },
      {
        type: "table",
        headers: ["Dataset", "Provider", "Best Use Case"],
        rows: [
          ["**Sentinel-2 (MSI)**", "AWS / Google / Azure", "10 m resolution multispectral imagery. Ideal for vegetation health, burn scar mapping, crop monitoring. (It has 12 bands including NIR)."],
          ["**Landsat 8 & 9**", "AWS / Google / Azure", "30 m resolution multispectral imagery with a 40-year archive. Perfect for long-term land-use change and deforestation studies."],
          ["**Sentinel-1 (C-Band SAR)**", "AWS / Google", "10 m radar data that penetrates clouds. Essential for flood mapping in rainy seasons or monitoring soil moisture beneath vegetation."],
          ["**NASADEM / SRTM DEM**", "Google / Azure", "30 m digital elevation models (merged SRTM). Critical for flood modeling, hydrological analysis, and topographic correction."],
          ["**MODIS / VIIRS**", "Google / AWS", "Daily global thermal/optical data (250–1000 m). Used for active fire detection, drought and vegetation phenology monitoring."]
        ]
      },
      {
        type: "heading2",
        text: "Building Accessible Geospatial Pipelines"
      },
      {
        type: "paragraph",
        text: "To turn raw satellite data into insights, a smart architecture is key. A common approach is:"
      },
      {
        type: "image",
        src: "/images/blog/cloud_data_pipeline.png",
        alt: "Cloud-native data pipeline transforming raw images into insights",
        caption: "Cloud-native data pipeline transforming raw images into insights."
      },
      {
        type: "bulletList",
        items: [
          "**Workflow Orchestration:** Use cloud-managed services to track jobs. For example, a workflow engine (AWS Glue or cloud **Firestore** database) can queue image-processing tasks and log results. AWS consultants suggest treating ETL jobs with tools like AWS Glue as the “orchestrator” of spatial pipelines. Alternatively, Google Cloud users might use Cloud Functions and Cloud Workflows (or Firestore) for this purpose.",
          "**Modular Processing Services:** Build specialized microservices for each data source. E.g. a `SentinelService` handles Sentinel-2 ingestion (fetching bands and calculating NDVI), a `LandsatService` handles Landsat composites, etc. This keeps the system flexible as new sensors (like PlanetScope or ICESat-2) are added. In practice, teams often use **Lambda/Step Functions** or Kubernetes tasks to run these modules. AWS patterns show using *event-driven pipelines* where a cloud function is triggered per tile or date.",
          "**Cloud-Native Storage:** Store outputs in a public (or shared) bucket. For instance, save processed maps or ML predictions as Cloud-Optimized GeoTIFFs (COGs) on Amazon S3 or Azure Blob Storage. AWS notes that using S3 + COG format allows reading any 50GB raster via HTTP in <200ms. This makes data access fast for end-users and avoids repeated processing."
        ]
      },
      {
        type: "paragraph",
        text: "By combining these pieces—serverless triggers, containerized processing, and cloud storage—developers ensure the system is robust, scalable, and affordable. The key is that **every stage runs in the cloud** alongside the data, turning satellite pixels into maps or alerts without ever downloading large files."
      },
      {
        type: "conclusion",
        text: "Free satellite imagery is a game-changer for the developing world, but the ultimate value lies in analytics pipelines. By processing these datasets in the cloud, organizations can generate actionable insights (e.g. burn scar or flood maps, crop health dashboards) where previously only large agencies could. Whether it’s mapping wildfires in real time or charting urban growth, the tools and data are now in the hands of researchers and local developers worldwide.\n\nInterested in a real-world example? See our Burn Scar Detection project, which uses Sentinel-2 on the cloud to identify recent fires.\n\nLooking for a technical partner to build your next geospatial pipeline? From automated mapping to cloud-native GIS systems, I help organizations transform satellite data into solutions."
      }
    ]
  },
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
