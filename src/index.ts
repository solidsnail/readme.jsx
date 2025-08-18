import { env } from "@huggingface/transformers";

const setCacheDir = (cacheDir: string) => {
  env.cacheDir = cacheDir;
};
export { setCacheDir };
