import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("https://vultus.io")
        self.assertIn("Vultus", driver.title)
       


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()