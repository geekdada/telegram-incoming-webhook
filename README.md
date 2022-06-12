# telegram-incoming-webhook

Send messages to a Telegram chat easily.

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

If you can't see any chatIds, you probably haven't added the bot to the channel or talked to the bot yet.
