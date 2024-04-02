# Use an official Node.js runtime as a parent image
FROM node:20.10.0-alpine as base
RUN apk add --no-cache libc6-compat

# Dependencies
FROM base as deps
WORKDIR /build

COPY .yarn ./.yarn
COPY yarn.lock .yarnrc.yml package.json ./
RUN yarn install --immutable

# Builder
FROM deps as builder
COPY . .
RUN yarn build:marketplace --skip-nx-cache

# Distribute
FROM base as runner
# Create a non-root user and switch to it
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir /app && chown nextjs:nodejs /app
WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /build/dist/apps/marketplace ./
RUN yarn install --immutable --production

# Use the non-root user to run your application
USER nextjs

ENV PORT=3000
EXPOSE $PORT

ENV HOSTNAME "0.0.0.0"
ENV NODE_ENV "production"
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
