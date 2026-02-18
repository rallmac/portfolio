import React from 'react';

/**
 * ResponsiveWrapper - Ensures Container203 (the banner in Section13) 
 * scales responsively without breaking other page elements
 */
export const ResponsiveWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const styleContent = `
    a[data-name="Component 1"][href*="wa.me"] {
      width: 100% !important;
      max-width: 100% !important;
    }

    a[data-name="Component 1"][href*="wa.me"] > div {
      width: 100% !important;
    }

    html {
      overflow-x: hidden;
    }

    /* Ensure invisible figma overlays don't block clicks */
    [data-name="Overlay"] {
      pointer-events: none !important;
    }

    /* Mobile specific safety: center content and neutralize negative offsets */
    @media (max-width: 579px) {
      /* Respect safe areas on notched devices */
      body {
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
      }

      /* Center and constrain giant containers */
      div[class*="max-w-[1660px]"] {
        max-width: 100% !important;
        width: 100% !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 16px !important;
        padding-right: 16px !important;
        box-sizing: border-box !important;
      }

      /* Neutralize negative inset utilities that push content off-screen */
      [class*="inset-[0_-"] {
        inset: 0 !important;
      }

      /* Ensure clickable blocks fill available width */
      a.block.cursor-pointer.relative.shrink-0,
      a.block.cursor-pointer.relative.shrink-0 > div {
        width: 100% !important;
        left: 0 !important;
        right: 0 !important;
      }
    }
  `;

  return (
    <div className="w-full overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: styleContent }} />
      {children}
    </div>
  );
};
