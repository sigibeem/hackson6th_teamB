from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import Kurabeteminaika


class KurabeteminaikaModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Kurabeteminaika.objects.create(title="first kurabeteminaika", body="a body here")

    def test_title_content(self):
        kurabeteminaika = Kurabeteminaika.objects.get(id=1)
        excepted_object_name = f'{kurabeteminaika.title}'
        self.assertEqual(excepted_object_name, 'first kurabeteminaika')

    def test_body_content(self):
        kurabeteminaika = Kurabeteminaika.objects.get(id=1)
        excepted_object_name = f'{kurabeteminaika.body}'
        self.assertEqual(excepted_object_name, 'a body here')
