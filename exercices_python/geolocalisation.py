import folium

map =folium.Map(location=[50.84671, 4.352519], zoom_start=15)

folium.Marker(location=[50.84671, 4.352519], popup='Grand Place de Bruxelles', icon=folium.Icon(color="orange")).add_to(map)
map.save('map1.html')

