/**
 * Privacy-friendly analytics tracker
 * No cookies, no personal data
 */

export function trackPageView() {
  // Don't track admin pages
  if (window.location.pathname.startsWith('/admin')) return;
  
  const data = {
    path: window.location.pathname,
    referrer: document.referrer || '',
  };
  
  // Send to our API (fire and forget)
  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    keepalive: true, // Continue request even if page unloads
  }).catch(() => {
    // Silently fail - analytics shouldn't break user experience
  });
}

/**
 * Initialize analytics tracking
 * Call this once in your layout
 */
export function initAnalytics() {
  // Track initial page view
  if (typeof window !== 'undefined') {
    trackPageView();
    
    // Track route changes in SPA navigation
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      trackPageView();
    };
    
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      trackPageView();
    };
    
    // Also track popstate (back/forward)
    window.addEventListener('popstate', trackPageView);
  }
}
