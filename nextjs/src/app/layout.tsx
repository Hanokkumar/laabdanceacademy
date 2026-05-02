import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Providers from './providers';

const BRAND_LOGO =
  'https://res.cloudinary.com/db3cpuhrq/image/upload/v1774629759/IMG_1458__1_-removebg-preview_rrcajv.png';

export const metadata: Metadata = {
  title: 'Laab Dance Academy',
  description: 'LAAB Dance Academy — Chennai',
  icons: {
    icon: BRAND_LOGO,
    shortcut: BRAND_LOGO,
    apple: BRAND_LOGO,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="strip-extension-fdprocessedid"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var ATTR = 'fdprocessedid';
                var remove = function (root) {
                  if (!root || !root.querySelectorAll) return;
                  var nodes = root.querySelectorAll('[' + ATTR + ']');
                  for (var i = 0; i < nodes.length; i++) {
                    nodes[i].removeAttribute(ATTR);
                  }
                };

                remove(document);

                var observer = new MutationObserver(function (mutations) {
                  for (var i = 0; i < mutations.length; i++) {
                    var mutation = mutations[i];
                    if (mutation.type === 'attributes' && mutation.attributeName === ATTR && mutation.target) {
                      mutation.target.removeAttribute(ATTR);
                    }
                    for (var j = 0; j < mutation.addedNodes.length; j++) {
                      var node = mutation.addedNodes[j];
                      if (node && node.nodeType === 1) {
                        if (node.hasAttribute && node.hasAttribute(ATTR)) {
                          node.removeAttribute(ATTR);
                        }
                        remove(node);
                      }
                    }
                  }
                });

                observer.observe(document.documentElement, {
                  subtree: true,
                  childList: true,
                  attributes: true,
                  attributeFilter: [ATTR]
                });

                window.addEventListener('load', function () {
                  observer.disconnect();
                }, { once: true });
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Manrope:wght@200..800&family=Playball&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="App">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
