/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_KEY?: string;
  readonly VITE_NEWSLETTER_API_URL?: string;
  readonly VITE_GA_TRACKING_ID?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_JUMIA_AFFILIATE_ID?: string;
  readonly VITE_KONGA_AFFILIATE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
