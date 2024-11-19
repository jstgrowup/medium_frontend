export type RecommendedFollowers = {
  name: string;
  id: string;
};

export interface FollowersRecommendationsResponseBody {
  data: RecommendedFollowers[];
}
export type FollowStoreType = {
  loading: boolean;
  error: string | null;
  followRecommendations: RecommendedFollowers[];
  followRecommendationsAction: () => Promise<
    FollowersRecommendationsResponseBody | undefined
  >;
};
