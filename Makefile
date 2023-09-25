pre-push: format lint build collect

lint:
	pnpm lint

format:
	pnpm format

build:
	pnpm build

collect:
	./collect.zsh

npm-publish:
	./collect.zsh
	npm version patch
	npm publish --access=public

auto-push-main:
	git add .
	git commit -m "auto-commit"
	git push origin main

auto-push:
	git add .
	git commit -m "auto-commit"
	git push origin HEAD

npm-version-patch:
	npm version patch
npm-version-minor:
	npm version minor
npm-version-major:
	npm version major
