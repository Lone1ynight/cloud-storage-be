import { diskStorage } from 'multer';

const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normalizeFileName = (req, file, callback) => {
  const fileTextName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileTextName}`);
};
export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
