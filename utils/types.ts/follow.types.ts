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
  btnLoading: boolean;
  followRecommendations: RecommendedFollowers[];
  followRecommendationsAction: () => Promise<
    FollowersRecommendationsResponseBody | undefined
  >;
  followUserAction: (
    followingId: string
  ) => Promise<FollowersRecommendationsResponseBody | undefined>;
};
