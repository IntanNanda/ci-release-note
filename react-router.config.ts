import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: false,
  basename: process.env.NODE_ENV === 'production' ? '/ci-release-note' : undefined,
} satisfies Config;