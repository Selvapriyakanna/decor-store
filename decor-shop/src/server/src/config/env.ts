export const ENV = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/decor-shop',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    IMAGE_UPLOAD_PATH: process.env.IMAGE_UPLOAD_PATH || './uploads/images',
    EXCEL_EXPORT_PATH: process.env.EXCEL_EXPORT_PATH || './exports/transactions.xlsx',
};