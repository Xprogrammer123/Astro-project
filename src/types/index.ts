export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
  verified: boolean;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: Channel;
  views: string;
  uploadedAt: string;
  duration: string;
  description?: string;
  likes?: number;
  dislikes?: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}
