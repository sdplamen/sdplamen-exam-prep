const assert = require('assert');
const fetch = require('node-fetch');

suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8888/about");
    let body = await res.text();
    assert.ok(body.includes("<title>About my shopping list</title>"));
    assert.ok(body.includes("<h1>About my shopping list</h1>"));
  });
});