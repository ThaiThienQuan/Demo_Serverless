export default function SST(app) {
  const site = new sst.aws.StaticSite("WebDemove", {
    path: "D:\react\my-react-app",
    buildCommand: "npm run build",
    buildOutput: "dist",
    enviroment: {
      VITE_API_URL: "https://api.demoserverless.com",
    },
    domain: "myviteapp.com",
    dns:sst.cloudflare.dns()
  });
  app.addOutputs({WebsiteURL:site.url});
}
