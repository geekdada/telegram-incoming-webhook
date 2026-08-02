# telegram-incoming-webhook

A stateless Deno HTTP proxy that forwards POSTed payloads to a Telegram chat via the Telegram Bot API. Deployed on Deno Deploy (`tiw.geekdada.deno.net`). It never stores tokens or messages; the bot token and chat ID are URL path parameters on each request.

## Commands

- Run locally: `deno run --allow-net --allow-env index.ts` (net access is required for the Telegram API; env access for `PORT`, default 8080)
- Type check: `deno check index.ts`
- Lint/format: `deno lint` / `deno fmt`
- There are no tests and no build step.

## Architecture

Two files only:

- `index.ts` — the entire server. An [oak](https://deno.land/x/oak) `Application` with a `Router` and one error-handling middleware that converts thrown errors (including `ky` HTTP errors from the Telegram API) into `{ ok: false, message }` JSON responses. Three routes:
  - `POST /:botToken/:chatId` — main endpoint. Reads the body as text, attempts `JSON.parse`; on success the payload is rendered as Telegram HTML via `formatJSON`, on failure the raw text is sent as-is. Forwards to `https://api.telegram.org/bot<token>/sendMessage` with `parse_mode` from the query string (default `HTML`) and returns Telegram's response verbatim.
  - `GET /:botToken/chats` — proxies `getUpdates?limit=10` so users can discover their `chatId`, returning each update as a line of JSON.
  - `GET /` — static info page pointing at the repo.
- `utils.ts` — `formatJSON`, a recursive formatter that turns nested JSON into Telegram HTML (`<b>` keys, `<code>#N</code>` markers for array indices, 4-space indentation, `null` values skipped). Its output assumes `parse_mode=HTML`, so changing the default parse mode in `index.ts` affects it.

## Conventions

- Dependencies come from the import map in `deno.json`: `ky` via `npm:ky` (HTTP client) and `oak` via `jsr:@oak/oak`. Add new dependencies there rather than with inline URLs.
- Keep the service stateless: no persistence of tokens, chat IDs, or message content.
