build:
	yarn build
deploy: build
	git add -f dist
	git commit -m 'publish demo'
	git push origin main
yarn:
	rm yarn.lock || true
	rm -rf node_modules || true
	yarn
