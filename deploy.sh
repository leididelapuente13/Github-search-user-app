set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f github@github.com:leidi2004/Github-search-user-app.git main:gh-pages

cd -