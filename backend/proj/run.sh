#!/bin/bash
bash clean.sh
# remove database ""
python3 manage.py makemigrations
python3 manage.py makemigrations accounts
python3 manage.py makemigrations voter
python3 manage.py migrate
python3 manage.py createsuperuser
# python3 manage.py runserver
# repopulate DB with locations
# python3 manage.py addjsontodb
# git add accounts/
# git add proj/
# git add voter/
# git commit -m "message"
# git push
# gcloud app deploy
# gcloud app browse