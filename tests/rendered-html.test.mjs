import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Isaiah Andrei Noda — Full-Stack Developer<\/title>/i,
  );
  assert.match(html, /I turn complex/);
  assert.match(html, /BikeMate Service Platform/);
  assert.match(html, /Mary Mother of Mercy Legacy Platform/);
  assert.match(html, /La Marea Guest Management System/);
  assert.match(html, /Graduated With Highest Honors/);
  assert.match(html, /Open for 2027 internships/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("includes production metadata and removes starter artifacts", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /PROJECT EXPLORER/);
  assert.match(page, /Isaiah_Andrei_Noda_Detailed_CV\.pdf/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /soyaaaa081305\.github\.io/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(
    new URL(
      "../public/documents/Isaiah_Andrei_Noda_Detailed_CV.pdf",
      import.meta.url,
    ),
  );
});
