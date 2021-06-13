import { Hit } from '@algolia/client-search';

type WazirXRecord = {
  //User Search
  raw: RawUser;
  email: string;
  walletAddress: string;

  //NFT Search
  metaData: MetaData;
  tokenCreator: string;
  tokenOwner: string;

};

type RawUser = {
  bio: string;
  name: string;
  username: string;
  coverImage: string;
  profileImage: string;
}

type MetaData = {
  hash: string;
  name: string;
  description: string;
  ipfs: string;
}

type WithAutocompleteAnalytics<THit> = THit & {
  __autocomplete_indexName: string;
  __autocomplete_queryID: string;
};

export type WazirxHit = WithAutocompleteAnalytics<Hit<WazirXRecord>>;
