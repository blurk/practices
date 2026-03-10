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

- Server Actions are also deeply integrated with Next.js caching. When a form is submitted through a Server Action, not only can you use the action to mutate data, but you can also revalidate the associated cache using APIs like revalidatePath and revalidateTag.

- By adding the 'use server', you mark all the exported functions within the file as Server Actions. These server functions can then be imported and used in Client and Server components. Any functions included in this file that are not used will be automatically removed from the final application bundle.

```
In HTML, you'd pass a URL to the action attribute. This URL would be the destination where your form data should be submitted (usually an API endpoint).
However, in React, the action attribute is considered a special prop - meaning React builds on top of it to allow actions to be invoked.
Behind the scenes, Server Actions create a POST API endpoint. This is why you don't need to create API endpoints manually when using Server Actions.
```