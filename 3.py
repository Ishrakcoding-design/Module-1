# User input
num = int(input("🧐 Enter a number and let's expose its secret: "))

# Store original number
temp = num

# Count the number of digits
order = len(str(num))

# Calculate Armstrong sum
total = 0

while temp > 0:
    digit = temp % 10
    total += digit ** order
    temp //= 10

# Check Armstrong number
if total == num:
    print("🏆", num, "is an Armstrong Number! Sigma Approved 😎")
else:
    print("🤡", num, "is NOT an Armstrong Number. Better luck next time!")