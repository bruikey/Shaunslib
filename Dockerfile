FROM ubuntu:latest
LABEL maintainer="bruikey03"
RUN apt update && apt install -y nginx python3-pip libsqlite3-dev && rm -rf /var/lib/apt/lists/*

COPY webapp.conf /etc/nginx/conf.d

RUN pip3 install --upgrade pip setuptools
RUN pip3 install psycopg2-binary

WORKDIR /app

COPY . /app

RUN pip3 install -r /app/requirements.txt

CMD service nginx start && service nginx enable && service nginx restart && uwsgi --ini /app/app.ini --daemonize uwsgi.log
