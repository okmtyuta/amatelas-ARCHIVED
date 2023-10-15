pre-push: format lint test build

lint:
	pnpm lint

format:
	pnpm format

test:
	pnpm test:amatelas

build:
	pnpm build

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

