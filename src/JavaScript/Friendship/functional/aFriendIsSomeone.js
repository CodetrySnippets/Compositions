function aFriendIsSomeone(){
    const SecondPersonSingularAction = ["turn to", "can trust", "treasure always"];
    const ImpersonalAction = ["is there for you", "lifts you up", "supports you", "makes you smile", "brightens your day"];
    const printHeader = () => {
        console.log("A friend is someone");
    }
    SecondPersonSingularAction.forEach(action => {
        printHeader();
        console.log(`you ${action}`);
    });
    ImpersonalAction.forEach(action => {
        printHeader();
        console.log(`who ${action}`);
    });
}

aFriendIsSomeone();
