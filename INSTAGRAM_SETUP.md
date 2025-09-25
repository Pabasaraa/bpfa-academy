# Instagram Integration Setup Guide

Your Instagram page is now ready to automatically fetch and display real posts from your Instagram account! Here's how to set it up:

## Quick Setup (Choose One Option)

### Option 1: Simple Username Setup (Easiest)
Just add your Instagram username to your environment variables:

```env
# Add to your .env.local file
INSTAGRAM_USERNAME=your_instagram_username
NEXT_PUBLIC_INSTAGRAM_USERNAME=your_instagram_username
```

### Option 2: Instagram Basic Display API (Most Reliable)
For the best results, set up the official Instagram API:

1. **Create Facebook App**:
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app and add Instagram Basic Display product

2. **Add Environment Variables**:
```env
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_APP_ID=your_app_id_here
INSTAGRAM_APP_SECRET=your_app_secret_here
INSTAGRAM_USERNAME=your_instagram_username
```

### Option 3: Third-Party Service (RapidAPI)
For a middle-ground approach:

```env
RAPIDAPI_KEY=your_rapidapi_key_here
INSTAGRAM_USERNAME=your_instagram_username
```

## Features

✅ **Automatic Post Fetching**: Just plug in your Instagram URL/username
✅ **Real-time Updates**: Posts update automatically with caching
✅ **Smart Fallbacks**: Shows sample posts if API is unavailable
✅ **Multiple Methods**: Instagram API, third-party services, or web scraping
✅ **Loading States**: Beautiful skeleton loading animations
✅ **Error Handling**: Graceful fallbacks with user-friendly messages
✅ **Responsive Design**: Works on all devices
✅ **Performance Optimized**: Built-in caching and rate limiting

## How It Works

1. **API Priority**: Tries Instagram API first (most reliable)
2. **Fallback Options**: Falls back to third-party services or web scraping
3. **Sample Posts**: Shows realistic sample posts if all methods fail
4. **Status Indicators**: Shows users which method is currently active
5. **Refresh Button**: Allows manual refresh of posts

## File Structure

```
/app/instagram/page.tsx          # Instagram page component
/components/instagram-feed.tsx   # Main feed component
/app/api/instagram/route.ts      # API route for fetching posts
/lib/instagram.ts               # Instagram API utilities
/.env.example                   # Environment variable examples
```

## Environment Variables Reference

```env
# Method 1: Instagram Basic Display API (Recommended)
INSTAGRAM_ACCESS_TOKEN=IGQVJYour_Long_Access_Token_Here
INSTAGRAM_APP_ID=1234567890123456
INSTAGRAM_APP_SECRET=your_app_secret_here

# Method 2: Username-based (Simple)
INSTAGRAM_USERNAME=blackpantheracademy
NEXT_PUBLIC_INSTAGRAM_USERNAME=blackpantheracademy

# Method 3: Third-party API (RapidAPI)
RAPIDAPI_KEY=your_rapidapi_key_here

# Optional Settings
INSTAGRAM_POSTS_LIMIT=12
INSTAGRAM_CACHE_DURATION=300
```

## Testing

1. **Development**: The page works immediately with sample posts
2. **Add Username**: Add `INSTAGRAM_USERNAME=your_username` to see it in action
3. **Check Status**: Look for status indicators on the page:
   - ✅ Connected to Instagram API
   - ✅ Connected via RapidAPI
   - ⚠️ Using web scraping
   - ⚠️ Using sample posts

## Production Setup

1. Copy `.env.example` to `.env.local`
2. Add your Instagram username or API credentials
3. Deploy - the page will automatically start fetching real posts!

## Troubleshooting

- **Not showing real posts?** Check your environment variables
- **API errors?** The system will automatically fall back to sample posts
- **Need fresh posts?** Use the refresh button on the page
- **Want to test?** Change `INSTAGRAM_USERNAME` and refresh

## Security Notes

- API keys are kept server-side for security
- Public environment variables are only used for display (usernames)
- All API calls are cached and rate-limited
- Graceful fallbacks ensure the page always works

That's it! Your Instagram integration is now fully automated. Just add your username or API credentials and watch your real posts appear! 🎉