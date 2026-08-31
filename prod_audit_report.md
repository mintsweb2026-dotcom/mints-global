# Audit Report: www.mintsglobal.ae

## Scores
- **Performance**: 58
- **Accessibility**: 96
- **Best Practices**: 96
- **SEO**: 0
- **Agentic Browsing**: 100

## Failed Audits
### First Contentful Paint (Score: 1)
*First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).*

### Largest Contentful Paint (Score: 0)
*Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)*

### Speed Index (Score: 30)
*Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).*

### Browser errors were logged to the console (Score: 0)
*Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)*

**Details:**
- *...and 3 more items*

### Time to Interactive (Score: 10)
*Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).*

### Minimize main-thread work (Score: 50)
*Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)*

**Details:**
- *...and 2 more items*

### Reduce JavaScript execution time (Score: 50)
*Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).*

**Details:**
- https://www.mintsglobal.ae/assets/index-4apM7H9w.js
- https://www.mintsglobal.ae/
- https://www.mintsglobal.ae/assets/vendor-misc-Du2J-MJe.js
- https://www.mintsglobal.ae/assets/vendor-motion-Di9qaBXG.js
- Unattributable
- *...and 4 more items*

### Missing source maps for large first-party JavaScript (Score: 0)
*Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).*

**Details:**

### Background and foreground colors do not have a sufficient contrast ratio. (Score: 0)
*Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.12/color-contrast).*

**Details:**
- `<p>`
- `<a class="hover:text-white transition-colors" href="/privacy-policy" data-discover="true">`
- `<a class="hover:text-white transition-colors" href="/terms-of-service" data-discover="true">`

### Avoid enormous network payloads (Score: 50)
*Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).*

**Details:**
- https://www.mintsglobal.ae/zero-trust-security.png
- https://www.mintsglobal.ae/hero.png
- https://www.mintsglobal.ae/crm-blog-image.png
- https://www.mintsglobal.ae/logo-07.png
- https://www.googletagmanager.com/gtag/js?id=G-0LVGEPW8RM
- *...and 5 more items*

### Minify JavaScript (Score: 0)
*Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).*

**Details:**
- https://www.mintsglobal.ae/assets/vendor-firebase-B5XXofFH.js

### Reduce unused JavaScript (Score: 0)
*Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).*

**Details:**
- https://www.mintsglobal.ae/assets/vendor-firebase-B5XXofFH.js
- https://www.googletagmanager.com/gtag/js?id=G-0LVGEPW8RM
- https://www.googletagmanager.com/gtag/js?l=dataLayer&id=undefined
- https://www.mintsglobal.ae/assets/vendor-misc-Du2J-MJe.js

### Use efficient cache lifetimes (Score: 0)
*A long cache lifetime can speed up repeat visits to your page. [Learn more about caching](https://developer.chrome.com/docs/performance/insights/cache).*

**Details:**
- https://gen-lang-client-0272232184.firebaseapp.com/__/auth/iframe.js
- https://client.crisp.chat/l.js

### Forced reflow (Score: 0)
*A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about [forced reflows](https://developer.chrome.com/docs/performance/insights/forced-reflow) and possible mitigations.*

**Details:**

### Improve image delivery (Score: 0)
*Reducing the download time of images can improve the perceived load time of the page and LCP. [Learn more about optimizing image size](https://developer.chrome.com/docs/performance/insights/image-delivery)*

**Details:**
- `<img alt="Military-grade cybersecurity solutions for global brands based in Dubai" width="800" height="600" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform dura…" src="/zero-trust-security.png" style="color: transparent;">`
- `<img alt="Mints Global team delivering digital marketing solutions in Dubai" width="1440" height="810" loading="eager" decoding="async" fetchpriority="high" class="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-…" src="/hero.png" style="color: transparent;">`
- `<img alt="Enterprise software and mobile app development services in Dubai" width="800" height="600" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform dura…" src="/crm-blog-image.png" style="color: transparent;">`
- `<img alt="Mints Global - Best Digital Marketing Agency Dubai" width="180" height="50" loading="eager" decoding="async" class="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain transform scale-[1.3] s…" src="/logo-07.png">`

### Network dependency tree (Score: 0)
*[Avoid chaining critical requests](https://developer.chrome.com/docs/performance/insights/network-dependency-tree) by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.*

**Details:**

### Render-blocking requests (Score: 0)
*Requests are blocking the page's initial render, which may delay LCP. [Deferring or inlining](https://developer.chrome.com/docs/performance/insights/render-blocking) can move these network requests out of the critical path.*

**Details:**
- https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Inter:wght@400;500;600&family=Outfit:wght@400;700;900&display=swap
- https://www.mintsglobal.ae/assets/index-Dmsj7egH.css

