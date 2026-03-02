import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kfbqvnppwfcqyyiqasfy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYnF2bnBwd2ZjcXl5aXFhc2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NjAzMDgsImV4cCI6MjA4NzIzNjMwOH0.sfbQhKbW9eccNEx9TGlfD8lVBhLVJduC-Pg8mylPc-w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
