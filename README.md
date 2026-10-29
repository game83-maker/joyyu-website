# JoYYu website

Website source, prepared 29 October 2026.

Repository: [game83-maker/joyyu-website](https://github.com/game83-maker/joyyu-website). GitHub Pages publishing target: [JoYYu website](https://game83-maker.github.io/joyyu-website/), from `main` at the repository root. Custom-domain DNS has not been connected.

Three static pages for JoYYu and Copy & Color Puzzle. No package installation, build command, JavaScript, third-party fonts, analytics scripts, contact form, or database is required.

## Files

```text
index.html                       Homepage
support/index.html               Support and privacy contact
copy-color-puzzle/privacy/index.html
                                 Complete game privacy policy
styles.css                       Shared responsive and print styles
assets/joyyu-mascot.png           Existing JoYYu mascot artwork
assets/game-icon.png             Existing Copy & Color Puzzle icon
.nojekyll                        Plain-file GitHub Pages publishing
.gitignore                       Excludes common local files
```

The artwork was copied from the owner's Unity project. No Unity source, signing material, private documents, or personal legal name is included.

## Preview locally

From this folder:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open `http://127.0.0.1:8080/`. Stop with Ctrl+C. Also check `/support/` and `/copy-color-puzzle/privacy/`. Email buttons open the visitor's email app; the address is also displayed for manual use.

## Publish with GitHub Pages

1. Create a separate repository such as `joyyu-website`. GitHub Free Pages requires a public repository.
2. Review your public GitHub profile and commit author settings before uploading, according to your preferred JoYYu branding.
3. Upload the contents of this folder, including the hidden `.nojekyll` file, to the root of the `main` branch. Do not add an extra enclosing folder.
4. In repository **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`, and save.
5. Check the successful deployment and the generated address, normally `https://USERNAME.github.io/joyyu-website/`.
6. Verify ownership of `joyyu.com.vn` in GitHub account Pages settings.
7. Set `joyyu.com.vn` in repository Pages settings before changing its website DNS records. GitHub creates the root `CNAME` file; retain it in later updates.
8. Configure P.A Việt Nam DNS using GitHub's current instructions, enable Enforce HTTPS when ready, and test all three pages while signed out.

The files use relative links and work both under a repository path and at a custom-domain root. A `CNAME` file is deliberately absent until the domain is configured in GitHub.

Official instructions: [create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## GitLab is also an option

These HTML/CSS files also work with GitLab Pages. GitLab supports free static hosting, custom domains, and automated Let's Encrypt certificates. Its deployment uses a `.gitlab-ci.yml` Pages job; that configuration has not been added because the current setup guide uses GitHub.

GitHub was recommended for its simple branch-publishing setup and the existing GitHub workflow. It is a convenience choice, not a website requirement. If changing hosts, use that host's DNS instructions rather than GitHub's IP addresses.

References: [GitLab Pages](https://docs.gitlab.com/user/project/pages/), [automatic certificates](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/lets_encrypt_integration/).

## Policy source and review status

The HTML policy preserves all 13 sections, subsections, the provider table, dates, and service links from the owner's existing **Copy & Color Puzzle Privacy Policy - JoYYu.docx** draft, revised 29 October 2026. Formatting was adapted for the web. No legal approval or provider certification was established by this conversion.

Source document SHA-256: `595be6fe040ded275f03ab16b422c4909650f9293c2779b3402a50e9cf879463`.

Before using the URL for release, resolve the existing review items: required operator disclosures, actual SDK/data practices and retention, and regional consent/children's treatment. Recheck the statement about Families-certified SDK versions. Set the effective/revision dates for the version actually published. The homepage can be published separately while policy review continues.

Edit the HTML policy as the maintained website source. If the Word draft is also maintained, update both together and record the revision date; the website does not import Word changes automatically.

## Planned permanent URLs

- `https://joyyu.com.vn/`
- `https://joyyu.com.vn/support/`
- `https://joyyu.com.vn/copy-color-puzzle/privacy/`

After publication, use the exact final policy URL in the game and Play Console. Keep this path stable in later revisions.

## Maintenance

Commit website changes to the publishing branch, check deployment, then verify the live pages. Keep the support mailbox operational and renew the domain. No personal email address other than the selected public support address should be added to website content or commit metadata unintentionally.

## Local verification — 29 October 2026

- All three pages and 52 local links/assets checked.
- All 82 policy content blocks, 13 main sections, four provider rows, and five provider links preserved from the source draft.
- Desktop and phone-sized layouts reviewed in a browser; support and policy pages fit the mobile viewport, and the provider table scrolls within its container.
- Support FAQ expansion and policy contents navigation checked.
- No obsolete package/brand or personal legal name found in the website text.

These local checks do not verify live hosting, DNS, HTTPS, mailbox delivery, or legal/content approval. Deployment verification is recorded separately below.

## Deployment

Publishing is configured separately in repository Settings → Pages. The initial GitHub Pages URL is `https://game83-maker.github.io/joyyu-website/`. The custom `joyyu.com.vn` domain remains a later DNS setup task; policy-content review remains separate from hosting setup.
