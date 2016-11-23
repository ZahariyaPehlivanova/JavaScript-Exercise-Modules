(function () {
    let Person = require('./Person.js');
    let Post = require('./Post.js');

    let aleks = new Person('Aleks',30);
    let post = new Post('Neshto si','Text wow','Aleks');

    aleks.addToSelector('#test');
    post.addToSelector('.posts.Aleks');
})();