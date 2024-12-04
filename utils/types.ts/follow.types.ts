export type RecommendedFollowers = {
  name: string;
  id: string;
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
};
