import { medias, media, createMedia, updateMedia, deleteMedia } from './medias';
import type { StandardScenario } from './medias.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('medias', () => {
	scenario('returns all medias', async (scenario: StandardScenario) => {
		const result = await medias();

		expect(result.length).toEqual(Object.keys(scenario.media).length);
	});

	scenario('returns a single media', async (scenario: StandardScenario) => {
		const result = await media({ id: scenario.media.one.id });

		expect(result).toEqual(scenario.media.one);
	});

	scenario('creates a media', async () => {
		const result = await createMedia({
			input: {
				title: 'String',
				rating: 'String',
				year: 1343576,
				category: 'String',
				isTrending: true,
			},
		});

		expect(result.title).toEqual('String');
		expect(result.rating).toEqual('String');
		expect(result.year).toEqual(1343576);
		expect(result.category).toEqual('String');
		expect(result.isTrending).toEqual(true);
	});

	scenario('updates a media', async (scenario: StandardScenario) => {
		const original = await media({ id: scenario.media.one.id });
		const result = await updateMedia({
			id: original.id,
			input: { title: 'String2' },
		});

		expect(result.title).toEqual('String2');
	});

	scenario('deletes a media', async (scenario: StandardScenario) => {
		const original = await deleteMedia({ id: scenario.media.one.id });
		const result = await media({ id: original.id });

		expect(result).toEqual(null);
	});
});
