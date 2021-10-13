import requests
import sqlite3

con = sqlite3.connect('../database.sqlite')

cursor = con.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
print(cursor. fetchall())
# for row in cur.execute("SELECT * FROM summoners"):
#     print(row)