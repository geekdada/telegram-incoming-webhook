# telegram-incoming-webhook

Send messages to a Telegram chat easily.

You can use `tiw.geekdada.deno.net` directly, which **does't store your token or
message**. You can also fork this project and deploy to
[Deno Deploy](https://deno.com/deploy) yourself, it's free.

## Deploy

This app runs on the new [Deno Deploy](https://console.deno.com/) (Deploy
Classic was shut down in July 2026). The `deploy` key in `deno.json` declares
the app configuration, so no build setup is required:

1. Create an organization and app at
   [console.deno.com](https://console.deno.com/), linking this repository (no
   install or build command needed), or
2. Deploy from the CLI with `deno deploy` (see the
   [migration guide](https://docs.deno.com/deploy/migration_guide/) if coming
   from Deploy Classic).

The app listens on `PORT` (default 8080) and needs no environment variables.

## Usage

### Send JSON payload

```
$ curl -X POST -H "Content-Type: application/json" -d '{"text":"Hello, world!"}' https://tiw.geekdada.deno.net/<botToken>/<chatId>
```

The payload will be formatted and sent to the designated chat.

### Send normal message

```
$ curl -X POST -d 'Message' https://tiw.geekdada.deno.net/<botToken>/<chatId>
```

### Send markdown message

```
$ curl -X POST https://tiw.geekdada.deno.net/<botToken>/<chatId>?parse_mode=MarkdownV2 -d $'*bold \\*text*
_italic \\*text_
'
```

## How to get the `chatId`

```
$ curl https://tiw.geekdada.deno.net/<botToken>/chats
```

If you can't see any `chatId`, you probably haven't added the bot to the chat or
talked to the bot yet.

## Privacy

## License

[MIT License](/LICENSE)
