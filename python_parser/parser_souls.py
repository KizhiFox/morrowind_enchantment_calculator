#!/usr/bin/env python3
with open('raw_souls.txt', 'r') as f:
    text = f.read().splitlines()
items = []
gem = ''
value = ''
for i in text:
    if i.split()[0] == '!gem':
        gem = i.split()[1]
    elif i.split()[0] == '!v':
        value = i.split()[1]
    else:
        name_en = i.split('|')[0]
        name_ru = i.split('|')[1]
        if 'tr' in i.split('|'):
            addon = 'tr'
        elif 'bm' in i.split('|'):
            addon = 'bm'
        else:
            addon = 'm'
        if 'unique' in i.split('|'):
            unique = 'true'
        else:
            unique = 'false'
        items.append(f"    {'{'}\n        nameEn: '{name_en}',\n\
        nameRu: '{name_ru}',\n\
        value: {value},\n\
        img: 'images/gems/gem_{gem}.png',\n\
        addon: '{addon}',\n\
        unique: {unique}\n    {'}'}")
text = 'souls = [\n' + ',\n'.join(items) + '\n]\n'
with open('souls.js', 'w') as f:
    f.write(text)
