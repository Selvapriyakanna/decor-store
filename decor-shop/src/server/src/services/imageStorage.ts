import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set up storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../../uploads');
    fs.exists(dir, (exists) => {
      if (!exists) {
        fs.mkdirSync(dir);
      }
      cb(null, dir);
    });
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Function to handle image upload
export const uploadImage = (req: Request, res: Response) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Image upload failed', error: err });
    }
    res.status(200).json({ message: 'Image uploaded successfully', filename: req.file.filename });
  });
};

// Function to get the image URL
export const getImageUrl = (filename: string) => {
  return path.join(__dirname, '../../uploads', filename);
};