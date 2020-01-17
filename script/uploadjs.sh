#qshell fput gymgo pro/js/vendor.js public/js/vendor.js --mimetype application/javascript --overwrite
#qshell fput gymgo pro/js/app.js public/js/app.js --mimetype application/javascript --overwrite
#qshell fput gymgo pro/js/manifest.js public/js/manifest.js --mimetype application/javascript --overwrite
for i in {1..20}
do
  if [ -e ./public/$i.js ]
  then
    qshell fput gymgo $i.js public/$i.js --mimetype application/javascript --overwrite
  fi
done
