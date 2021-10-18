import seaborn as sns
import matplotlib.pyplot as plt

ex = sns.load_dataset("exercise")
print(ex)

#sns.barplot(x='kind', y='pulse', data=ex)
plt.figure(figsize=(9,6))
sns.barplot(x='time', y='pulse', hue="id", data=ex)
plt.show() # plt.plot은 함수로 사용되기 때문에 괄호를 꼭 써줘야 함!
