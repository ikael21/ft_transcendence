#colors for beauty
YELLOW = \033[33;1m
RESET = \033[0m
GREEN = \033[32;1m
MAGENTA = \033[35;1m

app:
	@docker-compose up

app-build:
	@docker-compose build

app-init: app-init-backend app-init-frontend

app-init-backend:
	@echo "$(YELLOW)BACKEND$(RESET) initialization"
	docker-compose run --rm backend bash -c "yarn install"

app-init-frontend:
	@echo "$(YELLOW)FRONTEND$(RESET) initialization"
	docker-compose run --rm frontend bash -c "npm install --frozen-lockfile"

app-bash-backend:
	@docker-compose run --rm backend bash

app-bash-frontend:
	@docker-compose run --rm frontend bash
