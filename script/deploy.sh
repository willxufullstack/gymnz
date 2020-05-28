sh ./script/uploadjs.sh
ssh root@39.97.189.237 "cd gymnz;git pull;php artisan migrate --force"
