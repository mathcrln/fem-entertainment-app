import type { Prisma } from '@prisma/client';

export const standard = defineScenario<Prisma.MediaCreateArgs>({
	media: {
		one: {
			data: {
				title: 'String',
				rating: 'String',
				year: 3010561,
				category: 'String',
				isTrending: true,
			},
		},
		two: {
			data: {
				title: 'String',
				rating: 'String',
				year: 9009514,
				category: 'String',
				isTrending: true,
			},
		},
	},
});

export type StandardScenario = typeof standard;
