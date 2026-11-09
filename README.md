# Chelsea Rose - Art Portfolio

A responsive React portfolio showcasing original artwork by Chelsea Rose.

The project uses **Sanity CMS** to manage artwork content and images, with an integrated Sanity Studio for managing and publishing artwork. The frontend is built with React, React Router, and custom CSS Modules, and is deployed through Vercel.

---

## Live Website

[chelsearose.art](https://chelsearose.art)

## Features

- Responsive artwork portfolio and gallery.
- Individual artwork detail pages with dynamic slug-based routing.
- Featured artwork section on the homepage.
- Sanity CMS integration for artwork content management.
- Integrated Sanity Studio available at `/studio`.
- Published and draft artwork management through Sanity.
- Dynamic image delivery using Sanity's image pipeline.
- Image resizing and automatic format optimization.
- Lazy-loaded artwork thumbnails.
- Asynchronous image decoding.
- Loading, error, and empty states for artwork queries.
- Client-side routing with React Router.
- Accessible semantic HTML and descriptive image alt text.
- Reusable component architecture.
- Data fetching and caching with TanStack React Query.
- Vercel deployment.

---

## Routing Overview

| Route            | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| `/`              | Homepage featuring selected artwork and artist introduction |
| `/portfolio`     | Complete published artwork gallery                          |
| `/about`         | About page describing the artist                            |
| `/artwork/:slug` | Individual artwork detail page                              |
| `/studio`        | Sanity Studio content management interface                  |

Navigation is implemented using **React Router**.

Artwork detail pages are dynamically generated using Sanity artwork slugs, allowing each published artwork to have its own URL.

---

## Artwork Content Management

Artwork content is managed through **Sanity CMS**, replacing the previous centralized local artwork data module.

The Sanity dataset is `production`.

Each artwork document supports the following fields:

| Field          | Description                          |
| -------------- | ------------------------------------ |
| `title`        | Artwork title                        |
| `slug`         | Unique URL identifier                |
| `description`  | Artwork description                  |
| `year`         | Year the artwork was created         |
| `category`     | Artwork category                     |
| `thumbnail`    | Thumbnail image                      |
| `fullImage`    | Full-resolution artwork image        |
| `featured`     | Controls whether artwork is featured |
| `displayOrder` | Controls artwork display order       |

### Publishing

Artwork publication is managed directly through Sanity Studio.

- Published artwork is available to the public website.
- Draft artwork can be edited in Studio without being displayed in the public gallery.
- Changes to artwork content and images can be managed without modifying frontend components.

### Image Management

Artwork images are stored and delivered through Sanity rather than relying on hardcoded local image paths.

The frontend uses `@sanity/image-url` to generate optimized image URLs.

Image delivery supports:

- Dynamic image resizing.
- Automatic image format selection.
- Adjustable image quality.
- Separate thumbnail and full-image sources.

This replaces the previous local image structure:

```text
public/artwork/{slug}/thumb.webp
public/artwork/{slug}/full.webp
```

---

## Sanity CMS Integration

The project uses the following Sanity packages:

- `@sanity/client` - connects the React application to the Sanity Content Lake.
- `@sanity/image-url` - generates optimized image URLs.
- `sanity` - provides the integrated Sanity Studio.

Artwork data is retrieved using GROQ queries.

The frontend uses custom React hooks to retrieve artwork:

- `useArtworks()` - retrieves the artwork collection.
- `useArtwork(slug)` - retrieves an individual artwork by slug.

TanStack React Query manages asynchronous requests, caching, and query states.

The Sanity client and queries are centralized in `src/lib/sanity/`.

---

## Design & Engineering Decisions

### Centralized Content Management

Artwork metadata and images are managed through Sanity rather than hardcoded in frontend data files.

This separates content management from presentation logic and allows artwork to be added, edited, reordered, and published independently of the React application.

### Dynamic Image Delivery

Images are generated using Sanity's image URL builder instead of manually constructing local image paths.

This allows the application to request appropriately sized images while maintaining a consistent image delivery approach.

### Reusable Components

Shared components such as artwork cards, header, footer, and artist introduction sections are reused across pages.

This keeps presentation consistent and reduces duplicated code.

### Data Fetching and Caching

TanStack React Query manages Sanity requests and provides caching, loading states, and error handling.

Custom hooks keep data-fetching logic separate from page components.

### Lazy Loading

Artwork thumbnails use native browser lazy loading and asynchronous image decoding to reduce unnecessary initial image loading.

### Semantic HTML and Accessibility

Semantic landmarks and elements such as `header`, `nav`, `main`, `section`, `article`, and `figure` are used throughout the application.

Images include descriptive alternative text, and interactive elements use accessible labels where appropriate.

### Integrated Content Studio

Sanity Studio is integrated into the React application and accessed through `/studio`.

The Studio is dynamically imported so its dependencies are not part of the public application's initial JavaScript bundle.

### Deployment

The application is deployed through Vercel.

Sanity CORS origins must include the relevant development, preview, and production website origins so the browser can communicate with the Sanity API.

---

## Tech Stack

| Technology           | Purpose                              |
| -------------------- | ------------------------------------ |
| React 19             | Frontend UI                          |
| Vite 8               | Development server and build tooling |
| React Router 7       | Client-side routing                  |
| CSS Modules          | Component-scoped styling             |
| JavaScript (ES6+)    | Application logic                    |
| Sanity CMS           | Artwork content management           |
| Sanity Studio        | Content administration               |
| `@sanity/client`     | Sanity API integration               |
| `@sanity/image-url`  | Image URL generation                 |
| TanStack React Query | Data fetching and caching            |
| Vercel               | Hosting and deployment               |

No UI frameworks or component libraries are used. Layout and styling are custom-built.

---

## Project Structure

The main application structure is organized by pages, shared components, hooks, and supporting libraries.

```text
public/
└── manifest.json

src/
├── assets/
│   ├── images/
│   └── textures/
│
├── hooks/
│   ├── useArtworks.js
│   └── ...
│
├── lib/
│   ├── sanity/
│   │   ├── client.js
│   │   ├── image.js
│   │   └── queries.js
│   │
│   └── react-query/
│       └── queryClient.js
│
├── pages/
│   ├── about/
│   ├── artwork/
│   ├── home/
│   │   └── components/
│   │       └── featured-works/
│   ├── portfolio/
│   └── studio/
│
├── shared/
│   └── components/
│       ├── about/
│       ├── artwork-card/
│       ├── footer/
│       └── header/
│
├── App.jsx
├── main.jsx
└── index.css

sanity/
└── schemas/

sanity.config.js
```

_Individual filenames and folders may vary as the application evolves._

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Access to the Sanity project and its production dataset.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

### Production Build

Generate an optimized production build:

```bash
npm run build
```

### Production Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint:

```bash
npm run lint
```

---

## Sanity Studio

The Sanity Studio is accessible through:

```text
/studio
```

Use the Studio to:

- Create artwork documents.
- Upload thumbnail and full-resolution images.
- Edit artwork titles, descriptions, and metadata.
- Set featured artwork.
- Control artwork display order.
- Publish or update artwork.

Studio access requires appropriate Sanity authentication and permissions.

---

## Deployment

The project is configured for deployment through **Vercel**.

For production deployment:

1. Connect the GitHub repository to Vercel.
2. Use the standard Vite build command:

    ```bash
    npm run build
    ```

3. Use `dist` as the build output directory.
4. Configure any required environment variables if the Sanity client uses them.
5. Add the production domain and Vercel domain to the Sanity project's CORS origins.
6. Configure the custom domain in Vercel.

After deployment, verify that the homepage, portfolio, artwork detail pages, images, and `/studio` route work correctly.

---

## Project Status

The portfolio has migrated from locally managed artwork data and image paths to Sanity CMS.

The frontend retrieves published artwork dynamically, while Sanity Studio provides the content management interface.

The application includes production build, linting, query caching, image optimization, and error handling.

Future enhancements may include:

- Artwork filtering and category navigation.
- Search functionality.
- Expanded artwork metadata.
- Additional image performance optimizations.
- Improved gallery browsing and discovery.
