snack_name = "Chips"

price = 1.50

quantity = 10

is_available = True


print("Snack Name:", snack_name)
print("Price: $", price)
print("Quantity:", quantity)
print("Available?", is_available)

print("price:", type(price))
print("quantity:", type(quantity))
print("available:", type(is_available))

total = price * quantity
print("Total Value: $", total)


sale_price = price - 0.25
print("Sale Price: $", sale_price)


double_stock = quantity * 2
print("Double Stock:", double_stock)


print("Price under $2:", price < 2)
print("More than 5 snacks in stock:", quantity > 5)
print("Price is exactly $1.50:", price == 1.50)

shop_name = "Quick" + " " + "Bites"
print("Shop name:", shop_name)

print("Letters in snack name:", len(snack_name))
print("First letter:", snack_name[0])

price_a = 1.50
price_b = 3.00

print("Before:", price_a, "and", price_b)

temp = price_a
price_a = price_b
price_b = temp

print("After:", price_a, "and", price_b)
