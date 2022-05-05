export const schema = gql`
	type Media {
		id: Int!
		title: String!
		rating: String!
		year: Int!
		category: String!
		isTrending: Boolean!
	}

	type Query {
		medias: [Media!]! @requireAuth
		media(id: Int!): Media @requireAuth
	}

	input CreateMediaInput {
		title: String!
		rating: String!
		year: Int!
		category: String!
		isTrending: Boolean!
	}

	input UpdateMediaInput {
		title: String
		rating: String
		year: Int
		category: String
		isTrending: Boolean
	}

	type Mutation {
		createMedia(input: CreateMediaInput!): Media! @requireAuth
		updateMedia(id: Int!, input: UpdateMediaInput!): Media! @requireAuth
		deleteMedia(id: Int!): Media! @requireAuth
	}
`;
