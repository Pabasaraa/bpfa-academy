export interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  thumbnail_url?: string;
}

export interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export class InstagramAPI {
  private accessToken: string;
  private baseUrl = 'https://graph.instagram.com';

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  async getPosts(limit: number = 12): Promise<InstagramPost[]> {
    try {
      const fields = [
        'id',
        'caption',
        'media_type',
        'media_url',
        'permalink',
        'timestamp',
        'like_count',
        'comments_count',
        'thumbnail_url'
      ].join(',');

      const url = `${this.baseUrl}/me/media?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

      const response = await fetch(url, {
        next: { revalidate: 180 } // Cache for 3 minutes for faster updates
      });

      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
      }

      const data: InstagramApiResponse = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      throw error;
    }
  }

  async refreshAccessToken(clientId: string, clientSecret: string): Promise<string> {
    try {
      const url = `${this.baseUrl}/refresh_access_token?grant_type=ig_refresh_token&access_token=${this.accessToken}`;

      const response = await fetch(url, { method: 'GET' });

      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status}`);
      }

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error('Error refreshing Instagram access token:', error);
      throw error;
    }
  }
}

// Alternative: Instagram scraping approach (no API key needed)
export async function getInstagramPostsFromUsername(username: string, limit: number = 12): Promise<InstagramPost[]> {
  try {
    // This is a simplified approach - in production, you'd want to use a service like:
    // - Instagram Basic Display API (requires app approval)
    // - Third-party services like RapidAPI's Instagram scraper
    // - Or build your own scraping service

    const response = await fetch(`https://www.instagram.com/${username}/?__a=1`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      next: { revalidate: 180 } // Cache for 3 minutes for faster updates
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    // Note: Instagram has made this increasingly difficult and may block requests
    // This is just a structure - you'll need a proper service
    const data = await response.json();

    // Transform the data to match our interface
    const posts = data?.graphql?.user?.edge_owner_to_timeline_media?.edges?.slice(0, limit).map((edge: any) => ({
      id: edge.node.id,
      caption: edge.node.edge_media_to_caption?.edges?.[0]?.node?.text || '',
      media_type: edge.node.__typename === 'GraphVideo' ? 'VIDEO' : 'IMAGE',
      media_url: edge.node.display_url,
      permalink: `https://www.instagram.com/p/${edge.node.shortcode}/`,
      timestamp: new Date(edge.node.taken_at_timestamp * 1000).toISOString(),
      like_count: edge.node.edge_media_preview_like?.count || 0,
      comments_count: edge.node.edge_media_to_comment?.count || 0,
      thumbnail_url: edge.node.thumbnail_src
    })) || [];

    return posts;
  } catch (error) {
    console.error('Error scraping Instagram posts:', error);
    throw error;
  }
}

// Utility function to extract username from Instagram URL
export function extractInstagramUsername(url: string): string {
  const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([a-zA-Z0-9_.]+)\/?/;
  const match = url.match(regex);
  return match ? match[1] : '';
}