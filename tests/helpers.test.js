const parse_link_header = require("../src/helpers/parse_link_header");

describe("parse_link_header should return valid link", () => {
  test("parse_link_header should return valid link", () => {
    const link = parse_link_header(
      '<https://api.github.com/users?since=2051>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
      "http://localhost"
    );
    expect(link).toEqual("http://localhost:3333/api/users?since=2051");
  });
});
