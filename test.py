import folium

map =folium.Map(location=[50.51,4.21], zoom_start=8)

folium.Marker(location=[50.51,4.21], popup='Google HQ', icon=folium.Icon(color="orange")).add_to(map)
map.save('map1.html')

