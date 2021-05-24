FROM neo4j:3.5.3

RUN apk update
RUN apk add --quiet openssl sed wget unzip

COPY ./populate_db.sh /populate_db.sh

ENV EXTENSION_SCRIPT /populate_db.sh
ENV NEO4J_AUTH=neo4j/SasBXziwPE57