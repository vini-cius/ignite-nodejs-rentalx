import fs from 'fs';

const deleteFile = async (filename: string): Promise<void> => {
	try {
		await fs.promises.stat(filename);
	} catch (err) {
		return;
	}

	await fs.promises.unlink(filename);
};


export { deleteFile };
