import pandas as pd
import csv
stats = []
def calculate_statistics(directory,nOfSubject):
    df = pd.read_csv (directory,encoding='iso-8859-1')

    for i in range(nOfSubject):
        maxOfI = int(input(f"Enter max grade of subject({i+1}) : "))
        from0to50 = df.query(f'Subject_{i+1} > {0*maxOfI} & Subject_{i+1} <= {0.5*maxOfI}')[f'Subject_{i+1}'].count()
        from50to65 = df.query(f'Subject_{i+1} > {0.5*maxOfI} & Subject_{i+1} <= {0.65*maxOfI}')[f'Subject_{i+1}'].count()
        from65to75 = df.query(f'Subject_{i+1} > {0.65*maxOfI} & Subject_{i+1} <= {0.75*maxOfI}')[f'Subject_{i+1}'].count()
        from75to85 = df.query(f'Subject_{i+1} > {0.75*maxOfI} & Subject_{i+1} <= {0.85*maxOfI}')[f'Subject_{i+1}'].count()
        from85to100 = df.query(f'Subject_{i+1} > {0.85*maxOfI} & Subject_{i+1} <= {maxOfI}')[f'Subject_{i+1}'].count()
        adict = {"subject":chr(ord('A')+i),"0->50":from0to50,"50->65":from50to65,"65->75":from65to75,"75->85":from75to85,"85->100":from85to100}
        stats.append(adict)
    maxOfI = 750
    from0to50 = df.query(f'fullGrade > {0*maxOfI} & fullGrade <= {0.5*maxOfI}')['fullGrade'].count()
    from50to65 = df.query(f'fullGrade > {0.5*maxOfI} & fullGrade <= {0.65*maxOfI}')['fullGrade'].count()
    from65to75 = df.query(f'fullGrade > {0.65*maxOfI} & fullGrade <= {0.75*maxOfI}')['fullGrade'].count()
    from75to85 = df.query(f'fullGrade > {0.75*maxOfI} & fullGrade <= {0.85*maxOfI}')['fullGrade'].count()
    from85to100 = df.query(f'fullGrade > {0.85*maxOfI} & fullGrade <= {maxOfI}')['fullGrade'].count()
    adict = {"subject":chr(ord('A')+nOfSubject),"0->50":from0to50,"50->65":from50to65,"65->75":from65to75,"75->85":from75to85,"85->100":from85to100}
    stats.append(adict)
def output_statistics_csv(dire,nos):
    calculate_statistics(dire,nos)
    keys = stats[0].keys()
    with open('statistics.csv','w') as output_file :
        dict_writer =csv.DictWriter(output_file, keys)
        dict_writer.writeheader()
        dict_writer.writerows(stats)
def claculate_rank_csv(directory,nOfSubject):
     df = pd.read_csv (directory,encoding='iso-8859-1')
     for i in range(nOfSubject):
          df = df.sort_values(by=f'Subject_{i+1}', ascending=False)
          df[f'Subject_{i+1}_Rank'] = pd.factorize(df[f'Subject_{i+1}'])[0]
          df[f'Subject_{i+1}_Rank'] = df[f'Subject_{i+1}_Rank'] + 1
     df = df.sort_values(by='fullGrade', ascending=False)
     df['fullGrade_Rank'] = pd.factorize(df['fullGrade'])[0]
     df['fullGrade_Rank'] = df['fullGrade_Rank'] + 1
     df['index'] = range(1, len(df) + 1)
     df.to_csv('result.csv', index=False, encoding='latin1')
def fullGrade_calculate(directory):
     df = pd.read_csv (directory,encoding='iso-8859-1')
     df['fullGrade'] = df['Subject_1'] + df['Subject_2'] + df['Subject_3'] + df['Subject_4'] + df['Subject_5'] + df['Subject_6']
     df.to_csv('scraped.csv', index=False, encoding='latin1')

def main():
        fullGrade_calculate('scraped.csv')
        output_statistics_csv('scraped.csv',6)
        claculate_rank_csv('scraped.csv',6)

main()