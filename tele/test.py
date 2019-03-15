import unittest
import phone
class TestStringMethods(unittest.TestCase):

    def test_GetRate(self):
        test = phone.getCheapestRate("123364559")
        self.assertEqual(test, 0.9)
    def test_falseRate(self):
        test = phone.getCheapestRate("23364559")
        self.assertEqual(test, 'NONE')
    def test_checkPrefixA(self):
        test = phone.prefixcheckA("46")
        self.assertEqual(test, True)
    def test_falsecheckPrefixA(self):
        test = phone.prefixcheckA("44556")
        self.assertEqual(test, False)
    def test_checkPrefixB(self):
        test = phone.prefixcheckB("46")
        self.assertEqual(test, True)
    def test_falsecheckPrefixB(self):
        test = phone.prefixcheckB("44556")
        self.assertEqual(test, False)
    def test_getprefix1(self):
        test = phone.getPrefix("46556")
        self.assertEqual(test,"46" )
    def test_getprefix2(self):
        test = phone.getPrefix("146556")
        self.assertEqual(test,"1" )
    def test_getprefix3(self):
        test = phone.getPrefix("4146556")
        self.assertEqual(test,"NONE" )
    def test_getoperator1(self):
        test = phone.getCheapestOperator("146556")
        self.assertEqual(test,"A" )
    def test_getoperator2(self):
        test = phone.getCheapestOperator("2683246556")
        self.assertEqual(test,"B" )
    def test_getoperator3(self):
        test = phone.getCheapestOperator("56562683246556")
        self.assertEqual(test,"NONE" )
if __name__ == '__main__':
    unittest.main()