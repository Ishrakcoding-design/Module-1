# ================================
# MY DAILY MOOD ADVISOR
# ================================

# PART 1 - USER INPUT
name = input("Before entering... prove you're not an NPC. 🗿 What's your name? ")
mood = input("Choose your Sigma Mood (happy/sad/tired/stressed/excited): ")
energy = int(input("Enter your Aura Power (1-10). If you type 10 after sleeping 3 hours... you're lying. 😑 "))

# PART 2 - THE if STATEMENT
if energy < 3:
    print("💀 CRITICAL DAMAGE!")
    print("Your battery is lower than my grades after one math test.")
    print("A snail overtook you...")
    print("Then a turtle...")
    print("Then a grandpa...")
    print("Even a Nokia 3310 has more energy than you.")
    print("Your bed is texting: 'Where are you, bro?'")
    print("Sigma Emergency Team has been dispatched. 🚑")

# PART 3 - if-else STATEMENT
if energy >= 5:
    print("🗿 SIGMA STATUS CONFIRMED.")
    print("Homework looked at you and said, 'Maybe tomorrow.'")
    print("Your motivation has unlocked Ultra Instinct.")
else:
    print("💀 You're so tired...")
    print("Even the chair told you to sit down.")
    print("Achievement Unlocked: Certified Couch Potato.")
    print("Sleep.exe is running in the background. 😴")

# PART 4 - if-elif-else STATEMENT
if mood == "happy":
    advice = "😎 Stay happy. Your enemies are buffering."
elif mood == "sad":
    advice = "Eat pizza. If there's no pizza... cry dramatically until pizza appears. 🍕"
elif mood == "tired":
    advice = "Your bed just posted 'Missing You ❤️' on Instagram."
elif mood == "stressed":
    advice = "Relax. Homework can't smell fear... probably. 📚"
elif mood == "excited":
    advice = "🚀 Calm down. You're acting like you found GTA VI for free."
else:
    advice = "🤖 Unknown Mood Detected. Windows is installing emotional updates... 1% complete."

# PART 5 - datetime MODULE
import datetime

today = datetime.datetime.now()

# FINAL OUTPUT
print("\n================================")
print("🗿 SIGMA MOOD FBI REPORT")
print("================================")
print("😎 Sigma Legend:", name)
print("Brain Software:", mood)
print("Aura Level:", energy)
print("Date & Time:", today)
print("AI Roast:", advice)
print("--------------------------------")
print("Final Sigma Rating: ♾️/10")
print("Bank Balance: Still Checking...")
print("Homework: Still Chasing You.")
print("Motivation: Last Seen Online 3 Days Ago.")
print("Bed: 'Come back, my child.'")
print("Pizza: 'I'm always here for you.'")
print("Turtle: 'Skill issue.'")
print("Duck: 'Quack.'")
print("Reality: 'Wake up, bro.' 💀")
print("🗿 Stay Sigma.")
print("================================")