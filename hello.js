addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello world 🐛", {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});