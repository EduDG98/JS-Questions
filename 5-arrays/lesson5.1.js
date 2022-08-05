const users = {
    user1: {
        id: 01,
        nick: 'LizzardTree',
        level: undefined
    },
    user2: {
        id: 02,
        nick: 'FreshBear',
        level: 12
    }
}
const { user1, user2 } = users;
const { id: user1Id = 'No ID', nick: user1Nick, level: user1Level = 0 } = user1;
const { id: user2Id = 'No ID', nick: user2Nick, level: user2Level = 0 } = user2;

console.log(`USER: ${user1Nick}`, ` - id: ${user1Id}`, ` - level: ${user1Level}`);
console.log(`USER: ${user2Nick}`, ` - id: ${user2Id}`, ` - level: ${user2Level}`);



