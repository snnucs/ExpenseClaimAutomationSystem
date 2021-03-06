from django.test import TestCase
from account.models import User, Organization


class UserTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.create(username='test1', password='test1')
        User.objects.create(username='test2', first_name='三', last_name='张')

    def test_user_display(self):
        test_user = User.objects.get(username='test1')
        self.assertEqual(str(test_user), 'test1()')

        test_user = User.objects.get(username='test2')
        self.assertEqual(str(test_user), 'test2(张 三)')


class OrganizationTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        Organization.objects.create(org_name='org1')

    def test_organization_name(self):
        test_org = Organization.objects.get(org_name='org1')
        self.assertEqual(str(test_org), 'org1')
