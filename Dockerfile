FROM ruby:2.7.5

ADD ./Gemfile ./workspace/
ADD ./Gemfile.lock ./workspace/
WORKDIR /workspace

RUN bundle install

ADD . /workspace
RUN bundle exec jekyll build

ENTRYPOINT ./run.sh
