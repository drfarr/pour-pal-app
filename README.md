# Pour Pal 🫗

##### _Your ultimate cocktail companion._

![alt text](https://github.com/user-attachments/assets/7c909bec-57d5-4fac-a6a3-8e1222ba354d)

Focusing on:

- 🎡 Github Actions that builds a
- 🐳 Docker Container to deploy to
- 🌁 Google Cloud Run so we have something to look at 👇
- https://pour-pal-app-6812063484.europe-west2.run.app/

For an funky retro looking app with a modern twist that was built with:

- 🧪 Test Driven Development via
- 🧱 Unit Tests and
- 🎭 Mocked APIs (great for when you home internet is broken) but also helps with
- 🧩 End-to-end type saftey using Zod schemas to assist smooth
- ⚛ React Router transition between pages and validate use cases via
- 📏 Vitest

It's not the sexiest thing it the world, but it's heading in that direction 🏗!

## Working locally

To run the app locally copy the `env.example` to `.env`

```bash
cp env.example .env
```

Update `COCKTAIL_API_KEY` param in `.env` to your personal `COCKTAIL_API_KEY`

Install the dependencies

```bash
npm i
```

### Dev mode

Run the app in dev mode with the following command:

```bash
npm run dev
```

### Preview mode

Run the app in preview mode with the following commands:

```bash
npm run build
```

followed by:

```bash
npm run preview
```
