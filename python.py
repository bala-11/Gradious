print("Assign multiple value to multiple variables :")
x,y,z = "banana","orange","watermelon";
print(x)
print(y)
print(z)

print("\n")
print("Assign one value to multiple variables :")
a = b = c = "banana";
print(c);

print("\n")
print("unpack a collection :")
fruits = ["grapes","apple","muskmelon"];
m,n,z = fruits;
print(m)
print(n)
print(z)

print("\n")
x = "awesome";
def myFunc():
    print("Python is " + x +".");
myFunc()

print("\n");
print("Create a variable inside a function, with the same name as the global variable :");


x = "awesome";
def myFunc():
    x = "fantastic"
    print("Python is " + x +".");
myFunc()
print("Python is " + x);


print("\n")
print("Type conversion in python");

x = 1;
y = 2.5;
z = 5j;

a = float(x);
b = int(y);
c = complex(y)

print(a)
print(b)
print(c)


print("\n")
print("Random in python");

import random;
print(random.randrange(1,100))















