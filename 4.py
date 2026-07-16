# Function to find Fibonacci number using recursion
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# User input
terms = int(input("🤔 How many Fibonacci babies do you want to see? "))

# Print Fibonacci series
print("🚀 Fibonacci Army is arriving...")

for i in range(terms):
    print(fibonacci(i), end=" ")

print("\n🎉 Boom! Mission Completed.")