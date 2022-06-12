# telegram-incoming-webhook

Send messages to a Telegram chat easily.

You can use `tiw.deno.dev` directly, which **does't store your token or message**. You can also fork this project and deploy to [Deno Deploy](<[url](https://deno.com/deploy)>) yourself, it's free.

## Usage

### Send JSON payload

```
$ curl -X POST -H "Content-Type: application/json" -d '{"text":"Hello, world!"}' https://tiw.deno.dev/<botToken>/<chatId>
```

The payload will be formatted and sent to the designated chat.

### Send normal message

```
$ curl -X POST -d 'Message' https://tiw.deno.dev/<botToken>/<chatId>
```

### Send markdown message

```
$ curl -X POST https://tiw.deno.dev/<botToken>/<chatId>?parse_mode=MarkdownV2 -d $'*bold \\*text*
_italic \\*text_
'
```

## How to get the `chatId`

```
$ curl https://tiw.deno.dev/<botToken>/chats
```

If you can't see any `chatId`, you probably haven't added the bot to the chat or talked to the bot yet.

## Privacy

## License

[MIT License](/LICENSE)
