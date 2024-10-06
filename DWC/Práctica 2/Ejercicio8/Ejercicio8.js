class FollowersManager {
    static manageFollowers() {
        const followers = new Set();

        followers.add("Alice");
        followers.add("Bob");
        followers.add("Charlie");
        followers.add("David");
        followers.add("Eva");

        followers.delete("Alice");
        followers.delete("Bob");

        followers.add("Frank");
        followers.add("Grace");
        followers.add("Hannah");
        followers.add("Ivy");
        followers.add("Jack");
        followers.add("Kate");
        followers.add("Leo");

        console.log(`Número total de seguidores: ${followers.size}`);

        console.log("Lista de seguidores:");
        followers.forEach(follower => {
            console.log(follower);
        });
    }
}

FollowersManager.manageFollowers();
//Tengo un html para comprobar que funciona porque no me está funcionando el node en casa
