const adventure1 = ['1 You fight an ogre.', '2 You fight an ogre.', '3 You fight an ogre.'];
const adventure2 = ['1 You fight an ogre.', '2 You fight an ogre.', '3 You fight an ogre.'];
const adventure3 = ['1 You fight an ogre.', '2 You fight an ogre.', '3 You fight an ogre.'];

function adventure() {
    console.log(adventure1[Math.floor(Math.random() * 3)]);
    console.log(adventure1[Math.floor(Math.random() * 3)]);
    console.log(adventure1[Math.floor(Math.random() * 3)]);
};

adventure();