import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: false,
  basename: '/ci-release-note',
} satisfies Config;