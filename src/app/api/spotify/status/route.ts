import { NextResponse } from "next/server";
import { getSpotifyStatus } from "@/lib/spotify";

export const dynamic = 'force-dynamic';
export const revalidate = 30;


export async function GET() {
  try {
    const response = await getSpotifyStatus();

    if (!response) {
      return NextResponse.json({ isPlaying: false, song: null }, { status: 200 });
    }

    const responseData = {
      isPlaying: response.isPlaying,
      song: response.song
    };

    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (err) {
    console.error('Spotify API error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch spotify status. ' + err },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}