import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

const BASE_URL = "https://back.legacy-ex.com/";

const routes = [
  "/",
  "/about-us",
  "/cargoPage",
  "/transportation",
  "/documents",
  "/container",
  "/oem",
  "/productchina",
  "/suppliers",
  "/examination",
  "/marketplace",
  "/contacts",
  "/news",
];

const sitemapStream = new SitemapStream({ hostname: BASE_URL });
routes.forEach(route => sitemapStream.write({ url: route }));
sitemapStream.end();

streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("Sitemap has been generated!");
});
