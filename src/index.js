// Serves the static site, and sends www.amryadam.com to the bare domain so
// every page has one address.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.amryadam.com") {
      url.hostname = "amryadam.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
