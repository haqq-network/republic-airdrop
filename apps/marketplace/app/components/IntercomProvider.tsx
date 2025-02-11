'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Intercom: (command: string, ...args: unknown[]) => void;
    intercomSettings: {
      app_id: string;
    };
  }
}

export function IntercomProvider() {
  useEffect(() => {
    // Initialize Intercom
    window.intercomSettings = {
      app_id: 'klb9yu7o',
    };

    // Load Intercom script
    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i = function (...args: unknown[]) {
          i.c(args);
        };
        i.q = [] as unknown[];
        i.c = function (args: unknown[]) {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = function () {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/klb9yu7o';
          const x = d.getElementsByTagName('script')[0];
          x.parentNode?.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();

    return () => {
      // Cleanup Intercom on unmount
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
}
