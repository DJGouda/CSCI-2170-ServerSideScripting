exports.generateResponse = (fileResource, strToChange, value) => {
    return fileResource.replace(strToChange, value);
};

exports.sayHello = () => {
    console.log("hello!");
};

// module.exports = generateResponse;
// module.exports = sayHello;

