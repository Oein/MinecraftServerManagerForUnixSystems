version=$1
d=$(node "./../minecraftVersions.js" "$version")
dx=$(node "./../minecraftVersionsOnlyJarFile.js" "$version")
wget "$d"
java -Xmx2G -jar "$dx"
java16 -Xmx2G -jar "$dx"
rm "$dx"
