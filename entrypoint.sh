#!/usr/bin/env sh
bash
if [ ! -d "/home/node/code/" ]; then
	yarn global add create-react-app
	create-react-app code
fi
cd code
yarn install
yarn start
