let versions = [
    "1.17.1",
    "1.17",
    "1.16.5",
    "1.16.4",
    "1.16.3",
    "1.16.2",
    "1.16.1",
    "1.15.2",
    "1.15.1",
    "1.15",
    "1.14.4",
    "1.14.3",
    "1.14.2",
    "1.14.1",
    "1.14",
    "1.13.2",
    "1.13.1",
    "1.13",
    "1.12.2",
    "1.12.1",
    "1.12",
    "1.11.2",
    "1.11.1",
    "1.11",
    "1.10.2",
    "1.10",
    "1.9.4",
    "1.9.2",
    "1.9",
    "1.8.8",
    "1.8.7",
    "1.8.6",
    "1.8.5",
    "1.8.4",
    "1.8.3",
    "1.8",
    "1.7.10",
    "1.7.9",
    "1.7.8",
    "1.7.5",
    "1.7.2",
    "1.6.4",
    "1.6.2",
    "1.5.2",
    "1.5.1",
    "1.4.7",
    "1.4.6"
];
let some_otherVersions = {
    "1.7.10" : "https://cdn.getbukkit.org/spigot/spigot-1.7.10-SNAPSHOT-b1657.jar",
    "1.7.9" : "https://cdn.getbukkit.org/spigot/spigot-1.7.9-R0.2-SNAPSHOT.jar",
    "1.7.8" : "https://cdn.getbukkit.org/spigot/spigot-1.7.8-R0.1-SNAPSHOT.jar",
    "1.7.5" : "https://cdn.getbukkit.org/spigot/spigot-1.7.5-R0.1-SNAPSHOT-1387.jar",
    "1.7.2" : "https://cdn.getbukkit.org/spigot/spigot-1.7.2-R0.4-SNAPSHOT-1339.jar",
    "1.6.4" : "https://cdn.getbukkit.org/spigot/spigot-1.6.4-R2.1-SNAPSHOT.jar",
    "1.6.2" : "https://cdn.getbukkit.org/spigot/spigot-1.6.2-R1.1-SNAPSHOT.jar",
    "1.5.2" : "https://cdn.getbukkit.org/spigot/spigot-1.5.2-R1.1-SNAPSHOT.jar",
    "1.5.1" : "https://cdn.getbukkit.org/spigot/spigot-1.5.1-R0.1-SNAPSHOT.jar",
    "1.4.7" : "https://cdn.getbukkit.org/spigot/spigot-1.4.7-R1.1-SNAPSHOT.jar",
    "1.4.6" : "https://cdn.getbukkit.org/spigot/spigot-1.4.6-R0.4-SNAPSHOT.jar"
}
function get_server_url(version) {
    if(version == "LV"){
        return "https://download.getbukkit.org/spigot/spigot-" + versions[0] + ".jar";
    }
    let valid = false;
    versions.forEach(ver => {
        if(ver == version){
            valid = true;
        }
    });
    if(valid == false){
        return "No";
    }
    else{
        // 
        if(Number(version.toString().split(".")[1]) >= 11){
            return "https://cdn.getbukkit.org/spigot/spigot-" + version+ ".jar";
        }else if(Number(version.toString().split(".")[1]) >= 8){
            return "https://cdn.getbukkit.org/spigot/spigot-" + version + "-R0.1-SNAPSHOT-latest.jar";
        }else{
            return some_otherVersions[version];
        }
    }
}

var myArgs = process.argv.slice(2);
console.log(get_server_url(myArgs[0]));
