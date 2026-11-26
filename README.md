# Luxi Automotive Care

Private website design proposal by Uploft Digital for Luxi Automotive Care, Coimbatore.

## Run locally

Use Node.js 24 with npm. Open a terminal in the folder that contains `package.json`.

```sh
node --version
npm ci
npm run dev
```

Open http://localhost:3000. Use Ctrl+C to stop the dev server.

## Deploy to Vercel

The included `vercel.json` selects Vercel’s static build workflow. It runs `npm ci` and `npm run build`, then serves `out/`. This project needs no environment variables, database, or GitHub repository.

Run these commands from the project folder.

```sh
npm ci
npm run build
npx vercel@latest login
npx vercel@latest link
```

When prompted, choose the intended Vercel account or team and link an existing project or create one. Use `./` as the project directory. For a private proposal, open the new project in Vercel and enable **Settings → Deployment Protection → Vercel Authentication → All Deployments** before deploying. Check that your intended reviewers have access.

```sh
npx vercel@latest deploy --prod
```

Open the URL printed by Vercel. For later updates, run the same deploy command from the linked folder.

If you import through Vercel’s Git workflow, put these files at the repository root, import that repository into Vercel, and keep the settings in `vercel.json`. Use `Other` if the dashboard asks for a framework preset. The Vercel build uses Node.js 24 from `package.json`.

- [Vercel CLI deployment](https://vercel.com/docs/cli/deploy)
- [Vercel Deployment Protection](https://vercel.com/docs/deployment-protection)

## Prepare for a public launch

Confirm the phone number, full address, map pin, service scope and permission to publish directly with Luxi. Update `app/content.ts` and the contact section in `app/page.tsx` with any changes. The call links use the supplied number. Directions open a Google Maps business-name search. Enquiries go through the phone link.

The hero, service images and three showcase frames are original generated illustrations. The approach image and the paint correction frame use licensed process photography. All imagery illustrates the proposal. Replace it with approved Luxi photography before public launch. Update their alternative text to describe the actual images. Replace the concept wordmark, footer disclosure and index setting as part of the approved launch.

DM Sans, Space Grotesk and Instrument Serif are self-hosted. Their SIL Open Font Licenses are in `licenses/`.

## Photography credits

- `approach.webp` uses [Quentin Martinez’s car detailing photograph](https://www.pexels.com/photo/close-up-of-car-detailing-in-black-and-white-31124682/).
- `showcase-polish.webp` uses [Dextar Studio’s paint correction photograph](https://www.pexels.com/photo/person-polishing-the-surface-of-a-car-14615262/).

Both photographs are available under the [Pexels License](https://www.pexels.com/license/).
