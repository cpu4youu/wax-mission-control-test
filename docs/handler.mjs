const handler = async (req, res, next) => {
  if (req.path === "/api/medium") {
    try {
      const slug = req.query.slug;
      const data = await fetch(`http://medium.com/feed/${slug}`);
      const xml = await data.text();
      res.end(JSON.stringify({ xml }));
    } catch (error) {
      console.log({ error });
    }
  }
  next();
};
export {
  handler
};
