students, subjects = map(int,input().split())
grades = []

for i in range(subjects):
    grades.append(list(map(float,input().split())))
    
for i in range(students):
    print(sum([x[i] for x in grades])/subjects)
