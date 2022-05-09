DOCKER=docker-compose -f ./docker/docker-compose.yml
NODE=node16

install:
	$(DOCKER) build
	$(DOCKER) run --rm $(NODE) npm install

compile:
	$(DOCKER) run --rm $(NODE) npx tsc
