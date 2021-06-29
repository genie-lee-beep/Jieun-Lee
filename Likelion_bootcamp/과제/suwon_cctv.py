#!/usr/bin/env python
# coding: utf-8

# In[75]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


# In[85]:


suwon = pd.read_csv("./data/suwon_CCTV_20210208.csv", engine ='python', encoding='EUCKR')

suwon

suwon.shape


# In[93]:


suwon.head()


# In[94]:


df_sample = suwon[['카메라대수','위도','경도']]

print(df_sample[0:10])


# In[97]:


loc=[37.32870034838828, 127.02788823562663]
map = folium.Map(loc,   tiles='Stamen Terrain', zoom_start=11)
for i in range(50):
    folium.Marker(location=[df_sample.loc[i]['위도'],df_sample.loc[i]['경도']],  # suwom으로 가져오면 너무 많으니까, df_sample로!
                tooltip=df_sample.loc[i]['카메라대수'],
                icon = folium.Icon(color='green', icon="info-sign")
                ).add_to(map)


map.save('suwon_cctv.html')
map

