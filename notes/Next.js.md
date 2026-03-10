- Automatic code-splitting and prefetching:
  - To improve the navigation experience, Next.js automatically code splits your application by route segments
  - In production, whenever `<Link>` components appear in the browser's viewport, Next.js automatically prefetches the code for the linked route in the background.
- By default, Next.js applications use React Server Components
- By default, Next.js prerenders routes to improve performance, this is called Static Rendering. So if your data changes, it won't be reflected in your dashboard.
- Static rendering:
  - Data fetching and rendering happens on the server at build time (when you deploy) or when revalidating data.
  - Benefits: Faster Websites, Reduced Server Load, SEO

- Dynamic rendering:
  - content is rendered on the server for each user at request time (when the user visits the page).
  - Benefits: Real-Time Data, User-Specific Content, Request Time Information

- By streaming, you can prevent slow data requests from blocking your whole page. This allows the user to see and interact with parts of the page without waiting for all the data to load before any UI can be shown to the user.

- `loading.tsx` is a special Next.js file built on top of React Suspense. It allows you to create fallback UI to show as a replacement while page content loads.

- The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).