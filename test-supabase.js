const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmYnF2bnBwd2ZjcXl5aXFhc2Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NjAzMDgsImV4cCI6MjA4NzIzNjMwOH0.sfbQhKbW9eccNEx9TGlfD8lVBhLVJduC-Pg8mylPc-w';
const supabaseUrl = 'https://kfbqvnppwfcqyyiqasfy.supabase.co';

fetch(`${supabaseUrl}/auth/v1/settings?apikey=${supabaseAnonKey}`)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
