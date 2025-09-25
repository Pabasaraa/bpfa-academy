import { NextRequest, NextResponse } from 'next/server';
import { InstagramAPI, getInstagramPostsFromUsername, extractInstagramUsername, type InstagramPost } from '@/lib/instagram';

// Fallback posts when API is unavailable
const fallbackPosts: InstagramPost[] = [
  {
    id: "fallback-1",
    caption: "Intense MMA training session today! Our warriors pushing their limits 💪 #FightingAcademy #MMA #Training",
    media_type: 'IMAGE',
    media_url: '/instagram/post-1.jpg',
    permalink: 'https://instagram.com/p/sample1/',
    timestamp: new Date().toISOString(),
    like_count: 234,
    comments_count: 18
  },
  {
    id: "fallback-2",
    caption: "Championship victory! Congratulations to our fighter on becoming the new lightweight champion 🏆 #Champion #Victory",
    media_type: 'IMAGE',
    media_url: '/instagram/post-2.jpg',
    permalink: 'https://instagram.com/p/sample2/',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 567,
    comments_count: 45
  },
  {
    id: "fallback-3",
    caption: "Brazilian Jiu-Jitsu technique session with our head coach. Mastering the fundamentals 🥋 #BJJ #Technique",
    media_type: 'IMAGE',
    media_url: '/instagram/post-3.jpg',
    permalink: 'https://instagram.com/p/sample3/',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 189,
    comments_count: 12
  },
  {
    id: "fallback-4",
    caption: "Muay Thai conditioning class. Building warriors, one training session at a time 🔥 #MuayThai #Conditioning",
    media_type: 'IMAGE',
    media_url: '/instagram/post-4.jpg',
    permalink: 'https://instagram.com/p/sample4/',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 298,
    comments_count: 23
  },
  {
    id: "fallback-5",
    caption: "Behind the scenes: Preparing for the upcoming championship fight. The dedication never stops 🥊 #BehindTheScenes",
    media_type: 'IMAGE',
    media_url: '/instagram/post-5.jpg',
    permalink: 'https://instagram.com/p/sample5/',
    timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 412,
    comments_count: 31
  },
  {
    id: "fallback-6",
    caption: "New students joining our academy family! Welcome to the warrior's path 🛡️ #NewStudents #WarriorFamily",
    media_type: 'IMAGE',
    media_url: '/instagram/post-6.jpg',
    permalink: 'https://instagram.com/p/sample6/',
    timestamp: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 156,
    comments_count: 8
  }
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '12');

    // Try multiple approaches in order of preference
    let posts: InstagramPost[] = [];
    let source = 'fallback';

    // Method 1: Instagram Basic Display API
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    if (accessToken && !posts.length) {
      try {
        const instagram = new InstagramAPI(accessToken);
        posts = await instagram.getPosts(limit);
        source = 'api';
        console.log('✅ Instagram posts fetched via API');
      } catch (error) {
        console.warn('❌ Instagram API failed:', error);
      }
    }

    // Method 2: Third-party service (RapidAPI example)
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const username = process.env.INSTAGRAM_USERNAME || extractInstagramUsername(process.env.INSTAGRAM_URL || '') || 'fightingacademy31';

    if (rapidApiKey && username && !posts.length) {
      try {
        const response = await fetch(`https://instagram-scraper-api2.p.rapidapi.com/v1/posts?username_or_id_or_url=${username}&url_embed_safe=true`, {
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'instagram-scraper-api2.p.rapidapi.com'
          },
          next: { revalidate: 180 } // Cache for 3 minutes for faster updates
        });

        if (response.ok) {
          const data = await response.json();
          posts = data.data?.slice(0, limit).map((post: any) => ({
            id: post.id || post.pk,
            caption: post.caption?.text || '',
            media_type: post.media_type === 2 ? 'VIDEO' : 'IMAGE',
            media_url: post.image_versions2?.candidates?.[0]?.url || post.display_url,
            permalink: `https://www.instagram.com/p/${post.code}/`,
            timestamp: new Date(post.taken_at * 1000).toISOString(),
            like_count: post.like_count || 0,
            comments_count: post.comment_count || 0,
            thumbnail_url: post.image_versions2?.candidates?.[1]?.url
          })) || [];
          source = 'rapidapi';
          console.log('✅ Instagram posts fetched via RapidAPI');
        }
      } catch (error) {
        console.warn('❌ RapidAPI failed:', error);
      }
    }

    // Method 3: Username scraping (less reliable)
    if (username && !posts.length) {
      try {
        posts = await getInstagramPostsFromUsername(username, limit);
        source = 'scraping';
        console.log('✅ Instagram posts fetched via scraping');
      } catch (error) {
        console.warn('❌ Instagram scraping failed:', error);
      }
    }

    // Fallback to mock data
    if (!posts.length) {
      posts = fallbackPosts.slice(0, limit);
      source = 'fallback';
      console.log('⚠️  Using fallback Instagram posts');
    }

    // Add cache headers
    const response = NextResponse.json({
      success: true,
      data: posts,
      source,
      timestamp: new Date().toISOString(),
      count: posts.length
    });

    response.headers.set('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=360');

    return response;

  } catch (error) {
    console.error('Instagram API route error:', error);

    // Return fallback data on error
    return NextResponse.json({
      success: false,
      data: fallbackPosts.slice(0, parseInt(request.nextUrl.searchParams.get('limit') || '12')),
      source: 'fallback',
      error: 'Failed to fetch Instagram posts',
      timestamp: new Date().toISOString(),
      count: fallbackPosts.length
    }, { status: 200 }); // Still return 200 with fallback data
  }
}