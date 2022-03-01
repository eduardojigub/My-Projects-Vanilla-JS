let data = [ 
    {
        name: 'Guto',
        age: '10',
    },
    {
        name: 'Roberta',
        age: '30',
    },
    {
        name: 'Eduardo',
        age: '32',
    },
    {
        name: 'Bruno',
        age: '18',
    },
    {
        name: 'Antonio',
        age: '07',
    },
    {
        name: 'Luigi',
        age: '10',
    },
]

const info = document.querySelector('#info')

let details = data.map((element) => {
    return '<div>' + element.name + ' ' + 'is ' + element.age + ' years old' +  '</div>'
});

info.innerHTML = details.join('\n');