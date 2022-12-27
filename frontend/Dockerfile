FROM node:19-buster-slim

ARG PACKAGES='build-essential vim git curl wget'
ARG APP_DIR='/app'
ARG PROMPT="PS1='\[\033[1;31m\](\$APP) \[\033[1;33m\]\u \[\033[1;34m\]\w\[\033[0;35m\] \[\033[1;36m\]# \[\033[0m\]'"

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -yq --no-install-recommends $PACKAGES && \
    apt-get clean all

RUN echo $PROMPT >> $HOME/.bashrc

WORKDIR $APP_DIR

COPY package.json .
COPY package-lock.json .
COPY scripts .

RUN npm install --frozen-lockfile

EXPOSE 3000

CMD bash scripts/run.sh
