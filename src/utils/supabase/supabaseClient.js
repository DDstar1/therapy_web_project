import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://crivorhwoyglfvjeqldt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyaXZvcmh3b3lnbGZ2amVxbGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMzQzOTksImV4cCI6MjAyOTcxMDM5OX0.bLkUITiXRyScD4XHrjqdyKu_1X2krglZaip4UXGtQxU";

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
