#!/bin/bash

# CÓMO USARLO
# Desde una terminal bash ejecutar el siguiente código:

# ./gc.sh param1 param2? param3?

# param1 = nombre del componente
# param2 (opcional) = en caso de existir, NO CREA el TEST del componente. Valores permitidos: st, skipTest.
# param3 (opcional) = en caso de existir, CREA el archivo de ESTILOS del componente. Valores permitidos: s.
# param4 (opcional) = en caso de existir, CREA el la CARPETA del componente. Valores permitidos: f, F.

# EJEMPLOS:
# ./gc.sh UserApp            => creará un COMPONENTE UserApp y su TEST
# ./gc.sh UserApp skipTest   => creará un COMPONENTE UserApp sin el TEST
# ./gc.sh UserApp s          => creará un COMPONENTE UserApp con su COMPONENTE, su archivo de ESTILOS y TEST
# ./gc.sh UserApp t F        => creará una CARPETA UserApp con su COMPONENTE sin el TEST
# ./gc.sh UserApp t s F      => creará una CARPETA UserApp con su COMPONENTE, su archivo de ESTILOS sin el TEST


# El componente se creará en el directorio "src/components". Para cambiar esto modificar la línea 41

####################################################################################################


if ! [[ $1 ]]; then
	echo "Error, debe proveer un nombre para el componente."
    exit
else
    if [[ $3 = ["s"] || $2 = ["s"] ]]; then
    STYLES=$1
        COMPONENT="import React from 'react' \nimport './$STYLES.css' \n \nexport const $1 = () => { \n \treturn ( \n \t \t<> \n \n \t \t</> \n \t)\n}"
    else
        COMPONENT="import React from 'react' \n \nexport const $1 = () => { \n \treturn ( \n \t \t<> \n \n \t \t</> \n \t)\n}"
    fi
    TEST="import React from 'react' \nimport '@testing-library/jest-dom' \n \nimport { $1 } from './$1' \nimport
     { shallow } from 'enzyme' \n \ndescribe('<$1 />', () => { \n \n \ttest('should display correctly', () =>
      { \n \t \tconst wrapper = shallow(<$1 />) \n \t \texpect(wrapper).toMatchSnapshot() \n \t}) \n \n \t})"

# MODIFICAR LA SIGUIENTE LÍNEA CAMBIARÁ EL DESTINO DEL COMPONENTE CREADO
    cd "src/components"

    if [[ $4 = ["fF"] || $3 = ["fF"] || $2 = ["fF"] ]]; then
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

        if [[ $2 = "skipTest" || $2 = "st" ]]; then
            echo ""
        else
            touch $1.test.js
            if ! [ -f "$1.test.js" ]; then
                echo "Error al crear el test."
                exit
            else
                echo -e $TEST > $1.test.js
            fi
        fi
        if [[ $STYLES ]];then
            touch $STYLES.css
        fi
    fi
        
    echo "Listo."
fi