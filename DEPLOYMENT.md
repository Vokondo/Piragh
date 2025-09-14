# PIRAG Website Deployment Guide

## Cloudflare Pages Deployment

This guide explains how to deploy the PIRAG website to Cloudflare Pages using Wrangler.

### Prerequisites

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

### Configuration Files

The following files have been configured for deployment:

- `wrangler.toml` - Wrangler configuration
- `public/_redirects` - Client-side routing support
- `public/_routes.json` - Routing configuration
- `functions/_middleware.js` - Middleware for request handling
- `vite.config.ts` - Updated for static deployment

### Deployment Commands

#### Option 1: Using npm scripts
```bash
# Deploy to production
npm run deploy

# Deploy to preview
npm run deploy:preview
```

#### Option 2: Using Wrangler directly
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

### Build Configuration

The build process:
1. Runs `npm run build` to create the `dist` directory
2. Deploys the `dist` directory to Cloudflare Pages
3. Handles client-side routing with `_redirects` file

### Environment Variables

Set these in your Cloudflare Pages dashboard:
- `NODE_ENV=production`

### Custom Domain (Optional)

To add a custom domain:
1. Go to your Cloudflare Pages dashboard
2. Navigate to your project
3. Go to "Custom domains"
4. Add your domain

### Troubleshooting

#### Common Issues:

1. **"Missing entry-point" error**: Ensure `wrangler.toml` has `pages_build_output_dir = "dist"`

2. **Routing issues**: Verify `public/_redirects` contains `/*    /index.html   200`

3. **Build failures**: Check that `npm run build` works locally first

4. **Asset loading issues**: Ensure `vite.config.ts` has `base: './'`

### File Structure

```
├── dist/                    # Build output (generated)
├── functions/
│   └── _middleware.js       # Request middleware
├── public/
│   ├── _redirects          # Client-side routing
│   └── _routes.json        # Routing configuration
├── src/                    # Source code
├── wrangler.toml           # Wrangler configuration
└── vite.config.ts          # Vite configuration
```

### Deployment Process

1. **Build**: `npm run build` creates optimized static files in `dist/`
2. **Deploy**: `wrangler pages deploy dist` uploads files to Cloudflare
3. **Route**: `_redirects` ensures React Router works correctly
4. **Serve**: Cloudflare serves your static site globally

### Performance Optimization

The configuration includes:
- Asset optimization via Vite
- Global CDN via Cloudflare
- Automatic HTTPS
- Edge caching
- Client-side routing support
