# Autoflex

Webpage for autoflex servis

## Zakladne poznatky

- ikony najlepsie mat v `.svg` formate
- figma link: https://www.figma.com/design/FtovLi8Yn7L6SCtd6ZudP2/Car-Services-(Community)?node-id=0-1&t=cSkcMAGeGaPq8j3L-1

## TODO

- font makcene
- google review vyzeraju hrozne 
- pridat rezervaciu (suhlasim s obchodnymi podmienkami)

## Co potrebujeme od mara

- font
- logo
- malu ikonku co byva pred nazvom sekcie (napr. pred kto sme taku tu co vyzera jak tep u doktora), ale toto mozno aj sami najdeme
- ikony na sluzby (Sekcia 1)
- obrazky do kto sme (Sekcia 2)
- recenzie json (Sekcia 3)
- reviews.json
- faqs.json

## Sekcie

### Home

- rezervacia terminu sa skrollne na sekciu Objednajte sa
- fotku bud od mara alebo najst vlastnu ale myslim ze najlepsie mat vlastnu fotku kvoli autorskym pravam

### 1. Co ponukame?

Json `services.json` vo formate:

```json
[
    {
        "title": "some random title",
        "photoUrl": "path/to/image.jpg"
    }
]
```

Template je v `data/services.json`.

Myslim ze tieto sluzby maju byt iba ilustrativne ze ziadne prekliky. Jedine na konci mozno preklik na inu stranku viac o nasich sluzbach.

### 2. Kto sme?

ez

### 3. Recenzie

Json `reviews.json` vo formate:

```json
[
    {
        "text": "lorem ipsum",
        "authorName": "Author name",
        "authorImage": "path/to/image.jpg",
        "authorAddress": "Address city, state or sth"
    }
]
```

Template je v `data/reviews.json`.

### 4. Objednajte sa

Netusim jak sa robi formular. Idealne ked typek sa objedna tak poslat nejako mail marovi ze takato je rezervacka alebo na mail autoflexu

### 5. Our latest work

Toto treba doladit lebo neviem ci to budu chciet zakazdym updateovat alebo tam proste najebat random jedno auto alebo najebat tam tak tri auta ktore sa budu swajpovat ako nejaka ukazka

Treba doriesit kam ma ist preklik view case study

### 6. FAQS

Json `faqs.json` vo formate:

```json
[
    {
        "question": "question title",
        "answer": "answer"
    }
]
```

Template je v `data/faqs.json`

## Co dalej treba

- Jessie sipka (to co sme mali na webstrankovom predmete ze ta to scrollne hore ked si kdesi v strede stranky bolo to vpravo dolu)

### Author

moresko
