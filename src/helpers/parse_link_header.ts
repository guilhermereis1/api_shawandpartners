function parse_link_header(header: string, host_url: string | undefined) {
  if (header.length === 0) {
    throw new Error("input must not be of zero length");
  }

  // Split parts by comma
  var parts = header.split(",");
  var links: any = {};
  // Parse each part into a named link
  for (var i = 0; i < parts.length; i++) {
    var section = parts[i].split(";");
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    var url = section[0].replace(/<(.*)>/, "$1").trim();
    var name = section[1].replace(/rel="(.*)"/, "$1").trim();

    links[name] = url.replace(
      "https://api.github.com",
      process.env.NODE_ENV === "production"
        ? `${host_url}/api`
        : `${host_url}:${process.env.PORT}/api`
    );
  }

  return links.next;
}

export default parse_link_header;

module.exports = parse_link_header;
