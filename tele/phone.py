import sys
PriceLists_Operators = {
    'A': {
        '1': 0.9,
        '268': 5.2,
        '46': 0.18,
        '4620': 0.0,
        '468': 0.15,
        '4631': 0.15,
        '4673': 1.9,
        '46732': 1.1
    },
    'B': {
        '1': 1.9,
        '268': 5.1,
        '46': 0.17,
        '4620': 0.0,
        '4631': 0.15,
        '4673': 0.9,
        '46732': 1.1
    }
}
#This function will check the prefix is present with operator A
#input:46732545494641 output True
#input:2545494641 output False
def prefixcheckA(checkprefix):
    try:
     PriceLists_Operators['A'][checkprefix]
     return True
    except:
        return False
#This function will check the prefix is present with operator B
#input:46732545494641 output True
#input:2545494641 output False
def prefixcheckB(checkprefix):
    try:
     PriceLists_Operators['B'][checkprefix]
     return True
    except:
        return False
#This function will return country code and state code
#input:46732545494641 output 46732
def getPrefix(prefix):
    prefix1=prefix[:1]
    prefix2=prefix[:2]
    prefix3=prefix[:3]
    prefix4=prefix[:4]
    prefix5=prefix[:5]
    checkA1=prefixcheckA(prefix1)
    checkB1=prefixcheckB(prefix1)
    checkA2=prefixcheckA(prefix2)
    checkB2=prefixcheckB(prefix2)
    checkA3=prefixcheckA(prefix3)
    checkB3=prefixcheckB(prefix3)
    checkA4=prefixcheckA(prefix4)
    checkB4=prefixcheckB(prefix4)
    checkA5=prefixcheckA(prefix5)
    checkB5=prefixcheckB(prefix5)
    if (checkA5 == True) or (checkB5== True):
      return prefix5
    elif (checkA4 == True) or (checkB4== True):
        return prefix4
    elif (checkA3 == True) or (checkB3== True):
        return prefix3
    elif (checkA2 == True) or (checkB2== True):
        return prefix2
    elif (checkA1 == True) or (checkB1== True):
        return prefix1
    else:
        return 'NONE'
#This is will return the cheapest oprator
def getCheapestRate(telNo):
    test = getPrefix(telNo)
    checkA=prefixcheckA(test)
    checkB=prefixcheckB(test)
    if checkA != False and checkB != False:
        if PriceLists_Operators['A'][test]<PriceLists_Operators['B'][test]:
            price=PriceLists_Operators['A'][test]
        else:
            price=PriceLists_Operators['B'][test]
    elif checkA != False:
            price=PriceLists_Operators['A'][test]
    elif checkB != False:
            price=PriceLists_Operators['B'][test]
    else :
          price='NONE'       
    return price
def getCheapestOperator(telNo):
    test = getPrefix(telNo)
    checkA=prefixcheckA(test)
    checkB=prefixcheckB(test)
    if checkA != False and checkB != False:
        if PriceLists_Operators['A'][test]<=PriceLists_Operators['B'][test]:
            price='A'
        else:
            price='B'
    elif checkA != False:
            price='A'
    elif checkB != False:
            price='B'
    else :
          price='NONE'       
    return price

