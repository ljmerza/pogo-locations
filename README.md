# pogo-locations

Shows locations of Pokemon Go gyms in my area and links to Google maps. I don't play much so this list helps me know where gyms are at when people mention locations so I can stop asking.

## Installation

Need .env file with db creds and port

```bash
docker build -t ljmerza/pogo .
docker run -p 3000:3000 ---env-file=.env -d ljmerza/pogo
```
