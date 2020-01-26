import os
from django.core.management.base import BaseCommand
from voter.serializers import LocationSerializer
from django.conf import settings
import json

class Command(BaseCommand):
    help = 'Print allll'

    def handle(self, *args, **options):
        precincts = json.load(open(os.path.join(settings.BASE_DIR, 'voter/management/commands/flat_precincts.json'), 'r'))

        for p in precincts:
            serializer = LocationSerializer(data=p)
            if serializer.is_valid():
                serializer.save()
            else:
                print(serializer.errors)
