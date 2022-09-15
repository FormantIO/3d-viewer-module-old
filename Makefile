build:
	yarn build
deploy: build
	cd dist &&  sed -i'' -e 's/"\/assets/"\.\/assets/g' index.html && rm index.html-e
	git add -f dist
	git commit -m 'publish demo'
	git push origin main
yarn:
	rm yarn.lock || true
	rm -rf node_modules || true
	yarn
