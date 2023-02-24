import csv
import pyrebase
config = {
    "apiKey": "AIzaSyDJVSI2k2wWdvIh0Lrk1X9JhBjZtqGadaA",
    "authDomain": "result-9aa90.firebaseapp.com",
    "projectId": "result-9aa90",
    "databaseURL":"https://result-9aa90-default-rtdb.firebaseio.com",
    "storageBucket": "result-9aa90.appspot.com",
    "messagingSenderId": "298390810001",
    "appId": "1:298390810001:web:f88a8f1e9771800c227e30",
    "measurementId": "G-8PPK5GM3EQ"
}
firebase = pyrebase.initialize_app(config)

database = firebase.database()

with open('result.csv') as file :
    read = csv.DictReader(file)
    for row in read:
        data1 = {"Se_Nu":row['ST.NO.'],"S_N":row['ST.Name'],"Subject_1":row['Subject_1'],"Subject_2":row['Subject_2'],"Subject_3":row['Subject_3'],"Subject_4":row['Subject_4'],
                "Subject_5":row['Subject_5'],"Subject_6":row['Subject_6'],"fullGrade":row['fullGrade']}
        data2 = {"fullGrade_Rank":row['fullGrade_Rank'],"Subject_1_Rank":row['Subject_1_Rank'],"Subject_2_Rank":row['Subject_2_Rank'],"Subject_3_Rank":row['Subject_3_Rank'],"Subject_4_Rank":row['Subject_4_Rank'],
                 "Subject_5_Rank":row['Subject_5_Rank'],"Subject_6_Rank":row['Subject_6_Rank']}
        data3 = {"S_N":row['ST.Name'],"fullGrade":row['fullGrade'],"fullGrade_Rank":row['fullGrade_Rank']}
        database.child("comp").child("result").child(row['ST.NO.']).set(data1)
        database.child("comp").child("ranking").child(row['ST.NO.']).set(data2)
        database.child("comp").child("top").child(row['index']).set(data3)
        print(f"St {row['ST.NO.']} uploaded")

with open('statistics.csv') as file :
    read = csv.DictReader(file)
    for row in read:
        data2 = {"F":row['0->50'],"D":row['50->65'],"C":row['65->75'],"B":row['75->85'],"A":row['85->100']}
        database.child("comp").child("statistics").child(row['subject']).set(data2)
        print("Statistics of Subject uploaded")