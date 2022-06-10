import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import bodyParser from "body-parser";
import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from "cors";
import "@tsed/ajv";
import "@tsed/swagger";
import { config, rootDir } from "./config";
import { IndexCtrl } from "$src/controllers/api/index.controller";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  mount: {
    "/v1": [`${rootDir}/controllers/**/*.ts`],
    "/": [IndexCtrl],
  },
  exclude: ["**/*.spec.ts"],
})
export class Server {
  @Inject()
  app!: PlatformApplication;

  @Configuration()
  settings!: Configuration;

  $beforeRoutesInit(): void {
    this.app
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json({ limit: "10mb" })) // in bytes
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
  }
}
