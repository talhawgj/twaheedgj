export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  github?: string;
  live?: string;
  features: string[];
  architecture?: string[];
  gradient: string;
  icon: string;
  status: "complete" | "wip" | "archived";
  year: string;
}

export const projects: Project[] = [
  {
    slug: "geodetic-conversion-api",
    title: "Geodetic Conversion API & UI",
    tagline: "Full-stack coordinate conversion system — FastAPI backend + interactive React map interface",
    description:
      "A production-grade FastAPI service for converting geospatial coordinates between WGS84 and UTM Zone 40S with millimeter-level precision, paired with an interactive React/TypeScript web interface for visual coordinate conversion and map plotting.",
    longDescription:
      "Built to solve a critical need in professional surveying workflows in Oman, this full-stack system handles seamless conversion between WGS84 geographic coordinates and UTM Zone 40S projected coordinates while accurately transforming ellipsoidal heights to orthometric heights via the EGM2008 geoid model. The FastAPI backend handles both single-point and bulk file conversions. The companion web UI — built with React, Leaflet, and Vite — makes professional-grade geodetic conversion accessible without command-line tools: users input coordinates manually or upload CSV/Excel files, and immediately see results plotted on an interactive map with real-time validation feedback.",
    tags: ["Python", "FastAPI", "Pyproj", "Pydantic", "EGM2008", "Uvicorn", "TypeScript", "React", "Leaflet", "Vite", "Tailwind CSS"],
    category: "GIS & Geospatial",
    github: "https://github.com/talhawgj/Conversion-API",
    live: "https://github.com/talhawgj/Conversion-API-UI",
    features: [
      "WGS84 ↔ UTM Zone 40S bidirectional coordinate transformation",
      "Ellipsoidal to orthometric height conversion via EGM2008 geoid model",
      "Bulk CSV/Excel batch processing via file upload (up to 10MB)",
      "Interactive Leaflet map with real-time converted coordinate plotting",
      "Drag-and-drop file upload with live processing feedback in the UI",
      "Manual single-coordinate input with instant conversion display",
      "Auto-generated Swagger UI interactive API documentation",
      "Robust Pydantic V2 validation with intelligent fallback logic",
      "Built-in health checks and API status monitoring endpoints",
      "Responsive UI — works on tablets for field use",
      "Export converted coordinates back to CSV from the web interface",
    ],
    architecture: [
      "FastAPI backend with async route handlers and Uvicorn ASGI server",
      "Pyproj library for CRS transformations (EPSG:4326 ↔ EPSG:32740)",
      "Rasterio/GDAL for EGM2008 geoid TIF bilinear interpolation",
      "Pandas/Openpyxl for batch CSV and Excel file processing",
      "Pydantic V2 models for request/response schema validation",
      "React 18 + TypeScript frontend bundled with Vite",
      "Leaflet.js for interactive map rendering and coordinate markers",
      "Tailwind CSS for responsive, field-ready UI design",
    ],
    gradient: "from-emerald-500 to-teal-700",
    icon: "🌍",
    status: "complete",
    year: "2024",
  },
  {
    slug: "osrm-routing",
    title: "OSRM Routing with Mapbox",
    tagline: "Self-hosted offline routing for Pakistan using custom OSM data",
    description:
      "Interactive routing application using Mapbox GL JS and a self-hosted OSRM backend compiled with Pakistan's OpenStreetMap data for low-latency, offline-capable navigation services.",
    longDescription:
      "Commercial routing APIs like Google Maps become expensive at scale and have data accuracy issues in emerging markets. This project solves that by compiling a custom OSRM (Open Source Routing Machine) routing graph from Pakistan's OpenStreetMap data. The result is a self-hosted routing engine with sub-50ms response times, zero per-request cost, and full offline capability — ideal for enterprise GIS deployments in the field.",
    tags: ["Next.js", "TypeScript", "Mapbox GL JS", "OSRM", "Docker", "OpenStreetMap"],
    category: "GIS & Geospatial",
    github: "https://github.com/talhawgj/Routing-OSRM",
    features: [
      "Custom OSRM routing graph compiled from Pakistan OSM data",
      "Sub-50ms routing response times on self-hosted infrastructure",
      "Turn-by-turn directions with step-by-step navigation UI",
      "Multi-waypoint routing support",
      "Distance and estimated travel time calculations",
      "Dockerized OSRM backend for easy deployment",
      "Mapbox GL JS frontend with smooth pan/zoom interactions",
    ],
    gradient: "from-yellow-500 to-amber-700",
    icon: "🛣️",
    status: "complete",
    year: "2024",
  },
  {
    slug: "elevation-profile",
    title: "Elevation Profile Viewer",
    tagline: "Draw terrain lines on a 3D Mapbox globe and visualize elevation cross-sections",
    description:
      "Next.js application allowing users to draw polylines on a 3D Mapbox terrain globe. Integrates Open Elevation API with Turf.js to interpolate coordinates and render dynamic elevation charts.",
    longDescription:
      "This tool bridges the gap between visual terrain exploration and quantitative elevation analysis. Users draw a transect line on a photorealistic 3D Mapbox terrain globe, and the app automatically samples elevation at regular intervals along the line using the Open Elevation API. Turf.js handles coordinate interpolation and distance calculations, while Recharts renders an interactive cross-section chart below the map. The result is a web-based tool that rivals costly desktop GIS software for basic elevation analysis tasks.",
    tags: ["React 19", "Next.js", "Mapbox GL JS", "Turf.js", "Recharts", "TypeScript", "Open Elevation API"],
    category: "GIS & Geospatial",
    github: "https://github.com/talhawgj/elevation-profile",
    features: [
      "Interactive draw mode for tracing terrain transect lines",
      "3D Mapbox terrain globe with satellite imagery",
      "Automatic elevation sampling at configurable intervals",
      "Turf.js coordinate interpolation along drawn paths",
      "Dynamic Recharts elevation cross-section visualization",
      "Distance-to-elevation measurement display",
      "Export elevation profile data as CSV",
    ],
    gradient: "from-amber-500 to-orange-700",
    icon: "⛰️",
    status: "complete",
    year: "2024",
  },
  {
    slug: "vector-tiles",
    title: "Vector Tiles Explorer",
    tagline: "Serving and styling custom vector tiles for high-performance map rendering",
    description:
      "A JavaScript project demonstrating how to generate, serve, and style custom Mapbox Vector Tiles for rendering large geospatial datasets smoothly in the browser.",
    longDescription:
      "Rendering large GeoJSON datasets directly in the browser causes performance issues above ~100k features. This project explores the vector tiles approach: data is pre-processed into Protobuf-encoded MVT tiles, served from a tile server, and consumed by Mapbox GL JS. The result is a map that can display millions of features with smooth 60fps pan and zoom, complete with dynamic filtering and styling based on feature attributes.",
    tags: ["JavaScript", "Mapbox GL JS", "Martin", "PostGIS", "MVT", "GeoJSON"],
    category: "GIS & Geospatial",
    github: "https://github.com/talhawgj/VectorTiles",
    features: [
      "Custom MVT tile generation from PostGIS data",
      "Martin tile server integration for dynamic tile serving",
      "Dynamic feature filtering and attribute-based styling",
      "60fps rendering with millions of geospatial features",
      "Layer visibility toggles and interactive feature popups",
      "Zoom-level dependent styling and label display",
    ],
    gradient: "from-pink-500 to-rose-700",
    icon: "🧩",
    status: "complete",
    year: "2023",
  },
  {
    slug: "burn-scar-api",
    title: "Burn Scar Mapping API",
    tagline: "Sentinel-2 satellite imagery analysis for automated wildfire detection",
    description:
      "Scalable REST API that fetches Sentinel-2 satellite imagery from Sentinel Hub and automatically generates burn scar maps based on spatial bounding boxes, integrated with AWS S3 and Firebase.",
    longDescription:
      "Wildfire burn scar assessment is traditionally done manually by analysts reviewing satellite imagery — a process that takes days after a fire event. This API automates the entire pipeline: given a geographic bounding box and date range, it fetches Sentinel-2 imagery, computes the Normalized Burn Ratio (NBR) difference index (dNBR), applies a damage severity classification, and stores the output raster on AWS S3. A Firebase Firestore record is created for each analysis job, enabling real-time status tracking.",
    tags: ["FastAPI", "Python", "Sentinel Hub", "AWS S3", "Firebase", "Rasterio", "NumPy"],
    category: "Remote Sensing",
    features: [
      "Automated Sentinel-2 imagery acquisition via Sentinel Hub API",
      "dNBR (delta Normalized Burn Ratio) computation for burn severity",
      "Damage classification into 4 severity levels",
      "AWS S3 storage for output raster files",
      "Firebase Firestore job tracking with real-time updates",
      "Bounding box & date-range based API inputs",
      "Async job processing with status callback endpoints",
    ],
    gradient: "from-red-500 to-orange-700",
    icon: "🔥",
    status: "complete",
    year: "2023",
  },
  {
    slug: "blog-api",
    title: "Blog REST API",
    tagline: "Full-featured FastAPI + PostgreSQL content management backend",
    description:
      "A production-ready blog backend built with FastAPI and PostgreSQL, featuring JWT authentication, CRUD operations, and a clean layered architecture.",
    longDescription:
      "This project demonstrates professional Python backend architecture patterns. The API follows a clean three-tier architecture with separate route handlers, service layer, and data access objects. JWT-based authentication secures private endpoints, while public content endpoints support pagination, filtering, and search. Alembic handles database migrations, and the entire stack is containerized with Docker Compose for easy local development and deployment.",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Docker", "Alembic"],
    category: "Backend",
    github: "https://github.com/talhawgj/Blog-API",
    features: [
      "JWT access & refresh token authentication",
      "Full CRUD for posts, categories, and comments",
      "Pagination, search, and filtering on list endpoints",
      "SQLAlchemy ORM with Alembic migration management",
      "Input validation with Pydantic V2 schemas",
      "Docker Compose development environment",
      "Swagger UI auto-generated documentation",
    ],
    architecture: [
      "FastAPI router layer for HTTP handling",
      "Service layer for business logic",
      "SQLAlchemy repositories for data access",
      "PostgreSQL for persistent storage",
      "Alembic for schema migrations",
    ],
    gradient: "from-slate-500 to-gray-700",
    icon: "📝",
    status: "complete",
    year: "2024",
  },
  {
    slug: "subscription-tracker",
    title: "Subscription Tracker",
    tagline: "Modern Node.js backend for managing personal subscription spending",
    description:
      "A Node.js/Express backend for tracking recurring subscriptions, featuring automated email reminders before renewal dates and detailed spending analytics.",
    longDescription:
      "Subscription fatigue is a real problem — many people forget about recurring charges. This backend application lets users log their subscriptions (Netflix, Spotify, etc.) and automatically sends reminder emails N days before renewal dates. It uses node-cron for scheduled jobs, Nodemailer for email delivery, and stores data in MongoDB. JWT handles authentication, and Express middleware provides request validation and error handling.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer", "node-cron"],
    category: "Backend",
    github: "https://github.com/talhawgj/SubscriptionTracker",
    features: [
      "User authentication with JWT access and refresh tokens",
      "Subscription CRUD with currency, billing cycle, and category support",
      "Automated email reminders via Nodemailer (7, 3, 1 day before renewal)",
      "node-cron scheduled jobs for daily reminder processing",
      "MongoDB aggregation for spending summaries by category",
      "Express middleware for validation, auth, and error handling",
    ],
    gradient: "from-green-500 to-emerald-700",
    icon: "💳",
    status: "complete",
    year: "2024",
  },
  {
    slug: "django-crm",
    title: "Django CRM",
    tagline: "Customer Relationship Management system built with Django",
    description:
      "A full-featured CRM web application built with Django, enabling sales teams to manage leads, contacts, accounts, and activity pipelines in a single interface.",
    longDescription:
      "This CRM application provides a complete sales pipeline management solution. Built on Django's MVT architecture with a PostgreSQL backend, it includes lead tracking, contact management, deal stages, and activity logging. Django's built-in admin panel is extended with custom filters and actions, while Django REST Framework provides an API layer for potential mobile app integration.",
    tags: ["Python", "Django", "PostgreSQL", "Django REST Framework", "Bootstrap"],
    category: "Full Stack",
    github: "https://github.com/talhawgj/Django-CRM",
    features: [
      "Lead and contact lifecycle management",
      "Deal pipeline with customizable stages",
      "Activity log and task assignment system",
      "Role-based access control (admin, sales rep, manager)",
      "Django admin panel with custom filters",
      "DRF API endpoints for mobile integration",
      "Search and filtering across all entities",
    ],
    gradient: "from-yellow-500 to-amber-600",
    icon: "🏢",
    status: "complete",
    year: "2023",
  },
  {
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    tagline: "NLP pipeline for multi-class opinion mining from text data",
    description:
      "A Jupyter Notebook-based NLP project implementing multiple sentiment analysis models (VADER, BERT, custom LSTM) and comparing their accuracy on real-world datasets.",
    longDescription:
      "This research-oriented project explores different approaches to sentiment classification, from rule-based (VADER) to deep learning (fine-tuned BERT). The notebook demonstrates a full NLP pipeline: data acquisition, text preprocessing, feature engineering, model training, and evaluation. Results are compared across models using confusion matrices, F1 scores, and ROC curves. The project also includes a feature importance analysis to understand which linguistic features most strongly correlate with sentiment.",
    tags: ["Python", "BERT", "VADER", "LSTM", "Scikit-learn", "Pandas", "Matplotlib", "NLP"],
    category: "Data Science & ML",
    github: "https://github.com/talhawgj/Sentiment-Analysis",
    features: [
      "Comparative analysis of VADER, BERT, and LSTM models",
      "Full text preprocessing pipeline (tokenization, lemmatization, stop-word removal)",
      "Fine-tuned BERT model on domain-specific corpus",
      "Custom LSTM architecture with embedding layer",
      "Confusion matrix, F1-score, and ROC curve evaluation",
      "Feature importance analysis using SHAP values",
      "Visualization of sentiment distribution across datasets",
    ],
    gradient: "from-yellow-500 to-amber-700",
    icon: "🧠",
    status: "complete",
    year: "2023",
  },
  {
    slug: "click-shapefile",
    title: "ArcGIS Pro Custom Tools",
    tagline: "Custom ArcGIS Pro SDK add-ins for layer management, zoom extent, and point symbol creation — plus a lightweight shapefile viewer",
    description:
      "A C# desktop GIS application for interactive shapefile attribute exploration, extended with a suite of ArcGIS Pro SDK add-ins that supercharge ArcGIS Pro with layer import/export, zoom to full extent, and a custom point symbol creator with an image-based symbol gallery.",
    longDescription:
      "This project spans two related toolsets. ClickShapefile is a lightweight Windows Forms GIS viewer — built with C# and SharpMap — for opening shapefiles and inspecting feature attributes without launching a full GIS suite. The project was then extended with a set of ArcGIS Pro SDK customizations written in C# using the ArcGIS Pro SDK for .NET. These add-ins integrate directly into ArcGIS Pro's ribbon UI and provide three production tools used by GIS operators: a layer import/export utility for moving layers between maps and geodatabases, a 'Zoom to All Layers Extent' command that fits the view to every active layer simultaneously, and a Point Symbol Creator that lets users place point features with specific symbols chosen from a custom image-based symbol gallery — streamlining field data collection and cartographic workflows.",
    tags: ["C#", ".NET", "ArcGIS Pro SDK", "WPF", "SharpMap", "Windows Forms", "ESRI", "Geodatabase", "GIS"],
    category: "Desktop GIS",
    github: "https://github.com/talhawgj/ClickShapefile",
    features: [
      "Open and render ESRI Shapefile (.shp, .dbf, .shx) data in a lightweight viewer",
      "Click-to-inspect feature attribute table display with quick search",
      "Pan, zoom, and full extent controls with layer color-coding",
      "Supports Point, Line, and Polygon geometry types",
      "ArcGIS Pro SDK add-in: Layer Import/Export — move layers between maps and geodatabases",
      "ArcGIS Pro SDK add-in: Zoom to All Layers Extent — single command fits view to all active layers",
      "ArcGIS Pro SDK add-in: Point Symbol Creator — place point features with user-selected symbols",
      "Custom image-based symbol gallery — load PNG/SVG assets as selectable point symbols",
      "All add-ins registered via ArcGIS Pro Config.daml and integrated into the Pro ribbon UI",
    ],
    architecture: [
      "ClickShapefile: C# Windows Forms app using SharpMap for shapefile rendering",
      "ArcGIS Pro SDK add-ins built with the ArcGIS Pro SDK for .NET (C# / WPF)",
      "Add-in commands and dockpanes declared in Config.daml for Pro ribbon integration",
      "Layer Import/Export: uses ArcGIS Pro SDK Map, Layer, and Geodatabase APIs",
      "Zoom to Extent: iterates all MapView layers and calls ZoomToAsync on combined envelope",
      "Symbol Creator: custom WPF gallery control backed by a symbol image asset directory",
    ],
    gradient: "from-teal-500 to-cyan-700",
    icon: "🖱️",
    status: "complete",
    year: "2022",
  },
  {
    slug: "event-scraper",
    title: "Scrape The Event",
    tagline: "Automated event scraper with structured data extraction and export",
    description:
      "A Python web scraper that discovers, extracts, and structures event data from multiple sources, exporting clean datasets in CSV and JSON formats.",
    longDescription:
      "Built with Scrapy and BeautifulSoup, this scraper targets multiple event listing websites and extracts structured data including event name, date, location, category, ticket price, and organizer info. It handles pagination, JavaScript-rendered content (via Playwright), and implements respectful crawling with configurable rate limiting and robots.txt compliance. Output data is normalized and exported to both CSV and JSON formats.",
    tags: ["Python", "Scrapy", "BeautifulSoup", "Playwright", "Pandas", "JSON"],
    category: "Data Engineering",
    github: "https://github.com/talhawgj/Scrape-The-Event",
    features: [
      "Multi-source event data extraction with Scrapy spiders",
      "JavaScript-rendered page support via Playwright integration",
      "Configurable rate limiting and polite crawling settings",
      "Data normalization and deduplication pipeline",
      "CSV and JSON export formats",
      "Structured logging and error reporting",
    ],
    gradient: "from-fuchsia-500 to-pink-700",
    icon: "🕷️",
    status: "complete",
    year: "2023",
  },
  {
    slug: "carhub",
    title: "carHub",
    tagline: "Full-stack car dealership management system with multi-image uploads and responsive design",
    description:
      "A full-stack Next.js application for managing car listings with Supabase backend, image storage, and a modern responsive interface built with React 19 and Tailwind CSS.",
    longDescription:
      "carHub is a production-ready car dealership platform showcasing modern full-stack development practices. The application features a complete CRUD interface for car inventory management, allowing dealers to list cars, upload multiple images per vehicle, and manage inventory across an intuitive dashboard. Built with Next.js 15 API Routes as the backend and Supabase (PostgreSQL) for persistence, the system handles real-time data updates, image storage via Supabase Storage, and implements validation with Zod for type-safe request/response handling. The frontend leverages React 19's latest features and Tailwind CSS for a fully responsive design that works seamlessly across desktop, tablet, and mobile devices.",
    tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Zod", "Axios"],
    category: "Full Stack",
    github: "https://github.com/talhawgj/carHub",
    live: "https://twaheedgj-7hhz.vercel.app/",
    features: [
      "RESTful API endpoints for car CRUD operations (GET, POST, PUT, DELETE)",
      "Supabase PostgreSQL database with structured car listings schema",
      "Multi-image upload support per vehicle via Supabase Storage",
      "Search and filter cars by attributes (brand, price, year, etc.)",
      "Pagination support for efficient large dataset handling",
      "Type-safe request validation using Zod schemas",
      "Responsive design with Tailwind CSS (desktop, tablet, mobile)",
      "Next.js 15 with App Router for optimal performance",
      "Axios HTTP client for seamless API communication",
      "Full responsive design across all pages and components",
    ],
    architecture: [
      "Next.js 15 App Router with TypeScript for the frontend and API routes",
      "Next.js API Routes as the backend gateway for database operations",
      "Supabase PostgreSQL for relational data storage",
      "Supabase Storage for scalable image hosting and CDN delivery",
      "Zod for runtime schema validation on API requests",
      "Axios for client-side HTTP requests with interceptors",
      "React 19 with modern hooks and component composition",
      "Tailwind CSS with responsive utility-first design",
    ],
    gradient: "from-blue-500 to-purple-700",
    icon: "🚗",
    status: "complete",
    year: "2026",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 6);
}
