pre-push: format lint build-all

lint:
	pnpm lint

format:
	pnpm format

build-all:
	pnpm build:all

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

