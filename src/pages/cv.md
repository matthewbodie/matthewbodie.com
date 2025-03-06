---
layout: "../layouts/post.astro"
title: "Curriculum Vitae"
---

<div class="pdf-container">
  <iframe src="/assets/Bodie_CV_2025-03_work_address.pdf" width="100%" height="1200px" style="border: none;"></iframe>
</div>

<div class="download-link">
  <a 
    href="/assets/Bodie_CV_2025-03_work_address.pdf" 
    download
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 transition-[color,box-shadow] h-9 px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    Download PDF
  </a>
</div>

<style>
  .pdf-container {
    width: 100%;
    margin: 2rem 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: calc(100vh - 150px);
    min-height: 800px;
  }
  
  .pdf-container iframe {
    width: 100%;
    height: 100%;
    min-height: 800px;
  }
  
  .download-link {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .pdf-container {
      height: calc(100vh - 100px);
    }
  }
</style>