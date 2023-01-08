import dotenv from 'dotenv';

dotenv.config();

const config = {
	HOST: process.env.HOST || 'localhost',
	PORT: process.env.PORT || '8000',
	DATABASE_URL: process.env.DATABASE_URL,
};

export default config;
