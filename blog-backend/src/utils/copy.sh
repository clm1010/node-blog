#!/bin/sh
cd /e/my-project/node-blog/blog-backend/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log