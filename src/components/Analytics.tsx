'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// Google Analytics 4 component
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [gaId])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Facebook Pixel component
export function FacebookPixel({ pixelId }: { pixelId: string }) {
  return (
    <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  )
}

// Conversion tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Specific tracking functions for the sales funnel
export const trackCTAClick = (ctaLocation: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaLocation,
  })
}

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'lead',
    event_label: formType,
  })
}

export const trackPurchaseIntent = () => {
  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    currency: 'BRL',
  })
}

export const trackPurchase = (value: number) => {
  trackEvent('purchase', {
    event_category: 'ecommerce',
    currency: 'BRL',
    value: value,
  })
}

export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_start', {
    event_category: 'engagement',
    event_label: videoName,
  })
}

export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
  })
}

// Declare gtag and fbq for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}