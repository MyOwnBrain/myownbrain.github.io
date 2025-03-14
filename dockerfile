FROM oven/bun:alpine AS base


FROM base AS deps

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install && bun pm cache clean


FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build


FROM base AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME='0.0.0.0'

CMD ["bun", "server.js"]
