import { createClient } from "@supabase/supabase-js";
import { Database } from "../../types_db";

const supabaseUrl = "https://zdqhdtodkfmkizjmrnfs.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey as string
);
