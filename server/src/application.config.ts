import { env } from "process";

interface AppConfig {
  isDev: boolean;
  appUrl: string;
}

export const Config: AppConfig = {
  isDev: env["NODE_ENV"] === "production" ? false : true,
  appUrl: env["APP_URL"] ?? "http://0.0.0.0:8081"
};
