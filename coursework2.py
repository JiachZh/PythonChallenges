# Exercise 1
def reduceFraction(num, den):
    # check additional input
    if den == 0:
        return '0 cannot be used as a divisor'
    else:
        num, den = abs(num), abs(den)

    # return highest common factor
    def hcf(x, y):
        if x > y:
            x, y = y, x  # make sure the bigger number is dividend
        if y % x == 0:
            return x
        else:
            return hcf(x, y % x)

    num_hcf = hcf(num, den)
    return (int(num / num_hcf), int(den / num_hcf))


# Exercise 2
def isMagicDate(day, month, year):

    # get last two digit of year
    lastTwoDigits = int(str(year)[-2:])

    return day * month == lastTwoDigits


# Exercise 3
def sublist(l):

    subList = []  # store sublists

    for i in range(len(l)):
        # second loop to get all the sublists from i to the end
        for j in range(len(l)):
            if l[j: len(l) - i] not in subList:
                subList.append(l[j: len(l) - i])
            else:
                pass
    return subList


# Exercisse 4
def pigLatin(word):
    vocalic = "aeiou"
    targetStr = ""
    subStr = ""

    # check if last character is letter
    else_str = ""
    if not word[-1].isalpha():
        else_str = word[-1]
        word = word[:-1]

    # check if the first letter is vowel
    if word[0].lower() in vocalic:
        targetStr = word + "way"
    else:
        # loop till find vowel
        num = 0
        for i in word:
            if i not in vocalic:
                subStr += i.lower()
                num += 1
            else:
                targetStr += word[num:]
                break
        targetStr += subStr + "ay"

    # check if the first letter is uppercase
    if word[0] == word[0].lower():
        return targetStr + else_str
    else:
        targetStr = targetStr[0].upper() + targetStr[1:]
        return targetStr + else_str


# Exercise 5
def morseCode(message):
    # Morse code dictionary
    morselist = {'A': '.-', 'B': '-...',
                 'C': '-.-.', 'D': '-..', 'E': '.',
                 'F': '..-.', 'G': '--.', 'H': '....',
                 'I': '..', 'J': '.---', 'K': '-.-',
                 'L': '.-..', 'M': '--', 'N': '-.',
                 'O': '---', 'P': '.--.', 'Q': '--.-',
                 'R': '.-.', 'S': '...', 'T': '-',
                 'U': '..-', 'V': '...-', 'W': '.--',
                 'X': '-..-', 'Y': '-.--', 'Z': '--..',
                 '1': '.----', '2': '..---', '3': '...--',
                 '4': '....-', '5': '.....', '6': '-....',
                 '7': '--...', '8': '---..', '9': '----.',
                 '0': '-----'}

    message = message.upper()  # to uppercase
    for letter in message:
        # remove all the characters that are not letters, numbers and spaces
        if (letter not in morselist) and (letter != ' '):
            message = message.replace(letter, '')

    morsecode = ''  # store encoded message

    for letter in message:
        if letter != ' ':
            # adding one space between letters
            morsecode += morselist[letter] + ' '

    # remove last space
    if morsecode[-1] == ' ':
        morsecode = morsecode[:-1]

    return morsecode


# Exercise 6
def int2Text(num):
    # check additional inputs
    if num < 0 or num > 999:
        return None

    numList = [int(num / 100), int(num / 10 % 10), num %
               10]  # three digits in num

    numberConstant = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven",
                      8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
                      14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"}

    numberConstant_below = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven",
                            8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
                            14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
                            19: "nineteen"}

    inHundredConstant = {1: "", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy",
                         8: "eighty",
                         9: "ninety", 0: ""}
    HundredConstant = {
        0: "", 1: "one hundred", 2: "two hundred", 3: "three hundred", 4: "fort hundred", 5: "five hundred",
        6: "six hundred", 7: "seven hundred",
        8: "eight hundred", 9: "nine hundred"
    }

    # 0 - 19
    if (numList[0] == 0 and numList[1] == 0) or (numList[1] * 10 + numList[0] < 20 and numList[0] == 0):
        return numberConstant[numList[1] * 10 + numList[2]]
    else:

        if numList[1] * 10 < 20 and numList[1] * 10 + numList[2] != 0:
            return HundredConstant[numList[0]] + " " + numberConstant_below[numList[1] * 10 + numList[2]]

        # 100, 200, 300 ...
        elif numList[1] * 10 + numList[2] == 0:
            return HundredConstant[numList[0]]

        else:
            return HundredConstant[numList[0]] + " " + inHundredConstant[numList[1]] + " " + numberConstant_below[
                numList[2]]


# Exercise 7
def missingComment(filename):
    # read file from path
    with open(filename, 'r') as f:
        lines = f.readlines()

    # lists with 'def'
    defList = []
    # lists with comment
    commentList = []

    missingCommentList = []  # store required lists

    for i in lines:
        if 'def' in i:
            defList.append(i)
    for j in range(len(lines)):
        if lines[j][0] != '#':
            if lines[j-1][0] == '#':
                commentList.append(lines[j])
    for k in defList:
        if k not in commentList:
            missingCommentList.append(k.split(' ')[1].split(
                '(')[0])

    return missingCommentList


# Exercise 8
def consistentLineLength(filename, length):
    seq = []  # a sequence of words
    limitStr = ""  # store maximum length of words
    targetList = []  # store result

    with open(filename, "r")as f:
        for i in f.readlines():
            for x in i.split(" "):
                seq.append(x.replace("\n", ""))

    for i in seq:
        if len(limitStr + i) > length:
            targetList.append(limitStr[:-1])
            limitStr = ""  # reset
        limitStr += i + " "
    targetList.append(limitStr[:-1])

    return targetList


# Exercise 9
def knight(start, end, moves):
    # get direction
    def get(distanceX, distanceY):
        if distanceX != 0 and distanceY != 0:
            return int(distanceX / (distanceX ** 2) ** 0.5), int(distanceY / (distanceY ** 2) ** 0.5)
        else:
            return 0, 0

    result = False

    # recursion till start == end: return true
    if start == end:
        return True
    if moves != 0:
        # get distance
        distanceX = (ord(end[0]) - ord("a")) - (ord(start[0]) - ord("a"))
        distanceY = int(end[1]) - int(start[1])
        # get direction
        test = get(distanceX, distanceY)
        if test[0] == 0 or test[1] == 0:
            return result
        newStar1 = chr(ord(start[0]) + 2 * test[0]) + \
            str(int(start[1]) + 1 * test[1])
        newStar2 = chr(ord(start[0]) + 1 * test[0]) + \
            str(int(start[1]) + 2 * test[1])
        result = knight(newStar1, end, moves - 1)
        if result:
            return result
        else:
            result = knight(newStar2, end, moves - 1)
    else:
        if start == end:
            return True
        else:
            return False
    return result


# Exercise 10
def warOfSpecies(environment):
    return None
