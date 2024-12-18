export type RecommendedFollowers = {
  name: string;
  id: string;
  profilePic: string;
  role: string;
};
export type FollowersDetails = {
  followerCount: number;
  followingCount: number;
  postCount: number;
};
export interface FollowersRecommendationsResponseBody {
  data: RecommendedFollowers[];
}
export interface FollowersDetailsResponseBody {
  data: FollowersDetails;
}
export type FollowStoreType = {
  loading: boolean;
  error: string | null;
  btnLoading: boolean;
  followRecommendations: RecommendedFollowers[];
  followRecommendationsAction: () => Promise<
    FollowersRecommendationsResponseBody | undefined
  >;
  followUserAction: (
    followingId: string
  ) => Promise<FollowersRecommendationsResponseBody | undefined>;
  followDetailsAction: () => Promise<FollowersDetailsResponseBody | undefined>;
  followerCount: number;
  followingCount: number;
  postCount: number;
  profileFollowerCount: number;
  profileFollowingCount: number;
  profilePostCount: number;
  isFollowing: number;
  profileFollowDetailsAction: (
    id: string
  ) => Promise<FollowersDetailsResponseBody | undefined>;
};
