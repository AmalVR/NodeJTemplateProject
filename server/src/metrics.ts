import { PromClient } from "@syndicatedcrypto/telemetry-lib";
export const promClient = new PromClient(3333, ["worker"]);
