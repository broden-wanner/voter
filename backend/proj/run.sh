#!/bin/bash
bash clean.sh
python3 manage.py makemigrations
python3 manage.py makemigrations accounts
python3 manage.py makemigrations voter
python3 manage.py migrate
# python3 manage.py createsuperuser
python3 manage.py runserver