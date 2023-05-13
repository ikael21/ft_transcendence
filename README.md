# ft_transcendence

## Project development

All development happens inside the `docker` containers managed by `docker-compose`

## If you work on School21 Mac

Add your project directory to `File Sharing`

<img width="1293" alt="Screen Shot 2023-05-13 at 2 11 24 PM" src="https://github.com/ikael21/ft_transcendence/assets/83520969/42fe8417-73a5-4dab-9eec-6c892d1db844">

## Start the application

```bash
make app
```

## Setup containers

```bash
make app-build
make app-init
```

## Enter application container bash session

```bash
make app-bash-backend
make app-bash-frontend
```

## What this project is about?

SPA (single page application)

Online Pong game (1972)

![pong-game](https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif)

### Requirements

- backend - `TypeScript` with `NestJS`
- frontend - any `TypeScript` framework (probably `React`)
- database - `PostgreSQL`
- use of `docker`/`docker-compose`

### Security concerns

- **hashed** password (`bcrypt`)
- protection from **sql injections**
- **server-side validation** for forms and user inputs
- no public stored credentials (`API` keys, env. variables)

### User

- `OAuth` (Intranet)
- user minimum must have properties
  - unique name
  - avatar (custom or default)
  - password
- two-factor authentication
- ability to add other users as friends and see their status (online, offline, in the game, etc)
- stats (wins and losses, ladder level, achievements, and so forth)
- Match History (any logged in and not blocked user can see it)

### Chat and Messaging

- chat rooms (can be public, private, protected by a password)
  - `owner` - ability to add users, set a password, set chat admins
  - `any user` - ability to invite others to play (via chat room)
- sending direct messages (except blocked users)

### Game

- ability to play live Pong vs other users
- match-making system (user can join a queue and then automatically matched with other user)
- customization options (different maps)
- ability to watch live game

### Some issues to think about

- unexpected disconnection
