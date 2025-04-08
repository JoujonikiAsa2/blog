// utils/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";
import config from "../config";
export const supabase = createClient(
  config.database_url as string,
  config.supabase_key as string
);
