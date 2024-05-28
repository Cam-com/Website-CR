import pandas as pd
import sys

# Download the Excel file
file_location = 'Data\HSK_Level_3_(New_HSK).xls'

# Import the Excel file using pandas
df = pd.read_excel(file_location, sheet_name='HSK Level 3')

df.columns = ['Order','HSK Level - Order','Voc','py','Def']

dl = df['HSK Level - Order'].str.split('-', expand=True)
dl.columns = ['HSK Level','Sub-Order']

ds = df['Def'].str.split(';', expand=True)
#  ds = ds.rename(columns={df.colummns[0]: 'Fr'})

dv = pd.concat([df,dl,ds], axis=1)
dv = dv[['Order','HSK Level','Sub-Order','Voc','py','Def',0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]]

Voc = dv[['Order','HSK Level','Voc','py','Def',0,1,2]]

data_to_pass_back = 'Send this to the node process'

# Check if an argument is provided
if len(sys.argv) > 1:
    input_data = sys.argv[1]
    
else:
    input_data = ""
    
output = data_to_pass_back
print(output)

sys.stdout.flush()