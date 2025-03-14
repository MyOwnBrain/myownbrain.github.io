FROM oven/bun:alpine AS base


FROM base AS deps

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install && bun pm cache clean


FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build


FROM httpd:alpine AS production

WORKDIR /

COPY --from=builder /app/apache-config.conf /usr/local/apache2/conf/httpd.conf
COPY --from=builder /app/out /usr/local/apache2/htdocs

EXPOSE 80

CMD [ "httpd", "-D", "FOREGROUND" ]