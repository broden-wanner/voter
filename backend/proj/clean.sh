#!/bin/bash

# remove the __pycache__ from accounts, proj, and voter
rm -rf accounts/__pycache__
rm -rf accounts/migrations

rm -rf proj/__pycache__

rm -rf voter/__pycache__
rm -rf voter/migrations
# remove the migrates from accounts and voter
rm db.sqlite3