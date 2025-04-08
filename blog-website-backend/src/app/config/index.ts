import dotenv from "dotenv";
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    supabase_key: process.env.SUPABASE_KEY,
    cloud_name: process.env.CLOUD_NAME,
    cloud_api_key: process.env.CLOUD_API_KEY,
    cloud_api_secret: process.env.CLOUD_API_SECRET
}
