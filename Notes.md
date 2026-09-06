
 # Complete Python Course

 > **Python from Beginner to Advanced — Simple Notes + Code**

---

 # 1\. What is Python?

 Python is a high-level, interpreted programming language.

 It is commonly used for:

 - Web development
- Data science
- AI/ML
- Automation
- Scripting
- APIs
- Desktop applications
- Cybersecurity
- Testing

 Example:

```
print("Hello, World!")
```

---

 # 2\. Installing Python

 Check whether Python is installed:

```
python --version
```

 or:

```
python3 --version
```

 Run a Python file:

```
python app.py
```

---

 # 3\. Python Comments

 Single-line comment:

```
# This is a comment
print("Hello")
```

 Multi-line documentation/comment style:

```
"""
This is a
multi-line string.
"""
```

---

 # 4\. Variables

 A variable stores a value.

```
name = "Aryan"
age = 20
price = 99.5
```

 Python automatically detects the type.

```
x = 10
print(x)
```

 Change value:

```
x = 10
x = 20
```

 Multiple assignment:

```
a, b, c = 1, 2, 3
```

 Same value:

```
x = y = z = 0
```

---

 # 5\. Naming Variables

 Good:

```
first_name = "Aryan"
student_age = 20
```

 Bad:

```
student-age = 20
```

 Rules:

 - Cannot start with a number
- Can contain letters, numbers and `_`
- Case-sensitive
- Cannot use Python keywords

 Example:

```
name = "A"
Name = "B"

print(name)
print(Name)
```

 These are different variables.

---

 # 6\. Data Types

 Main Python data types:

```
str       String
int       Integer
float     Decimal number
bool      True/False
list      Collection
tuple     Immutable collection
set       Unique collection
dict      Key-value collection
NoneType  No value
```

 Example:

```
name = "Aryan"       # str
age = 20            # int
height = 5.8        # float
is_student = True   # bool
```

 Check type:

```
print(type(name))
print(type(age))
```

---

 # 7\. Strings

 A string contains text.

```
name = "Python"
```

 Single quotes:

```
name = 'Python'
```

 Double quotes:

```
name = "Python"
```

 Multi-line:

```
text = """
Hello
Python
"""
```

---

 # 8\. String Indexing

```
word = "Python"

print(word[0])
print(word[1])
print(word[-1])
```

 Output:

```
P
y
n
```

 Index starts from `0`.

---

 # 9\. String Slicing

```
word = "Python"

print(word[0:3])
```

 Output:

```
Pyt
```

 More:

```
print(word[:3])
print(word[2:])
print(word[:])
print(word[::-1])
```

 Reverse:

```
word = "Python"
print(word[::-1])
```

---

 # 10\. String Methods

```
text = "hello python"
```

 Uppercase:

```
print(text.upper())
```

 Lowercase:

```
print(text.lower())
```

 Capitalize:

```
print(text.capitalize())
```

 Replace:

```
print(text.replace("python", "world"))
```

 Split:

```
print(text.split())
```

 Strip spaces:

```
text = "  hello  "
print(text.strip())
```

 Check:

```
print("hello" in text)
```

---

 # 11\. f-Strings

 f-strings are an easy way to insert variables into strings.

```
name = "Aryan"
age = 20

print(f"My name is {name} and I am {age} years old.")
```

 Expressions:

```
a = 10
b = 20

print(f"Sum = {a + b}")
```

---

 # 12\. Numbers

 Integer:

```
x = 10
```

 Float:

```
x = 10.5
```

 Complex:

```
x = 2 + 3j
```

---

 # 13\. Arithmetic Operators

```
a = 10
b = 3

print(a + b)   # Addition
print(a - b)   # Subtraction
print(a * b)   # Multiplication
print(a / b)   # Division
print(a // b)  # Floor division
print(a % b)   # Remainder
print(a ** b)  # Power
```

---

 # 14\. Comparison Operators

```
a = 10
b = 20

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)
```

 Result is `True` or `False`.

---

 # 15\. Logical Operators

 ## and

 Both conditions must be true.

```
age = 20

print(age > 18 and age < 30)
```

 ## or

 At least one condition must be true.

```
print(age < 18 or age > 18)
```

 ## not

 Reverses the result.

```
print(not True)
```

---

 # 16\. Assignment Operators

```
x = 10

x += 5
x -= 2
x *= 2
x /= 2
x //= 2
x %= 2
x **= 2
```

---

 # 17\. Membership Operators

```
name = "Python"

print("P" in name)
print("z" not in name)
```

---

 # 18\. Identity Operators

```
a = [1, 2]
b = a

print(a is b)
print(a is not b)
```

 `is` checks whether two references point to the same object.

---

 # 19\. Type Conversion

 Convert string to integer:

```
x = "10"
x = int(x)
```

 Integer to float:

```
x = float(10)
```

 Number to string:

```
x = str(10)
```

 Convert to boolean:

```
print(bool(1))
print(bool(0))
```

---

 # 20\. Input

 Get input from the user:

```
name = input("Enter your name: ")

print("Hello", name)
```

 Input is normally a string.

 Convert it:

```
age = int(input("Enter age: "))

print(age + 1)
```

---

 # 21\. if Statement

```
age = 20

if age >= 18:
    print("Adult")
```

---

 # 22\. if-else

```
age = 16

if age >= 18:
    print("Adult")
else:
    print("Minor")
```

---

 # 23\. if-elif-else

```
marks = 75

if marks >= 90:
    print("A")
elif marks >= 70:
    print("B")
elif marks >= 50:
    print("C")
else:
    print("Fail")
```

---

 # 24\. Nested if

```
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Allowed")
```

---

 # 25\. Ternary Operator

 Short if-else:

```
age = 20

result = "Adult" if age >= 18 else "Minor"

print(result)
```

---

 # 26\. while Loop

```
i = 1

while i <= 5:
    print(i)
    i += 1
```

---

 # 27\. for Loop

```
for i in range(5):
    print(i)
```

 Output:

```
0
1
2
3
4
```

---

 # 28\. range()

```
range(5)
range(1, 5)
range(1, 10, 2)
```

 Example:

```
for i in range(1, 10, 2):
    print(i)
```

---

 # 29\. break

 Stops the loop.

```
for i in range(10):
    if i == 5:
        break

    print(i)
```

---

 # 30\. continue

 Skips the current iteration.

```
for i in range(5):
    if i == 2:
        continue

    print(i)
```

---

 # 31\. pass

 Does nothing.

```
if True:
    pass
```

 Useful when code will be added later.

---

 # 32\. Lists

 A list stores multiple values.

```
numbers = [10, 20, 30, 40]
```

 Access:

```
print(numbers[0])
```

 Change:

```
numbers[0] = 100
```

---

 # 33\. List Methods

 Add:

```
numbers.append(50)
```

 Insert:

```
numbers.insert(1, 15)
```

 Remove value:

```
numbers.remove(20)
```

 Remove last:

```
numbers.pop()
```

 Sort:

```
numbers.sort()
```

 Reverse:

```
numbers.reverse()
```

 Copy:

```
new_list = numbers.copy()
```

 Length:

```
print(len(numbers))
```

---

 # 34\. List Slicing

```
numbers = [1, 2, 3, 4, 5]

print(numbers[1:4])
print(numbers[:3])
print(numbers[2:])
print(numbers[::-1])
```

---

 # 35\. List Loop

```
fruits = ["apple", "banana", "mango"]

for fruit in fruits:
    print(fruit)
```

 With index:

```
for index, fruit in enumerate(fruits):
    print(index, fruit)
```

---

 # 36\. List Comprehension

 Normal:

```
squares = []

for i in range(5):
    squares.append(i * i)
```

 List comprehension:

```
squares = [i * i for i in range(5)]
```

 With condition:

```
even = [i for i in range(10) if i % 2 == 0]
```

---

 # 37\. Tuples

 Tuple is similar to a list but immutable.

```
numbers = (1, 2, 3)
```

 Access:

```
print(numbers[0])
```

 Tuple unpacking:

```
a, b, c = (10, 20, 30)

print(a)
print(b)
print(c)
```

---

 # 38\. Sets

 A set stores unique values.

```
numbers = {1, 2, 3, 3}

print(numbers)
```

 Output:

```
{1, 2, 3}
```

 Add:

```
numbers.add(4)
```

 Remove:

```
numbers.remove(2)
```

---

 # 39\. Set Operations

```
a = {1, 2, 3}
b = {3, 4, 5}
```

 Union:

```
print(a | b)
```

 Intersection:

```
print(a & b)
```

 Difference:

```
print(a - b)
```

 Symmetric difference:

```
print(a ^ b)
```

---

 # 40\. Dictionaries

 Dictionary stores key-value pairs.

```
student = {
    "name": "Aryan",
    "age": 20,
    "marks": 85
}
```

 Access:

```
print(student["name"])
```

 Safer access:

```
print(student.get("name"))
```

 Change:

```
student["age"] = 21
```

 Add:

```
student["city"] = "Delhi"
```

 Delete:

```
del student["city"]
```

---

 # 41\. Dictionary Methods

```
student.keys()
student.values()
student.items()
student.get("name")
```

 Loop:

```
for key, value in student.items():
    print(key, value)
```

---

 # 42\. Nested Dictionaries

```
students = {
    "student1": {
        "name": "Aryan",
        "age": 20
    },
    "student2": {
        "name": "Amit",
        "age": 21
    }
}

print(students["student1"]["name"])
```

---

 # 43\. Functions

 A function is reusable code.

```
def greet():
    print("Hello")

greet()
```

---

 # 44\. Function Parameters

```
def greet(name):
    print(f"Hello {name}")

greet("Aryan")
```

 Multiple parameters:

```
def add(a, b):
    print(a + b)

add(10, 20)
```

---

 # 45\. return

```
def add(a, b):
    return a + b

result = add(10, 20)

print(result)
```

 `return` sends a value back.

---

 # 46\. Default Arguments

```
def greet(name="Guest"):
    print(f"Hello {name}")

greet()
greet("Aryan")
```

---

 # 47\. Keyword Arguments

```
def student(name, age):
    print(name, age)

student(age=20, name="Aryan")
```

---

 # 48\. \*args

 Used for multiple positional arguments.

```
def add(*numbers):
    return sum(numbers)

print(add(1, 2, 3, 4))
```

---

 # 49\. \*\*kwargs

 Used for multiple keyword arguments.

```
def show(**data):
    print(data)

show(name="Aryan", age=20)
```

---

 # 50\. Scope

 Local variable:

```
def test():
    x = 10
    print(x)

test()
```

 Global variable:

```
x = 10

def test():
    print(x)

test()
```

 Using `global`:

```
x = 10

def change():
    global x
    x = 20

change()

print(x)
```

---

 # 51\. Lambda Functions

 Small anonymous function.

```
square = lambda x: x * x

print(square(5))
```

 Multiple arguments:

```
add = lambda a, b: a + b

print(add(2, 3))
```

---

 # 52\. map()

 Apply a function to every item.

```
numbers = [1, 2, 3, 4]

result = map(lambda x: x * 2, numbers)

print(list(result))
```

---

 # 53\. filter()

 Filter values.

```
numbers = [1, 2, 3, 4, 5]

result = filter(lambda x: x % 2 == 0, numbers)

print(list(result))
```

---

 # 54\. reduce()

 Reduce multiple values to one.

```
from functools import reduce

numbers = [1, 2, 3, 4]

result = reduce(lambda a, b: a + b, numbers)

print(result)
```

---

 # 55\. Recursion

 A function calling itself.

```
def countdown(n):
    if n == 0:
        return

    print(n)
    countdown(n - 1)

countdown(5)
```

 Always have a base condition.

---

 # 56\. Modules

 A module is a Python file containing reusable code.

 Example `math_tools.py`:

```
def add(a, b):
    return a + b
```

 Another file:

```
import math_tools

print(math_tools.add(2, 3))
```

---

 # 57\. import

```
import math

print(math.sqrt(25))
```

 Import specific function:

```
from math import sqrt

print(sqrt(25))
```

 Alias:

```
import math as m

print(m.sqrt(25))
```

---

 # 58\. Useful Built-in Modules

```
import math
import random
import datetime
import os
import sys
import json
import re
import statistics
```

---

 # 59\. math Module

```
import math

print(math.sqrt(16))
print(math.ceil(4.2))
print(math.floor(4.9))
print(math.pi)
print(math.pow(2, 3))
```

---

 # 60\. random Module

```
import random

print(random.randint(1, 10))
```

 Random choice:

```
items = ["A", "B", "C"]

print(random.choice(items))
```

 Shuffle:

```
random.shuffle(items)

print(items)
```

---

 # 61\. Date and Time

```
from datetime import datetime

now = datetime.now()

print(now)
```

 Date:

```
from datetime import date

today = date.today()

print(today)
```

 Formatting:

```
print(now.strftime("%Y-%m-%d"))
```

---

 # 62\. File Handling

 Open file:

```
file = open("data.txt", "r")

content = file.read()

print(content)

file.close()
```

 Better:

```
with open("data.txt", "r") as file:
    content = file.read()

print(content)
```

---

 # 63\. File Modes

```
r   Read
w   Write
a   Append
x   Create
b   Binary
```

 Write:

```
with open("data.txt", "w") as file:
    file.write("Hello Python")
```

 Append:

```
with open("data.txt", "a") as file:
    file.write("\nNew line")
```

---

 # 64\. Reading Files

 Read entire file:

```
with open("data.txt") as file:
    print(file.read())
```

 Read lines:

```
with open("data.txt") as file:
    for line in file:
        print(line.strip())
```

---

 # 65\. Exception Handling

 Errors can be handled using `try`.

```
try:
    x = 10 / 0
except:
    print("Something went wrong")
```

 Better:

```
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

---

 # 66\. try-except-else-finally

```
try:
    x = int(input("Enter number: "))

except ValueError:
    print("Invalid number")

else:
    print("Number is", x)

finally:
    print("Done")
```

---

 # 67\. Raising Exceptions

```
age = -1

if age < 0:
    raise ValueError("Age cannot be negative")
```

---

 # 68\. Object-Oriented Programming

 OOP organizes programs around objects.

 Main concepts:

 - Class
- Object
- Constructor
- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

---

 # 69\. Class and Object

```
class Student:
    pass

student1 = Student()

print(student1)
```

---

 # 70\. Constructor

 `__init__()` runs when an object is created.

```
class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Aryan", 20)

print(student.name)
print(student.age)
```

---

 # 71\. Methods

```
class Student:

    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello {self.name}")

student = Student("Aryan")

student.greet()
```

---

 # 72\. Class Variables

```
class Student:

    school = "ABC School"

    def __init__(self, name):
        self.name = name

student = Student("Aryan")

print(student.school)
```

---

 # 73\. Inheritance

 A child class can inherit from a parent class.

```
class Animal:

    def speak(self):
        print("Animal sound")

class Dog(Animal):

    def bark(self):
        print("Woof")

dog = Dog()

dog.speak()
dog.bark()
```

---

 # 74\. Method Overriding

```
class Animal:

    def speak(self):
        print("Animal sound")

class Dog(Animal):

    def speak(self):
        print("Woof")

dog = Dog()

dog.speak()
```

---

 # 75\. super()

 Call parent functionality.

```
class Animal:

    def __init__(self):
        print("Animal")

class Dog(Animal):

    def __init__(self):
        super().__init__()
        print("Dog")

dog = Dog()
```

---

 # 76\. Multiple Inheritance

```
class A:
    def method_a(self):
        print("A")

class B:
    def method_b(self):
        print("B")

class C(A, B):
    pass

obj = C()

obj.method_a()
obj.method_b()
```

---

 # 77\. Encapsulation

 Python uses naming conventions for protected/private-like attributes.

 Protected:

```
class Student:

    def __init__(self):
        self._name = "Aryan"
```

 Name-mangled private:

```
class Student:

    def __init__(self):
        self.__password = "1234"
```

---

 # 78\. Property

 Properties allow controlled access to attributes.

```
class Person:

    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Invalid age")

        self._age = value

person = Person(20)

print(person.age)

person.age = 25
```

---

 # 79\. Polymorphism

 Different objects can use the same method name.

```
class Dog:

    def speak(self):
        print("Woof")

class Cat:

    def speak(self):
        print("Meow")

for animal in [Dog(), Cat()]:
    animal.speak()
```

---

 # 80\. Abstract Classes

 Use `abc`.

```
from abc import ABC, abstractmethod

class Animal(ABC):

    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):

    def speak(self):
        print("Woof")

dog = Dog()

dog.speak()
```

---

 # 81\. Dataclasses

 Useful for classes mainly storing data.

```
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    age: int

student = Student("Aryan", 20)

print(student)
```

---

 # 82\. Iterators

 An iterator produces values one at a time.

```
numbers = iter([1, 2, 3])

print(next(numbers))
print(next(numbers))
print(next(numbers))
```

---

 # 83\. Generators

 Generators produce values lazily.

```
def numbers():
    yield 1
    yield 2
    yield 3

for number in numbers():
    print(number)
```

 Generator expression:

```
squares = (x * x for x in range(5))

for x in squares:
    print(x)
```

---

 # 84\. Decorators

 A decorator modifies another function.

```
def decorator(func):

    def wrapper():
        print("Before")
        func()
        print("After")

    return wrapper

@decorator
def hello():
    print("Hello")

hello()
```

---

 # 85\. Closures

 A function can remember values from its outer function.

```
def outer(x):

    def inner(y):
        return x + y

    return inner

add_five = outer(5)

print(add_five(10))
```

---

 # 86\. Context Managers

 The `with` statement is commonly used for resources.

```
with open("data.txt") as file:
    data = file.read()
```

 You can create your own context manager:

```
from contextlib import contextmanager

@contextmanager
def manager():
    print("Start")

    yield

    print("End")

with manager():
    print("Inside")
```

---

 # 87\. Type Hints

 Type hints make expected types clearer.

```
def add(a: int, b: int) -> int:
    return a + b
```

 Variables:

```
name: str = "Aryan"
age: int = 20
```

---

 # 88\. Optional Types

```
def greet(name: str | None):
    if name:
        print(name)
```

---

 # 89\. Collections Type Hints

```
from typing import list

numbers: list[int] = [1, 2, 3]
```

 Dictionary:

```
students: dict[str, int] = {
    "Aryan": 20,
    "Amit": 21
}
```

---

 # 90\. JSON

 JSON is commonly used for APIs and data exchange.

 Convert dictionary to JSON:

```
import json

data = {
    "name": "Aryan",
    "age": 20
}

text = json.dumps(data)

print(text)
```

 JSON to dictionary:

```
data = json.loads(text)

print(data["name"])
```

---

 # 91\. JSON File

 Write:

```
import json

data = {
    "name": "Aryan",
    "age": 20
}

with open("data.json", "w") as file:
    json.dump(data, file)
```

 Read:

```
with open("data.json") as file:
    data = json.load(file)

print(data)
```

---

 # 92\. Regular Expressions

 Use `re`.

```
import re

text = "My phone is 9876543210"

result = re.search(r"\d+", text)

print(result.group())
```

 Common patterns:

```
\d    Digit
\w    Word character
\s    Whitespace
.     Any character
+     One or more
*     Zero or more
?     Optional
^     Start
$     End
```

---

 # 93\. Environment Variables

 Useful for configuration and secrets.

```
import os

username = os.getenv("USERNAME")

print(username)
```

 Avoid putting passwords directly into source code.

---

 # 94\. os Module

```
import os

print(os.getcwd())
```

 List files:

```
print(os.listdir())
```

 Create directory:

```
os.mkdir("test")
```

---

 # 95\. pathlib

 Modern path handling:

```
from pathlib import Path

path = Path("data.txt")

print(path.exists())
```

 Read:

```
text = path.read_text()
```

 Write:

```
path.write_text("Hello Python")
```

---

 # 96\. Command-Line Arguments

 Using `sys`:

```
import sys

print(sys.argv)
```

 Run:

```
python app.py hello
```

---

 # 97\. argparse

 Better command-line interfaces:

```
import argparse

parser = argparse.ArgumentParser()

parser.add_argument("--name")

args = parser.parse_args()

print(args.name)
```

 Run:

```
python app.py --name Aryan
```

---

 # 98\. Virtual Environment

 Create:

```
python -m venv .venv
```

 Activate on Windows:

```
.venv\Scripts\activate
```

 Activate on Linux/macOS:

```
source .venv/bin/activate
```

 Deactivate:

```
deactivate
```

---

 # 99\. pip

 Install package:

```
pip install requests
```

 Uninstall:

```
pip uninstall requests
```

 Show installed packages:

```
pip list
```

 Save dependencies:

```
pip freeze > requirements.txt
```

 Install dependencies:

```
pip install -r requirements.txt
```

---

 # 100\. Package

 A package is a collection of Python modules.

 Example:

```
myproject/
│
├── app.py
└── utils/
    ├── __init__.py
    └── math_tools.py
```

 Import:

```
from utils.math_tools import add
```

---

 # 101\. `__name__`

 Python files can be run directly or imported.

```
def main():
    print("Program started")

if __name__ == "__main__":
    main()
```

 This is a common Python pattern.

---

 # 102\. Testing

 Python includes `unittest`.

```
import unittest

def add(a, b):
    return a + b

class TestAdd(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(2, 3), 5)

if __name__ == "__main__":
    unittest.main()
```

---

 # 103\. Assertions

```
x = 10

assert x > 0
```

 With message:

```
assert x > 0, "x must be positive"
```

---

 # 104\. Debugging

 Use `breakpoint()`:

```
x = 10

breakpoint()

print(x)
```

 You can inspect variables while debugging.

---

 # 105\. Logging

 Use logging instead of many `print()` statements in larger applications.

```
import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application started")
logging.warning("Something may be wrong")
logging.error("Something went wrong")
```

---

 # 106\. SQLite Database

 Python includes SQLite support.

```
import sqlite3

connection = sqlite3.connect("database.db")

cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT
)
""")

connection.commit()

connection.close()
```

 Insert:

```
cursor.execute(
    "INSERT INTO users (name) VALUES (?)",
    ("Aryan",)
)
```

 Select:

```
cursor.execute("SELECT * FROM users")

rows = cursor.fetchall()

print(rows)
```

 Always use parameterized queries rather than constructing SQL with user input.

---

 # 107\. HTTP Requests

 The `requests` package is commonly used for HTTP.

 Install:

```
pip install requests
```

 GET request:

```
import requests

response = requests.get("https://example.com")

print(response.status_code)
print(response.text)
```

 JSON API:

```
response = requests.get("https://api.example.com/data")

data = response.json()

print(data)
```

---

 # 108\. API Concepts

 Common HTTP methods:

```
GET      Read data
POST     Create data
PUT      Replace data
PATCH    Update data
DELETE   Delete data
```

 Common status codes:

```
200  OK
201  Created
400  Bad Request
401  Unauthorized
403  Forbidden
404  Not Found
500  Server Error
```

---

 # 109\. Sending POST Request

```
import requests

data = {
    "name": "Aryan"
}

response = requests.post(
    "https://example.com/api/users",
    json=data
)

print(response.status_code)
```

---

 # 110\. Web Development with Flask

 Install:

```
pip install flask
```

 Basic app:

```
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello Python"

if __name__ == "__main__":
    app.run(debug=True)
```

---

 # 111\. FastAPI

 FastAPI is commonly used to build APIs.

 Install:

```
pip install fastapi uvicorn
```

 Example:

```
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Hello Python"}
```

 Run:

```
uvicorn main:app --reload
```

---

 # 112\. HTML Templates in Flask

```
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
```

 Folder:

```
project/
│
├── app.py
└── templates/
    └── index.html
```

---

 # 113\. Web Scraping

 A common combination is `requests` \+ Beautiful Soup.

 Install:

```
pip install requests beautifulsoup4
```

 Example:

```
import requests
from bs4 import BeautifulSoup

url = "https://example.com"

response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")

print(soup.title.text)
```

 Always respect a website's terms, robots rules, and applicable laws.

---

 # 114\. NumPy

 NumPy is widely used for numerical computing.

 Install:

```
pip install numpy
```

 Example:

```
import numpy as np

numbers = np.array([1, 2, 3, 4])

print(numbers * 2)
```

---

 # 115\. Pandas

 Pandas is used for data analysis.

 Install:

```
pip install pandas
```

 Example:

```
import pandas as pd

data = {
    "name": ["Aryan", "Amit"],
    "age": [20, 21]
}

df = pd.DataFrame(data)

print(df)
```

---

 # 116\. Reading CSV with Pandas

```
import pandas as pd

df = pd.read_csv("data.csv")

print(df.head())
```

 Useful:

```
df.head()
df.tail()
df.info()
df.describe()
df.columns
```

---

 # 117\. Filtering Pandas Data

```
filtered = df[df["age"] > 20]

print(filtered)
```

---

 # 118\. Matplotlib

 Used for charts.

 Install:

```
pip install matplotlib
```

 Example:

```
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 15, 30]

plt.plot(x, y)

plt.show()
```

---

 # 119\. Async Programming

 Python supports asynchronous programming with `asyncio`.

```
import asyncio

async def hello():
    print("Hello")
    await asyncio.sleep(1)
    print("Done")

asyncio.run(hello())
```

 `async` defines an asynchronous function.

 `await` waits for an asynchronous operation.

---

 # 120\. Async Tasks

```
import asyncio

async def task(name):
    print(name)
    await asyncio.sleep(1)

async def main():
    await asyncio.gather(
        task("Task 1"),
        task("Task 2")
    )

asyncio.run(main())
```

---

 # 121\. Threading

 Threads can be useful for I/O-bound work.

```
import threading

def hello():
    print("Hello")

thread = threading.Thread(target=hello)

thread.start()
thread.join()
```

---

 # 122\. Multiprocessing

 Useful for CPU-heavy tasks.

```
from multiprocessing import Process

def work():
    print("Working")

process = Process(target=work)

process.start()
process.join()
```

---

 # 123\. GIL

 CPython has a Global Interpreter Lock (GIL).

 In simple terms, it limits simultaneous execution of Python bytecode by multiple threads in a single CPython process.

 For CPU-heavy work, multiprocessing or other approaches can be useful.

 For I/O-heavy work, threads or async programming can often work well.

---

 # 124\. Shallow Copy vs Deep Copy

 Shallow copy:

```
import copy

a = [[1, 2], [3, 4]]

b = copy.copy(a)
```

 Deep copy:

```
c = copy.deepcopy(a)
```

 Deep copy recursively copies nested objects.

---

 # 125\. Mutable vs Immutable

 Mutable:

```
list
dict
set
```

 Immutable:

```
int
float
str
tuple
bool
```

 Example:

```
x = "hello"

# Strings cannot be changed in place.
# A new string is created instead.
```

---

 # 126\. Walrus Operator

 The `:=` operator assigns and evaluates a value.

```
if (n := len("Python")) > 5:
    print(n)
```

 Use it only when it makes the code clearer.

---

 # 127\. Match Statement

 Python supports pattern matching.

```
command = "start"

match command:
    case "start":
        print("Starting")

    case "stop":
        print("Stopping")

    case _:
        print("Unknown command")
```

---

 # 128\. Structural Pattern Matching

 You can match more complex data.

```
point = (0, 5)

match point:
    case (0, y):
        print("On Y axis:", y)

    case (x, 0):
        print("On X axis:", x)

    case (x, y):
        print(x, y)
```

---

 # 129\. Enumerate

 Instead of manually tracking indexes:

```
names = ["A", "B", "C"]

for index, name in enumerate(names):
    print(index, name)
```

---

 # 130\. zip()

 Combine iterables.

```
names = ["Aryan", "Amit"]
ages = [20, 21]

for name, age in zip(names, ages):
    print(name, age)
```

---

 # 131\. any() and all()

 `any()`:

```
numbers = [1, 3, 4]

print(any(x % 2 == 0 for x in numbers))
```

 `all()`:

```
numbers = [2, 4, 6]

print(all(x % 2 == 0 for x in numbers))
```

---

 # 132\. Sorting

```
numbers = [4, 1, 3, 2]

print(sorted(numbers))
```

 Descending:

```
print(sorted(numbers, reverse=True))
```

 Sort by key:

```
students = [
    ("Aryan", 80),
    ("Amit", 90)
]

students.sort(key=lambda x: x[1])

print(students)
```

---

 # 133\. Counter

 Count values:

```
from collections import Counter

letters = "hello"

count = Counter(letters)

print(count)
```

---

 # 134\. defaultdict

```
from collections import defaultdict

data = defaultdict(list)

data["fruits"].append("apple")

print(data)
```

---

 # 135\. deque

 Efficient queue operations:

```
from collections import deque

queue = deque()

queue.append("A")
queue.append("B")

print(queue.popleft())
```

---

 # 136\. Datetime Arithmetic

```
from datetime import datetime, timedelta

now = datetime.now()

tomorrow = now + timedelta(days=1)

print(tomorrow)
```

---

 # 137\. UUID

 Generate unique IDs:

```
import uuid

id = uuid.uuid4()

print(id)
```

---

 # 138\. Hashing

 Python has a built-in hashing function:

```
print(hash("Python"))
```

 Do not treat ordinary `hash()` as a secure password hashing method.

---

 # 139\. Secure Password Hashing

 For password storage, use a dedicated password-hashing algorithm/library rather than plain text.

 Example with Werkzeug:

```
pip install werkzeug
```

```
from werkzeug.security import generate_password_hash, check_password_hash

password = "my_password"

hashed = generate_password_hash(password)

print(check_password_hash(hashed, password))
```

---

 # 140\. Cryptographic Randomness

 For security-sensitive random values, use `secrets` rather than `random`.

```
import secrets

token = secrets.token_hex(16)

print(token)
```

---

 # 141\. Python Memory Concepts

 Python variables reference objects.

 Example:

```
a = [1, 2, 3]
b = a

b.append(4)

print(a)
```

 Both variables refer to the same list.

 To create a separate list:

```
b = a.copy()
```

---

 # 142\. `is` vs `==`

 `==` checks value equality:

```
a = [1, 2]
```

Bilkul 👍 We’ll continue **exactly from #142** and keep the same notes style: short explanation + practical code. I’ll continue into advanced Python topics without repeating the earlier sections.

# 143. `is` vs `==`

`==` checks whether two objects have equal values.

```python
a = [1, 2]
b = [1, 2]

print(a == b)
```

Output:

```text
True
```

`is` checks whether both variables refer to the **same object**.

```python
print(a is b)
```

Output:

```text
False
```

Because `a` and `b` are separate list objects.

Example:

```python
a = [1, 2]
b = a

print(a == b)
print(a is b)
```

Output:

```text
True
True
```

Use `is` commonly with `None`:

```python
value = None

if value is None:
    print("No value")
```

---

# 144. Object Identity

Every Python object has an identity.

You can inspect it using `id()`.

```python
x = 10

print(id(x))
```

Example:

```python
a = [1, 2]
b = a

print(id(a))
print(id(b))
```

Both IDs are the same because both variables reference the same object.

---

# 145. `None`

`None` represents the absence of a value.

```python
result = None

print(result)
```

Check for `None`:

```python
if result is None:
    print("No result")
```

A function that does not explicitly return a value returns `None`.

```python
def greet():
    print("Hello")

result = greet()

print(result)
```

Output:

```text
Hello
None
```

---

# 146. Truthy and Falsy Values

Python treats some values as `False` in conditions.

Common falsy values:

```python
False
None
0
0.0
""
[]
()
{}
set()
```

Example:

```python
items = []

if items:
    print("Items exist")
else:
    print("No items")
```

Output:

```text
No items
```

Non-empty values are generally truthy:

```python
if [1, 2, 3]:
    print("List is not empty")
```

---

# 147. `bool()` Conversion

You can explicitly convert a value to Boolean.

```python
print(bool(0))
print(bool(1))

print(bool(""))
print(bool("Python"))

print(bool([]))
print(bool([1, 2]))
```

Output:

```text
False
True
False
True
False
True
```

---

# 148. Operator Precedence

Python follows a specific order when evaluating expressions.

Example:

```python
result = 2 + 3 * 4

print(result)
```

Output:

```text
14
```

Multiplication happens before addition.

Use parentheses when you want to make the order clear:

```python
result = (2 + 3) * 4

print(result)
```

Output:

```text
20
```

Common order:

```text
()
**
+x, -x
*, /, //, %
+, -
==, !=, <, >, <=, >=
not
and
or
```

---

# 149. Chained Comparisons

Python allows multiple comparisons in one expression.

```python
age = 20

if 18 <= age <= 60:
    print("Valid age")
```

This is equivalent to:

```python
if age >= 18 and age <= 60:
    print("Valid age")
```

Another example:

```python
x = 10

print(1 < x < 20)
```

Output:

```text
True
```

---

# 150. Short-Circuit Evaluation

Python may stop evaluating a logical expression early.

With `and`:

```python
x = 0

if x != 0 and 10 / x > 2:
    print("Yes")
```

The second condition is not evaluated because the first condition is already `False`.

With `or`:

```python
name = ""

result = name or "Guest"

print(result)
```

Output:

```text
Guest
```

This is commonly used for fallback values.

---

# 151. `*` Unpacking

The `*` operator can unpack an iterable.

```python
numbers = [1, 2, 3]

print(*numbers)
```

Output:

```text
1 2 3
```

Function example:

```python
def add(a, b, c):
    return a + b + c

numbers = [10, 20, 30]

print(add(*numbers))
```

---

# 152. `**` Dictionary Unpacking

Dictionaries can be unpacked using `**`.

```python
data = {
    "name": "Aryan",
    "age": 20
}

def show(name, age):
    print(name, age)

show(**data)
```

You can also combine dictionaries:

```python
a = {"name": "Aryan"}
b = {"age": 20}

student = {**a, **b}

print(student)
```

---

# 153. Extended Iterable Unpacking

Python can collect remaining values using `*`.

```python
numbers = [1, 2, 3, 4, 5]

first, *middle, last = numbers

print(first)
print(middle)
print(last)
```

Output:

```text
1
[2, 3, 4]
5
```

---

# 154. Nested List Comprehension

List comprehensions can contain nested loops.

```python
matrix = [
    [1, 2],
    [3, 4]
]

numbers = [x for row in matrix for x in row]

print(numbers)
```

Output:

```text
[1, 2, 3, 4]
```

Another example:

```python
pairs = [(x, y) for x in range(3) for y in range(3)]

print(pairs)
```

---

# 155. Dictionary Comprehension

You can create dictionaries using comprehension.

```python
numbers = [1, 2, 3, 4]

squares = {
    x: x * x
    for x in numbers
}

print(squares)
```

Output:

```text
{1: 1, 2: 4, 3: 9, 4: 16}
```

With condition:

```python
even = {
    x: x * x
    for x in range(10)
    if x % 2 == 0
}

print(even)
```

---

# 156. Set Comprehension

Set comprehensions create sets.

```python
numbers = [1, 2, 2, 3, 3, 4]

squares = {x * x for x in numbers}

print(squares)
```

Duplicate values are automatically removed.

---

# 157. Generator Expressions

A generator expression creates values lazily.

```python
numbers = (x * x for x in range(5))

for number in numbers:
    print(number)
```

Unlike a list comprehension:

```python
numbers = [x * x for x in range(5)]
```

the generator does not create the entire result list immediately.

Generators can be useful for large data.

---

# 158. `yield` vs `return`

`return` ends a function and sends back one result.

```python
def get_number():
    return 10
```

`yield` creates a generator and produces values one at a time.

```python
def get_numbers():
    yield 1
    yield 2
    yield 3
```

Example:

```python
for number in get_numbers():
    print(number)
```

---

# 159. `yield from`

`yield from` delegates values from another iterable or generator.

```python
def numbers():
    yield from [1, 2, 3, 4]

for number in numbers():
    print(number)
```

It can also delegate to another generator:

```python
def first():
    yield 1
    yield 2

def second():
    yield 3
    yield 4

def combined():
    yield from first()
    yield from second()

print(list(combined()))
```

---

# 160. Generator `send()`

Generators can receive values using `send()`.

```python
def calculator():
    value = 0

    while True:
        value = yield value
        value *= 2

gen = calculator()

print(next(gen))

print(gen.send(10))
print(gen.send(5))
```

`send()` sends a value into the paused generator.

---

# 161. Function as an Object

Functions are first-class objects in Python.

You can store a function in a variable.

```python
def greet():
    print("Hello")

say_hello = greet

say_hello()
```

You can also pass functions to other functions.

```python
def greet():
    return "Hello"

def execute(function):
    print(function())

execute(greet)
```

---

# 162. Higher-Order Functions

A higher-order function accepts a function or returns a function.

Example:

```python
def apply_operation(operation, a, b):
    return operation(a, b)

def add(a, b):
    return a + b

print(apply_operation(add, 10, 20))
```

Output:

```text
30
```

---

# 163. Returning Functions

A function can return another function.

```python
def multiplier(n):

    def multiply(x):
        return x * n

    return multiply

double = multiplier(2)

print(double(5))
```

Output:

```text
10
```

This concept is related to closures.

---

# 164. Advanced Decorators

A decorator can accept functions with arbitrary arguments.

```python
def decorator(func):

    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result

    return wrapper


@decorator
def add(a, b):
    return a + b


print(add(10, 20))
```

---

# 165. `functools.wraps`

When creating decorators, `functools.wraps` preserves metadata from the original function.

```python
from functools import wraps

def decorator(func):

    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)

    return wrapper


@decorator
def greet():
    """Greets the user."""
    print("Hello")


print(greet.__name__)
print(greet.__doc__)
```

---

# 166. Decorator with Arguments

A decorator can itself accept arguments.

```python
def repeat(times):

    def decorator(func):

        def wrapper(*args, **kwargs):

            for _ in range(times):
                func(*args, **kwargs)

        return wrapper

    return decorator


@repeat(3)
def hello():
    print("Hello")


hello()
```

Output:

```text
Hello
Hello
Hello
```

---

# 167. Class Decorators

Classes can also be decorated.

```python
def add_message(cls):

    cls.message = "Hello"

    return cls


@add_message
class Student:
    pass


student = Student()

print(student.message)
```

---

# 168. Static Methods

A static method does not receive `self` automatically.

```python
class Math:

    @staticmethod
    def add(a, b):
        return a + b


print(Math.add(10, 20))
```

Use static methods when the method logically belongs to the class but does not need object or class state.

---

# 169. Class Methods

A class method receives the class as `cls`.

```python
class Student:

    school = "ABC"

    @classmethod
    def show_school(cls):
        print(cls.school)


Student.show_school()
```

---

# 170. Static Method vs Class Method

Static method:

```python
class Example:

    @staticmethod
    def hello():
        print("Hello")
```

Class method:

```python
class Example:

    @classmethod
    def hello(cls):
        print(cls)
```

In simple terms:

```text
staticmethod → does not need self or cls
classmethod  → receives cls
instance method → receives self
```

---

# 171. Dunder Methods

Dunder means **double underscore**.

Examples:

```python
__init__
__str__
__repr__
__len__
__eq__
__add__
```

They allow objects to interact with Python's built-in operations.

---

# 172. `__str__()`

Controls the user-friendly string representation of an object.

```python
class Student:

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Student: {self.name}"


student = Student("Aryan")

print(student)
```

Output:

```text
Student: Aryan
```

---

# 173. `__repr__()`

`__repr__()` provides a developer-oriented representation.

```python
class Student:

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Student({self.name!r})"


student = Student("Aryan")

print(repr(student))
```

`repr()` is especially useful when debugging.

---

# 174. `__len__()`

You can define how `len()` behaves for your object.

```python
class Team:

    def __init__(self, members):
        self.members = members

    def __len__(self):
        return len(self.members)


team = Team(["A", "B", "C"])

print(len(team))
```

Output:

```text
3
```

---

# 175. Operator Overloading

Python allows classes to define how operators work.

```python
class Number:

    def __init__(self, value):
        self.value = value

    def __add__(self, other):
        return Number(self.value + other.value)


a = Number(10)
b = Number(20)

result = a + b

print(result.value)
```

Here `+` uses `__add__()`.

---

# 176. Equality with `__eq__()`

You can define how `==` works for your objects.

```python
class Student:

    def __init__(self, name):
        self.name = name

    def __eq__(self, other):
        return self.name == other.name


a = Student("Aryan")
b = Student("Aryan")

print(a == b)
```

Output:

```text
True
```

---

# 177. Custom Exception Classes

You can create your own exceptions.

```python
class InvalidAgeError(Exception):
    pass


age = -1

if age < 0:
    raise InvalidAgeError("Age cannot be negative")
```

Custom exceptions make large applications easier to understand and maintain.

---

# 178. Exception Chaining

An exception can be raised while preserving the original cause.

```python
try:
    number = int("abc")

except ValueError as error:
    raise RuntimeError("Could not process input") from error
```

`from` explicitly connects the new exception to the original exception.

---

# 179. `else` with Loops

Python loops can have an `else` block.

```python
for i in range(5):
    print(i)
else:
    print("Loop completed")
```

The `else` executes when the loop finishes normally.

If `break` occurs:

```python
for i in range(5):

    if i == 2:
        break

else:
    print("Completed")
```

The `else` does not execute.

---

# 180. Searching with Loop `else`

A common use is searching.

```python
numbers = [1, 3, 5, 7]

for number in numbers:

    if number == 4:
        print("Found")
        break

else:
    print("Not found")
```

Output:

```text
Not found
```

---

# 181. `match` with Conditions

Pattern matching can include guards.

```python
age = 20

match age:

    case n if n < 18:
        print("Minor")

    case n if n >= 18:
        print("Adult")
```

---

# 182. Matching Dictionaries

```python
user = {
    "name": "Aryan",
    "role": "admin"
}

match user:

    case {"role": "admin"}:
        print("Administrator")

    case {"role": "user"}:
        print("Normal user")

    case _:
        print("Unknown")
```

---

# 183. Matching Classes

Pattern matching can work with class objects.

```python
class Point:

    def __init__(self, x, y):
        self.x = x
        self.y = y


point = Point(0, 10)

match point:

    case Point(0, y):
        print("Y axis:", y)

    case Point(x, 0):
        print("X axis:", x)
```

---

# 184. Abstract Base Classes

Abstract classes define interfaces that subclasses must implement.

```python
from abc import ABC, abstractmethod


class Animal(ABC):

    @abstractmethod
    def speak(self):
        pass


class Dog(Animal):

    def speak(self):
        return "Woof"


dog = Dog()

print(dog.speak())
```

You cannot normally instantiate the abstract class until its abstract methods are implemented.

---

# 185. Protocols

Protocols support structural typing.

```python
from typing import Protocol


class Speaker(Protocol):

    def speak(self) -> str:
        ...


class Dog:

    def speak(self) -> str:
        return "Woof"


def make_speak(animal: Speaker):
    print(animal.speak())


make_speak(Dog())
```

The object does not have to explicitly inherit from `Speaker`.

---

# 186. Type Aliases

Type aliases make complex types easier to read.

```python
from typing import TypeAlias

UserData: TypeAlias = dict[str, str]

user: UserData = {
    "name": "Aryan"
}
```

---

# 187. `Final`

`Final` indicates that a value should not be reassigned.

```python
from typing import Final

MAX_USERS: Final = 100
```

Type checkers can warn if you later try to reassign it.

---

# 188. Generic Functions

Generics allow code to work with different types while preserving type information.

```python
from typing import TypeVar

T = TypeVar("T")


def first(items: list[T]) -> T:
    return items[0]


print(first([1, 2, 3]))
print(first(["A", "B", "C"]))
```

---

# 189. `typing.NamedTuple`

A named tuple provides tuple-like data with named fields.

```python
from typing import NamedTuple


class Student(NamedTuple):
    name: str
    age: int


student = Student("Aryan", 20)

print(student.name)
print(student.age)
```

---

# 190. `collections.ChainMap`

`ChainMap` combines multiple dictionaries into a single lookup structure.

```python
from collections import ChainMap

defaults = {
    "theme": "light"
}

user = {
    "theme": "dark"
}

settings = ChainMap(user, defaults)

print(settings["theme"])
```

The first mapping has priority.

---

# 191. `collections.Counter` Advanced Usage

```python
from collections import Counter

numbers = [1, 1, 2, 2, 2, 3]

count = Counter(numbers)

print(count.most_common(2))
```

Output:

```text
[(2, 3), (1, 2)]
```

---

# 192. `collections.deque`

`deque` is useful when adding and removing items from both ends.

```python
from collections import deque

queue = deque([1, 2, 3])

queue.append(4)
queue.appendleft(0)

print(queue)

queue.pop()
queue.popleft()

print(queue)
```

---

# 193. `heapq`

`heapq` provides a priority queue implementation.

```python
import heapq

numbers = [5, 1, 3, 2, 4]

heapq.heapify(numbers)

print(heapq.heappop(numbers))
```

Output:

```text
1
```

Add an item:

```python
heapq.heappush(numbers, 0)
```

---

# 194. `bisect`

`bisect` works with sorted lists.

```python
import bisect

numbers = [1, 3, 5, 7]

position = bisect.bisect(numbers, 4)

print(position)
```

Output:

```text
2
```

Insert while keeping the list sorted:

```python
bisect.insort(numbers, 4)

print(numbers)
```

---

# 195. `itertools`

`itertools` provides tools for working with iterators.

```python
import itertools

numbers = [1, 2, 3]

result = itertools.permutations(numbers)

for item in result:
    print(item)
```

Useful functions include:

```text
chain()
count()
cycle()
repeat()
product()
permutations()
combinations()
```

---

# 196. `itertools.product()`

Creates Cartesian products.

```python
from itertools import product

colors = ["Red", "Blue"]
sizes = ["S", "M"]

for item in product(colors, sizes):
    print(item)
```

---

# 197. `itertools.combinations()`

Creates combinations without repetition.

```python
from itertools import combinations

numbers = [1, 2, 3, 4]

result = combinations(numbers, 2)

for item in result:
    print(item)
```

---

# 198. `itertools.permutations()`

Creates ordered arrangements.

```python
from itertools import permutations

numbers = [1, 2, 3]

for item in permutations(numbers, 2):
    print(item)
```

---

# 199. `functools.partial()`

`partial()` creates a new function with some arguments already filled.

```python
from functools import partial


def power(base, exponent):
    return base ** exponent


square = partial(power, exponent=2)

print(square(5))
```

Output:

```text
25
```

---

# 200. `functools.lru_cache()`

Caches function results.

```python
from functools import lru_cache


@lru_cache
def fibonacci(n):

    if n < 2:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(40))
```

Caching can greatly improve repeated calculations.

---

# 201. `functools.cache()`

For simple unlimited caching:

```python
from functools import cache


@cache
def square(n):
    print("Calculating...")
    return n * n


print(square(5))
print(square(5))
```

The second call can use the cached result.

---

# 202. Sorting with `operator`

The `operator` module can make sorting code cleaner.

```python
from operator import itemgetter

students = [
    ("Aryan", 80),
    ("Amit", 90),
    ("Aryan", 70)
]

students.sort(key=itemgetter(1))

print(students)
```

---

# 203. `operator.attrgetter()`

Useful for sorting objects.

```python
from operator import attrgetter


class Student:

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks


students = [
    Student("Aryan", 80),
    Student("Amit", 90)
]

students.sort(key=attrgetter("marks"))

for student in students:
    print(student.name, student.marks)
```

---

# 204. Regular Expression `findall()`

Find all matches:

```python
import re

text = "Python 3 is better than Python 2"

numbers = re.findall(r"\d+", text)

print(numbers)
```

Output:

```text
['3', '2']
```

---

# 205. Regular Expression `sub()`

Replace matching text.

```python
import re

text = "Python is great"

result = re.sub(r"great", "powerful", text)

print(result)
```

Output:

```text
Python is powerful
```

---

# 206. Compiling Regular Expressions

For repeated use, you can compile a pattern.

```python
import re

pattern = re.compile(r"\d+")

text = "Age: 20, Score: 90"

print(pattern.findall(text))
```

---

# 207. `pathlib` Directory Operations

```python
from pathlib import Path

path = Path("data")

path.mkdir(exist_ok=True)

print(path.exists())
```

List files:

```python
for file in path.iterdir():
    print(file)
```

---

# 208. Recursive File Searching

```python
from pathlib import Path

path = Path("project")

for file in path.rglob("*.py"):
    print(file)
```

This searches subdirectories recursively.

---

# 209. Temporary Files

Python provides the `tempfile` module.

```python
import tempfile

with tempfile.TemporaryFile(mode="w+") as file:

    file.write("Hello")

    file.seek(0)

    print(file.read())
```

Temporary files are useful when data only needs to exist for a short time.

---

# 210. Environment Variables

Read an environment variable:

```python
import os

api_key = os.getenv("API_KEY")

print(api_key)
```

Provide a default:

```python
port = os.getenv("PORT", "8000")

print(port)
```

For secrets, prefer environment variables or a proper secret-management system rather than hard-coding credentials.

---

# 211. Working with `.env` Files

A common development approach is using `python-dotenv`.

Install:

```bash
pip install python-dotenv
```

`.env`:

```text
API_KEY=example_key
DEBUG=True
```

Python:

```python
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("API_KEY")

print(api_key)
```

Do not commit real secrets to source control.

---

# 212. Logging with a Logger

Instead of configuring logging globally everywhere:

```python
import logging

logger = logging.getLogger(__name__)

logger.info("Application started")
```

A basic configuration:

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)

logger.info("Started")
logger.warning("Warning")
logger.error("Error")
```

---

# 213. Logging to a File

```python
import logging

logging.basicConfig(
    filename="app.log",
    level=logging.INFO
)

logging.info("Application started")
```

Logs will be written to `app.log`.

---

# 214. Assertions vs Exceptions

Assertions are mainly useful for detecting programming assumptions.

```python
age = 20

assert age >= 0
```

For user input or normal runtime validation, use exceptions:

```python
if age < 0:
    raise ValueError("Invalid age")
```

Do not rely on assertions for security checks because Python can be run with optimizations that disable them.

---

# 215. Unit Testing with `unittest`

```python
import unittest


def multiply(a, b):
    return a * b


class TestMultiply(unittest.TestCase):

    def test_multiply(self):
        self.assertEqual(multiply(2, 3), 6)

    def test_zero(self):
        self.assertEqual(multiply(5, 0), 0)


if __name__ == "__main__":
    unittest.main()
```

Run:

```bash
python test_app.py
```

---

# 216. `pytest`

`pytest` is a popular third-party testing framework.

Install:

```bash
pip install pytest
```

Example:

```python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5
```

Run:

```bash
pytest
```

---

# 217. Test Fixtures

With `pytest`, fixtures provide reusable test data or setup.

```python
import pytest


@pytest.fixture
def numbers():
    return [1, 2, 3]


def test_length(numbers):
    assert len(numbers) == 3
```

---

# 218. Mocking

Mocks replace real dependencies during testing.

```python
from unittest.mock import Mock

database = Mock()

database.get_user.return_value = {
    "name": "Aryan"
}

user = database.get_user(1)

print(user)
```

Mocking is useful when testing APIs, databases, external services, and other dependencies.

---

# 219. Benchmarking with `timeit`

Measure small pieces of code:

```python
import timeit

result = timeit.timeit(
    "sum(range(100))",
    number=10000
)

print(result)
```

`timeit` is generally better than manually timing tiny snippets with `time.time()`.

---

# 220. Profiling

Python provides profiling tools.

Basic example:

```bash
python -m cProfile app.py
```

Profiling helps identify functions that consume significant execution time.

---

# 221. Memory Profiling Concept

Performance is not only about CPU time.

Large programs may also need memory optimization.

Example:

```python
numbers = [x * x for x in range(1000000)]
```

This creates a large list.

A generator:

```python
numbers = (x * x for x in range(1000000))
```

produces values lazily and can use much less memory.

---

# 222. Garbage Collection

Python automatically manages memory.

The `gc` module provides access to the garbage collector.

```python
import gc

print(gc.isenabled())
```

You can manually trigger collection:

```python
gc.collect()
```

Usually, you should let Python manage garbage collection automatically.

---

# 223. Weak References

A weak reference does not keep an object alive by itself.

```python
import weakref


class Student:
    pass


student = Student()

reference = weakref.ref(student)

print(reference())
```

Weak references are useful in some caches and object-management systems.

---

# 224. Pickle

`pickle` can serialize Python objects.

```python
import pickle

data = {
    "name": "Aryan",
    "age": 20
}

with open("data.pkl", "wb") as file:
    pickle.dump(data, file)
```

Read:

```python
with open("data.pkl", "rb") as file:
    data = pickle.load(file)

print(data)
```

**Security warning:** never unpickle untrusted data. Pickle can execute arbitrary code during deserialization.

---

# 225. JSON vs Pickle

JSON:

```text
Human-readable
Language-independent
Good for APIs
Safer for untrusted structured data when parsed normally
```

Pickle:

```text
Python-specific
Can serialize many Python objects
Not safe for untrusted input
```

For APIs and cross-language data exchange, JSON is usually preferable.

---

# 226. Serialization with Dataclasses

```python
from dataclasses import dataclass, asdict
import json


@dataclass
class Student:
    name: str
    age: int


student = Student("Aryan", 20)

data = asdict(student)

print(json.dumps(data))
```

---

# 227. SQLite with Context Management

```python
import sqlite3

with sqlite3.connect("database.db") as connection:

    connection.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            name TEXT
        )
    """)

    connection.execute(
        "INSERT INTO users (name) VALUES (?)",
        ("Aryan",)
    )
```

Using parameters helps prevent SQL injection.

---

# 228. SQLite Query Results

```python
import sqlite3

with sqlite3.connect("database.db") as connection:

    cursor = connection.execute(
        "SELECT id, name FROM users"
    )

    for row in cursor:
        print(row)
```

---

# 229. Transactions

A transaction groups database operations.

```python
import sqlite3

with sqlite3.connect("database.db") as connection:

    connection.execute(
        "INSERT INTO users (name) VALUES (?)",
        ("Amit",)
    )

    connection.execute(
        "INSERT INTO users (name) VALUES (?)",
        ("Aryan",)
    )
```

If an exception occurs inside the context manager, SQLite can roll back the transaction.

---

# 230. HTTP Requests with Timeouts

When making network requests, specify a timeout.

```python
import requests

response = requests.get(
    "https://example.com",
    timeout=10
)

print(response.status_code)
```

Without a suitable timeout, a network request may wait longer than expected.

---

# 231. Handling HTTP Errors

```python
import requests

response = requests.get(
    "https://example.com",
    timeout=10
)

response.raise_for_status()

print(response.text)
```

`raise_for_status()` raises an exception for unsuccessful HTTP status codes.

---

# 232. HTTP Session

A session can reuse connections and maintain settings such as cookies.

```python
import requests

with requests.Session() as session:

    response = session.get(
        "https://example.com",
        timeout=10
    )

    print(response.status_code)
```

---

# 233. REST API Example

```python
import requests

url = "https://api.example.com/users"

response = requests.get(
    url,
    timeout=10
)

response.raise_for_status()

users = response.json()

for user in users:
    print(user)
```

---

# 234. API Headers

HTTP requests can include headers.

```python
import requests

headers = {
    "Accept": "application/json"
}

response = requests.get(
    "https://example.com/api",
    headers=headers,
    timeout=10
)

print(response.status_code)
```

---

# 235. API Authentication Concept

APIs may use:

```text
API keys
Bearer tokens
OAuth
Session cookies
Basic authentication
```

Example bearer token:

```python
headers = {
    "Authorization": "Bearer YOUR_TOKEN"
}
```

Never hard-code real secrets into publicly shared source code.

---

# 236. Flask Route Parameters

```python
from flask import Flask

app = Flask(__name__)


@app.route("/user/<name>")
def user(name):
    return f"Hello {name}"


if __name__ == "__main__":
    app.run()
```

Visiting:

```text
/user/Aryan
```

produces:

```text
Hello Aryan
```

---

# 237. Flask JSON Response

```python
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api")
def api():
    return jsonify({
        "message": "Hello",
        "status": "success"
    })


if __name__ == "__main__":
    app.run()
```

---

# 238. FastAPI Path Parameters

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {
        "user_id": user_id
    }
```

FastAPI uses type hints to validate parameters.

---

# 239. FastAPI Request Model

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class User(BaseModel):
    name: str
    age: int


@app.post("/users")
def create_user(user: User):
    return user
```

---

# 240. Async HTTP Concept

Asynchronous HTTP clients can be used when handling many network operations.

A common library is `httpx`.

Install:

```bash
pip install httpx
```

Example:

```python
import asyncio
import httpx


async def main():

    async with httpx.AsyncClient() as client:

        response = await client.get(
            "https://example.com"
        )

        print(response.status_code)


asyncio.run(main())
```

---

# 241. Async Context Manager

An asynchronous context manager uses `async with`.

```python
async with resource:
    ...
```

This is useful for asynchronous resources such as network clients.

---

# 242. Async Iterators

An async iterator can be consumed using `async for`.

```python
class Numbers:

    def __aiter__(self):
        self.number = 0
        return self

    async def __anext__(self):

        if self.number >= 3:
            raise StopAsyncIteration

        self.number += 1

        return self.number
```

Use:

```python
async for number in Numbers():
    print(number)
```

---

# 243. Async Generators

```python
import asyncio


async def numbers():

    for i in range(3):
        await asyncio.sleep(1)
        yield i


async def main():

    async for number in numbers():
        print(number)


asyncio.run(main())
```

---

# 244. ThreadPoolExecutor

`concurrent.futures` provides a convenient interface for running tasks.

```python
from concurrent.futures import ThreadPoolExecutor


def square(x):
    return x * x


with ThreadPoolExecutor(max_workers=3) as executor:

    results = executor.map(square, [1, 2, 3, 4])

    print(list(results))
```

Threads are often useful for I/O-bound tasks.

---

# 245. ProcessPoolExecutor

For CPU-bound work, processes can be useful.

```python
from concurrent.futures import ProcessPoolExecutor


def square(x):
    return x * x


if __name__ == "__main__":

    with ProcessPoolExecutor() as executor:

        results = executor.map(
            square,
            [1, 2, 3, 4]
        )

        print(list(results))
```

The `if __name__ == "__main__"` guard is especially important for multiprocessing-compatible code.

---

# 246. Concurrency vs Parallelism

**Concurrency**:

Multiple tasks make progress during overlapping periods.

Examples:

```text
asyncio
threads
```

**Parallelism**:

Multiple tasks actually execute simultaneously on multiple CPU cores.

Examples:

```text
multiprocessing
ProcessPoolExecutor
```

---

# 247. Race Conditions

A race condition occurs when multiple threads/processes access shared state in an unsafe way.

Example concept:

```python
counter = 0
```

If multiple workers modify shared state without proper synchronization, the final result may be unexpected.

Use synchronization mechanisms when shared mutable state is involved.

---

# 248. Lock

A lock protects critical sections.

```python
import threading

lock = threading.Lock()

with lock:
    # Critical section
    print("Protected code")
```

Only one thread at a time can hold the lock.

---

# 249. Queue for Threads

The `queue` module provides thread-safe queues.

```python
from queue import Queue

queue = Queue()

queue.put("Task 1")
queue.put("Task 2")

print(queue.get())
print(queue.get())
```

Queues are commonly used in producer-consumer designs.

---

# 250. Python Project Structure

A larger project can be organized like:

```text
myproject/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── models.py
│   ├── services.py
│   └── utils.py
│
├── tests/
│   ├── test_main.py
│   └── test_services.py
│
├── requirements.txt
├── README.md
└── .gitignore
```

Good project structure makes code easier to maintain.

---

# 251. `__init__.py`

`__init__.py` can mark/configure a package and can expose selected names.

Example:

```text
utils/
├── __init__.py
└── math_tools.py
```

`math_tools.py`:

```python
def add(a, b):
    return a + b
```

Import:

```python
from utils.math_tools import add

print(add(2, 3))
```

---

# 252. Relative Imports

Inside a package:

```python
from .utils import helper
```

`..` can refer to a parent package:

```python
from ..utils import helper
```

Relative imports are useful for organizing package-internal dependencies.

---

# 253. Import Styles

Import a module:

```python
import math
```

Import a specific name:

```python
from math import sqrt
```

Alias:

```python
import pandas as pd
```

Avoid unnecessary wildcard imports:

```python
from math import *
```

Explicit imports generally make code easier to understand.

---

# 254. Circular Imports

A circular import occurs when modules depend on each other.

Example concept:

```text
module_a → module_b
module_b → module_a
```

This can cause import errors or partially initialized modules.

Better approaches include:

```text
Refactor shared functionality
Move common code into another module
Reduce unnecessary dependencies
```

---

# 255. Python Bytecode

Python source code is compiled into bytecode before execution by CPython.

Example:

```python
x = 10
print(x)
```

CPython internally compiles this into bytecode instructions.

You can inspect bytecode with `dis`:

```python
import dis


def add(a, b):
    return a + b


dis.dis(add)
```

---

# 256. `__pycache__`

Python may create a directory such as:

```text
__pycache__/
```

It can contain cached bytecode files.

Example:

```text
module.cpython-3xx.pyc
```

These files are generated automatically and normally should not be committed to Git.

---

# 257. Python Garbage Collection Concept

Python primarily uses reference counting in CPython, along with a cyclic garbage collector for reference cycles.

Example:

```python
a = []
b = a

del a
```

The object can still exist because `b` references it.

When no strong references remain, the object can eventually be reclaimed.

---

# 258. Reference Cycles

Objects can reference each other.

```python
a = []
b = []

a.append(b)
b.append(a)
```

This creates a reference cycle.

Python's garbage collector can detect and collect certain unreachable cycles.

---

# 259. Slots

`__slots__` can restrict instance attributes and may reduce per-instance memory usage in suitable classes.

```python
class Student:

    __slots__ = ("name", "age")

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

Now arbitrary new attributes are not normally allowed:

```python
student = Student("Aryan", 20)

student.city = "Delhi"
```

This raises an `AttributeError`.

Use `__slots__` when you understand its trade-offs; it is not automatically better for every class.

---

# 260. Descriptors

Descriptors control attribute access.

A descriptor commonly defines methods such as:

```python
__get__()
__set__()
__delete__()
```

Example:

```python
class Positive:

    def __get__(self, instance, owner):
        return instance._value

    def __set__(self, instance, value):

        if value < 0:
            raise ValueError("Value cannot be negative")

        instance._value = value


class Number:

    value = Positive()


number = Number()

number.value = 10

print(number.value)
```

Properties are implemented using the descriptor protocol.

---

# 261. Metaclasses

A metaclass controls how classes themselves are created.

Normally:

```python
class Student:
    pass
```

The class `Student` is itself an object created by a metaclass.

The default metaclass is:

```python
type
```

Example:

```python
class Student:
    pass

print(type(Student))
```

Output:

```text
<class 'type'>
```

Metaclasses are an advanced feature and are rarely needed in ordinary applications.

---

# 262. Dynamic Class Creation

Classes can be created dynamically with `type()`.

```python
Student = type(
    "Student",
    (),
    {
        "name": "Aryan"
    }
)

student = Student()

print(student.name)
```

Here `type()` creates a new class dynamically.

---

# 263. Monkey Patching

Python allows attributes and methods to be changed at runtime.

```python
class Dog:

    def speak(self):
        print("Woof")


def new_speak(self):
    print("New sound")


Dog.speak = new_speak

dog = Dog()

dog.speak()
```

Monkey patching can be useful in controlled testing scenarios, but excessive use can make software difficult to understand.

---

# 264. Dependency Injection

Instead of creating dependencies inside a function, pass them into the function.

Less flexible:

```python
def process():
    database = Database()
    database.save()
```

More flexible:

```python
def process(database):
    database.save()
```

Now different database implementations can be supplied.

This makes testing and maintenance easier.

---

# 265. Design Pattern: Factory

A factory creates objects based on some input.

```python
class Dog:

    def speak(self):
        return "Woof"


class Cat:

    def speak(self):
        return "Meow"


def create_animal(animal_type):

    if animal_type == "dog":
        return Dog()

    if animal_type == "cat":
        return Cat()

    raise ValueError("Unknown animal")


animal = create_animal("dog")

print(animal.speak())
```

---

# 266. Design Pattern: Singleton Concept

A singleton attempts to ensure that only one instance of a class exists.

Example:

```python
class Singleton:

    _instance = None

    def __new__(cls):

        if cls._instance is None:
            cls._instance = super().__new__(cls)

        return cls._instance


a = Singleton()
b = Singleton()

print(a is b)
```

Output:

```text
True
```

In modern Python, simpler alternatives such as module-level state are often preferable.

---

# 267. Design Pattern: Strategy

Strategy means selecting an algorithm at runtime.

```python
def add(a, b):
    return a + b


def multiply(a, b):
    return a * b


def calculate(operation, a, b):
    return operation(a, b)


print(calculate(add, 10, 5))
print(calculate(multiply, 10, 5))
```

Functions being first-class objects make this pattern natural in Python.

---

# 268. Clean Code Principles

Good Python code should generally:

```text
Use meaningful names
Keep functions focused
Avoid unnecessary duplication
Handle errors explicitly
Write tests
Use type hints where useful
Keep dependencies manageable
Prefer readable code over clever code
```

Example:

Avoid:

```python
x = 10
y = 20
z = x + y
```

Prefer:

```python
price = 10
tax = 20

total = price + tax
```

The second version communicates intent more clearly.

---

# 269. PEP 8

PEP 8 is Python's widely used style guide.

Example:

```python
def calculate_total(price, tax):
    return price + tax
```

Common recommendations include:

```text
4 spaces for indentation
snake_case for functions and variables
PascalCase for classes
UPPER_CASE for constants
Readable line lengths
Spaces around operators
```

---

# 270. Docstrings

Docstrings document functions, classes, and modules.

```python
def add(a, b):
    """
    Add two numbers and return the result.
    """
    return a + b
```

Access the docstring:

```python
print(add.__doc__)
```

---

# 271. Type Checking

Python itself does not enforce most type hints at runtime.

Example:

```python
def add(a: int, b: int) -> int:
    return a + b
```

A static type checker such as `mypy` can analyze this code.

Install:

```bash
pip install mypy
```

Run:

```bash
mypy app.py
```

---

# 272. Formatting Tools

Automatic formatters can keep code consistent.

A popular formatter is:

```bash
pip install black
```

Run:

```bash
black .
```

Formatting tools reduce debates about code style.

---

# 273. Linting

Linters detect potential problems and style issues.

Example:

```bash
pip install ruff
```

Run:

```bash
ruff check .
```

Linters can identify things such as:

```text
Unused imports
Undefined names
Potential bugs
Style problems
```

---

# 274. Dependency Management

A simple project can use:

```text
requirements.txt
```

Example:

```text
requests
flask
pandas
```

Install:

```bash
pip install -r requirements.txt
```

Modern Python projects may also use `pyproject.toml` for project metadata, dependencies, tooling configuration, and packaging.

---

# 275. `pyproject.toml`

A project can contain:

```text
myproject/
├── pyproject.toml
├── src/
├── tests/
└── README.md
```

`pyproject.toml` is now a central configuration file for many Python packaging and development tools.

---

# 276. Python Package Installation

A package can be installed from PyPI:

```bash
pip install requests
```

Upgrade:

```bash
pip install --upgrade requests
```

Show package information:

```bash
pip show requests
```

---

# 277. Semantic Versioning

Software versions commonly follow a pattern like:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
2.4.1
```

Generally:

```text
2 → major
4 → minor
1 → patch
```

The exact compatibility policy depends on the project.

---

# 278. Environment Isolation

Different projects may require different package versions.

Example:

```text
Project A → requests version X
Project B → requests version Y
```

Virtual environments prevent these dependencies from interfering with each other.

Create:

```bash
python -m venv .venv
```

Activate:

```bash
source .venv/bin/activate
```

Windows:

```bash
.venv\Scripts\activate
```

---

# 279. Python Security Basics

Important security practices:

```text
Never hard-code passwords
Never log secrets
Validate external input
Use parameterized SQL queries
Use HTTPS
Set network timeouts
Do not execute untrusted code
Do not unpickle untrusted data
Keep dependencies updated
Use secure password hashing
```

---

# 280. SQL Injection

Unsafe:

```python
query = f"SELECT * FROM users WHERE name = '{name}'"
```

If `name` contains malicious SQL, the query can be manipulated.

Use parameters:

```python
cursor.execute(
    "SELECT * FROM users WHERE name = ?",
    (name,)
)
```

Parameterized queries keep user input separate from SQL syntax.

---

# 281. Password Storage

Never store passwords like:

```python
password = "123456"
```

in a database as plain text.

Use a dedicated password hashing algorithm/library.

Example:

```python
from werkzeug.security import (
    generate_password_hash,
    check_password_hash
)

hashed = generate_password_hash("my_password")

print(
    check_password_hash(
        hashed,
        "my_password"
    )
)
```

---

# 282. Secure Random Numbers

Do not use `random` for security-sensitive tokens.

Use:

```python
import secrets

token = secrets.token_urlsafe(32)

print(token)
```

`secrets` is designed for security-sensitive randomness.

---

# 283. Hashlib

`hashlib` provides cryptographic hash functions.

```python
import hashlib

text = "Python"

result = hashlib.sha256(
    text.encode()
).hexdigest()

print(result)
```

Hashes are useful for integrity checks and many cryptographic applications, but password storage requires a dedicated password-hashing scheme.

---

# 284. Base64

Base64 encodes binary data as text.

```python
import base64

text = "Hello Python"

encoded = base64.b64encode(
    text.encode()
)

print(encoded)
```

Decode:

```python
decoded = base64.b64decode(encoded)

print(decoded.decode())
```

Base64 is **encoding, not encryption**.

---

# 285. URL Encoding

Use `urllib.parse` for URL-related operations.

```python
from urllib.parse import quote

text = "hello world"

encoded = quote(text)

print(encoded)
```

Output:

```text
hello%20world
```

---

# 286. URL Parsing

```python
from urllib.parse import urlparse

url = "https://example.com/users?id=10"

result = urlparse(url)

print(result.scheme)
print(result.netloc)
print(result.path)
print(result.query)
```

---

# 287. CSV Module

Python includes a built-in CSV module.

```python
import csv

with open("users.csv", newline="") as file:

    reader = csv.reader(file)

    for row in reader:
        print(row)
```

Write CSV:

```python
import csv

with open("users.csv", "w", newline="") as file:

    writer = csv.writer(file)

    writer.writerow(["Name", "Age"])
    writer.writerow(["Aryan", 20])
```

---

# 288. CSV with Dictionaries

```python
import csv

with open("users.csv", newline="") as file:

    reader = csv.DictReader(file)

    for row in reader:
        print(row["Name"])
```

---

# 289. XML

Python includes XML parsing libraries.

```python
import xml.etree.ElementTree as ET

root = ET.fromstring(
    "<user><name>Aryan</name></user>"
)

print(root.find("name").text)
```

For untrusted XML, choose parsing approaches carefully and consider security implications.

---

# 290. YAML

YAML is commonly used for configuration.

A third-party package can be installed:

```bash
pip install pyyaml
```

Example:

```python
import yaml

text = """
name: Aryan
age: 20
"""

data = yaml.safe_load(text)

print(data)
```

Prefer `safe_load()` when loading untrusted or ordinary YAML data.

---

# 291. Configuration Management

Instead of hard-coding configuration:

```python
DATABASE_URL = "..."
```

Use environment variables:

```python
import os

DATABASE_URL = os.getenv("DATABASE_URL")
```

For larger projects, configuration can be separated into dedicated modules or configuration objects.

---

# 292. Caching

Caching stores previously calculated or retrieved results.

Simple example:

```python
cache = {}


def square(n):

    if n in cache:
        return cache[n]

    result = n * n

    cache[n] = result

    return result
```

For function-level caching, `functools.cache` or `lru_cache` is often simpler.

---

# 293. Memoization

Memoization is caching the result of a function.

```python
from functools import cache


@cache
def factorial(n):

    if n <= 1:
        return 1

    return n * factorial(n - 1)


print(factorial(5))
```

---

# 294. Recursion Limits

Python limits recursion depth.

```python
import sys

print(sys.getrecursionlimit())
```

You generally should not solve deep-recursion problems simply by increasing this limit. An iterative solution is often safer.

---

# 295. Iterative vs Recursive

Recursive:

```python
def factorial(n):

    if n <= 1:
        return 1

    return n * factorial(n - 1)
```

Iterative:

```python
def factorial(n):

    result = 1

    for i in range(2, n + 1):
        result *= i

    return result
```

For many straightforward problems, the iterative approach avoids recursion-depth limitations.

---

# 296. Big-O Complexity

Big-O describes how an algorithm's resource requirements grow.

Example:

```python
for number in numbers:
    print(number)
```

Approximately:

```text
O(n)
```

Nested loop:

```python
for a in numbers:
    for b in numbers:
        print(a, b)
```

Approximately:

```text
O(n²)
```

Common complexities:

```text
O(1)       Constant
O(log n)   Logarithmic
O(n)       Linear
O(n log n)
O(n²)      Quadratic
O(2ⁿ)      Exponential
```

---

# 297. Stack

A stack follows:

```text
LIFO
Last In, First Out
```

Using a list:

```python
stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print(stack.pop())
```

Output:

```text
30
```

---

# 298. Queue

A queue follows:

```text
FIFO
First In, First Out
```

Using `deque`:

```python
from collections import deque

queue = deque()

queue.append("A")
queue.append("B")
queue.append("C")

print(queue.popleft())
```

Output:

```text
A
```

---

# 299. Set for Fast Membership

Lists:

```python
numbers = [1, 2, 3, 4, 5]

print(5 in numbers)
```

Sets are often more efficient for membership checks:

```python
numbers = {1, 2, 3, 4, 5}

print(5 in numbers)
```

Sets are designed for fast membership testing on average.

---

# 300. Final Python Learning Roadmap

A good order for learning Python is:

```text
1. Python basics
2. Variables
3. Data types
4. Strings
5. Operators
6. Input/output
7. Conditions
8. Loops
9. Lists
10. Tuples
11. Sets
12. Dictionaries
13. Functions
14. Comprehensions
15. Modules
16. File handling
17. Exceptions
18. OOP
19. Iterators
20. Generators
21. Decorators
22. Type hints
23. Dataclasses
24. JSON
25. Regular expressions
26. pathlib
27. Testing
28. Logging
29. SQLite
30. HTTP/API programming
31. Flask/FastAPI
32. NumPy
33. Pandas
34. Matplotlib
35. Async programming
36. Threading
37. Multiprocessing
38. Performance
39. Security
40. Packaging
41. Project architecture
42. Advanced Python internals
```

### Practice Projects

After completing these notes, build projects in increasing difficulty:

```text
1. Calculator
2. Number guessing game
3. To-do list
4. Password generator
5. Contact book
6. Quiz application
7. Expense tracker
8. File organizer
9. Weather/API application
10. Web scraper
11. SQLite CRUD application
12. REST API
13. Flask web application
14. FastAPI backend
15. Data analysis project
16. Automation tool
17. Authentication system
18. Full-stack Python project
```

**Next natural section:** we can continue these notes beyond the 300 mark with **Python interview questions, DSA in Python, advanced OOP, decorators/generators in depth, concurrency, FastAPI/Flask, NumPy/Pandas, SQL, projects, and Python coding exercises**.
