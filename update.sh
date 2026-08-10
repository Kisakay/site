git pull
bun install
bun run generate
sudo rsync -a --delete .output/public/ /var/www/qxch.at/
