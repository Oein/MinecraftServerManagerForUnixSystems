#!/bin/bash

end=0
sn="DDD"
for (( ;end==0; ))
do 
    read -p "Enter Server Name : " sn
    endt=0

    if [ "$sn" == "" ]
    then
        echo "Invalid Server Name"
        endt=1
    fi

    for (( ;endt==0; )) 
    do
        read -e -p "Is server name \"$sn\" OK? [ y / N ] " snok
        if [ "$snok" == "y" ]
        then
            endt=1
            end=1
        elif [ "$snok" == "Y" ]
        then
            endt=1
            end=1
        elif [ "$snok" == "n" ]
        then
            endt=1
        elif [ "$snok" == "N" ]
        then
            endt=1
        else
            echo "Invalid Data $snok"
        fi
    done
done

end=0
mkdir "$sn"

endtt=0
for(( ;endtt==0; ))
do
    read -p "Is your server flat? [y / N] : " snx
    if [ "$snx" == "y" ]
    then
        endtt=1
        snx="y"
    elif [ "$snx" == "Y" ]
    then
        endtt=1
        snx="y"
    else
        echo "Invalid Data $snx"
    fi
done

if [ "$snx" == "y" ]
then
    cp -r world "$sn/"
fi

cp ds.sh "$sn/"
cd "$sn"
mkdir "plugins"
cd plugins
cp ./../../new.jar ./
cp ./../../old.jar ./
cd ..
cp ./../eula.txt ./