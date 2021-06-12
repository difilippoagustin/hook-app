#!/bin/bash

# El componente se creará en el directorio "src/components". Para cambiar esto modificar la línea 26

####################################################################################################

echo "Component name?"
read COMPONENT_NAME
echo "Skip test? (y, n)"
read SKIP_TEST
echo "Create styles file? (y, n)"
read STYLE_FILE


if [[ $STYLE_FILE = ["yY"] ]]; then
    STYLES=$COMPONENT_NAME
    COMPONENT_CODE="import React from 'react' \nimport './$STYLES.css' \n \nexport const $COMPONENT_NAME = () => { \n \treturn ( \n \t \t<> \n \n \t \t</> \n \t)\n}"
elif [[ $STYLE_FILE = ["nN"] ]]; then
    COMPONENT_CODE="import React from 'react' \n \nexport const $COMPONENT_NAME = () => { \n \treturn ( \n \t \t<> \n \n \t \t</> \n \t)\n}"
fi
TEST_CODE="import React from 'react' \nimport '@testing-library/jest-dom' \n \nimport { $COMPONENT_NAME } from './$COMPONENT_NAME' \nimport
    { shallow } from 'enzyme' \n \ndescribe('<$COMPONENT_NAME />', () => { \n \n \ttest('should display correctly', () =>
    { \n \t \tconst wrapper = shallow(<$COMPONENT_NAME />) \n \t \texpect(wrapper).toMatchSnapshot() \n \t}) \n \n \t})"

# MODIFICAR LA SIGUIENTE LÍNEA CAMBIARÁ EL DESTINO DEL COMPONENTE CREADO
cd "src/components"
# CREATE FOLDER
mkdir $COMPONENT_NAME
if ! [ -d "$COMPONENT_NAME" ]; then
    echo "Error al crear la carpeta."
    exit
else
    cd $COMPONENT_NAME
fi
# CREATE COMPONENT
if [ -f "$COMPONENT_NAME.js" ]; then
    echo "El archivo ya existe."
    exit
else
    touch $COMPONENT_NAME.js
fi
if ! [ -f "$COMPONENT_NAME.js" ]; then
    echo "Error al crear el componente."
    exit
else
    echo -e $COMPONENT_CODE > $COMPONENT_NAME.js
# CREATE TEST
    if [[ $SKIP_TEST = ["yY"] ]]; then
        echo ""
    elif [[ $SKIP_TEST = ["nN"] ]]; then
        touch $COMPONENT_NAME.test.js
        if ! [ -f "$COMPONENT_NAME.test.js" ]; then
            echo "Error al crear el test."
            exit
        else
            echo -e $TEST_CODE > $COMPONENT_NAME.test.js
        fi
    else
        echo "else $SKIP_TEST"
    fi
    if [[ $STYLES ]];then
        touch $STYLES.css
    fi
fi
    
echo "Listo."