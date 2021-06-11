#!/bin/bash

# CÓMO USARLO
# Desde una terminal bash ejecutar el siguiente código:

# ./create-component.sh param1 param2? param3?

# param1 = nombre del componente
# param2 (opcional) = en caso de existir, CREA el TEST del componente. Valores permitidos: t, T.
# param3 (opcional) = en caso de existir, CREA el la CARPETA del componente. Valores permitidos: c, C.

# EJEMPLOS:
# ./create-component.sh UserApp     => creará un COMPONENTE UserApp
# ./create-component.sh UserApp T   => creará un COMPONENTE UserApp y su TEST
# ./create-component.sh UserApp c   => creará una CARPETA UserApp con su COMPONENTE
# ./create-component.sh UserApp t C => creará una CARPETA UserApp con su COMPONENTE y TEST


# El componente se creará en el directorio "src/components". Para cambiar esto modificar la línea 34

####################################################################################################


if ! [[ $1 ]]; then
	echo "Error, debe proveer un nombre para el componente."
    exit
else
    COMPONENT="import React from 'react' \n \nexport const $1 = () => { \n \treturn ( \n \t \t<> \n \n \t \t</> \n \t)\n}"
    TEST="import React from 'react' \nimport '@testing-library/jest-dom' \n \nimport { $1 } from './$1' \nimport
     { shallow } from 'enzyme' \n \ndescribe('<$1 />', () => { \n \n \ttest('should display correctly', () =>
      { \n \t \tconst wrapper = shallow(<$1 />) \n \t \texpect(wrapper).toMatchSnapshot() \n \t}) \n \n \t})"

# MODIFICAR LA SIGUIENTE LÍNEA CAMBIARÁ EL DESTINO DEL COMPONENTE CREADO
    cd "src/components"

    if [[ $3 = ["cC"] || $2 = ["cC"] ]]; then
        mkdir $1
        if ! [ -d "$1" ]; then
            echo "Error al crear la carpeta."
            exit
        else
            cd $1
        fi
    fi
    if [ -f "$1.js" ]; then
        echo "El archivo ya existe."
        exit
    else
        touch $1.js
    fi
    if ! [ -f "$1.js" ]; then
        echo "Error al crear el componente."
        exit
    else
        echo -e $COMPONENT > $1.js
        if [[ $2 = ["tT"] ]]; then
            touch $1.test.js
            if ! [ -f "$1.test.js" ]; then
                echo "Error al crear el test."
                exit
            else
                echo -e $TEST > $1.test.js
            fi
        fi
    fi
        
    echo "Listo."
fi