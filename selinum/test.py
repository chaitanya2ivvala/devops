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
        #time.sleep(5)
        self.assertIn("Vultus", driver.title)
        driver.find_element_by_xpath("/html/body/root-body/account-root/div/div[2]/div[3]/div/account-status/div/form/div/div/div/div/button[2]").click()
        driver.find_element_by_xpath(".//*[@id='login_username']").send_keys("chaitu.dominator@gmail.com")
        driver.find_element_by_xpath(".//*[@id='login_password']").send_keys("123456")
        driver.find_element_by_xpath("html/body/root-body/account-root/div/div[2]/div[3]/div/account-authorization/div/form/div/button").click()
        driver.find_element_by_xpath("html/body/root-body/account-root/div/div[2]/div[3]/div/account-status/div/form/div/div/div/button[2]").click()
        time.sleep(5)


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()