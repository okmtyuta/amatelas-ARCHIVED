pre-push: format lint test build-all

lint:
	pnpm lint

format:
	pnpm format

test:
	pnpm test:amatelas

build-all:
	pnpm build:all

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

