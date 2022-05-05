import type { Prisma } from '@prisma/client';

import { db } from 'src/lib/db';

export const medias = () => {
	return db.media.findMany();
};

export const media = ({ id }: Prisma.MediaWhereUniqueInput) => {
	return db.media.findUnique({
		where: { id },
	});
};

interface CreateMediaArgs {
	input: Prisma.MediaCreateInput;
}

export const createMedia = ({ input }: CreateMediaArgs) => {
	return db.media.create({
		data: input,
	});
};

interface UpdateMediaArgs extends Prisma.MediaWhereUniqueInput {
	input: Prisma.MediaUpdateInput;
}

export const updateMedia = ({ id, input }: UpdateMediaArgs) => {
	return db.media.update({
		data: input,
		where: { id },
	});
};

export const deleteMedia = ({ id }: Prisma.MediaWhereUniqueInput) => {
	return db.media.delete({
		where: { id },
	});
};
