# Kazi Nimat Hasan — Research Portfolio

Responsive, static multi-page portfolio inspired by the supplied Shamsul Arefin reference. It uses a persistent profile card, separate pages, dark/light theme toggle, compact project cards, filters, and expandable detail sections.

## Pages
- `index.html` — profile introduction and selected research
- `resume.html` — education, research experience, skills, training, and selected projects
- `publications.html` — four supplied manuscripts with status filters and expandable contribution details
- `projects.html` — bioinformatics, biomedical devices, and modeling projects
- `bioinformatics.html` — measles thesis and computational research details
- `eca.html` — ALOHA awards, leadership, community service, DREAM blood donation certificate, and research-methodology training
- `contact.html` — email, LinkedIn, GitHub

## Preview locally
Run `python -m http.server 8000` from this folder, then open `http://localhost:8000`. Or open `index.html` directly.

## Important before public deployment
1. The transcript PDF is linked in the profile panel. It may contain personal academic identifiers; remove that link or redact the file if you do not want it public.
2. Confirm your email address and all profile links.
3. Reconfirm manuscript author order and statuses with co-authors. No in-preparation manuscript is presented as published or accepted.
4. The measles thesis analysis is still in progress; revised candidate-gene results and downstream network/docking analysis should not be described as final.
5. Review the CV and certificates for personal identifiers before making the site public.
6. Use your original research figures and project photographs where possible. Decorative CSS thumbnails are illustrative, not experimental results.

The website is static HTML/CSS/JS and can be hosted on GitHub Pages, Netlify, or any static hosting provider.


## Final update notes
- Home page is intentionally concise; the previous home-page CV/transcript and featured-work panels were removed.
- The Resume page is bullet-first.
- Navigation uses “ECA”.
- Top spacing was reduced site-wide.
- The thesis page uses five expandable research stages and explicitly identifies GSE229685 as bulk RNA-seq and GSE168775 as single-cell RNA-seq.
- GitHub links are included for the measles thesis, cancer drug-response benchmark, glucose monitor, assistive system, smart cradle, and pacemaker electrode project.
- Hydrogel research is included as a project, with a clearly labeled placeholder thumbnail because the original hydrogel image file was not available in the local workspace at packaging time. Replace `assets/hydrogel-thumbnail-placeholder.svg` with the exact supplied photo and update the `visual-hydrogel` element to use it before public launch.
- Organizational logos were not replaced with guessed logos. Use the exact original supplied logo files when available; the existing Adventure Club committee graphic is retained.
- Review public access to the transcript and confirm publication author order/status before hosting.
