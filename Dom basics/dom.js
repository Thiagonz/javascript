window.onload = function () {

    //EXAMINE THE DOUCMENT OBJECT//
    var doc = document;

    console.dir(doc);
    console.log(doc.domain);
    console.log(doc.URL);
    //document.title = 123;
    console.log(doc.doctype);
    console.log(doc.head);
    console.log(doc.body);

    var all = doc.all;

    console.log('TODO', all);
    console.log('4 position', all[4]);
    doc.all[4].innerHTML = 'Hello';

    console.log(doc.forms);
    console.log(doc.links);
    console.log(doc.images);

    //GETELEMENTSBYID//
    //var headerTitle = document.getElementById("header-title");
    //var header = document.getElementById("main-header");
    //console.log('headerTitle aqui', headerTitle);
    //headerTitle.textContent = 'Hello';
    //headerTitle.innerHTML = 'Goodbye';
    //console.log(headerTitle.innerText)
    //headerTitle.innerHTML = '<h3>Hello</h3>'; //put h3 inside h1 title
    //headerTitle.style.borderBottom = 'solid 3px #000';
    //header.style.borderBottom = 'solid 3px #000';

    //GETELEMENTSBYCLASSNAME//
    var items = doc.getElementsByClassName('list-group-item');
    //console.log(items);
    //console.log(items[1]);
    //items[1].textContent = 'Hello 2';
    //items[1].style.fontWeight = 'bold';
    //items[1].style.background = 'yellow';

    //Gives error
    //items.style.backgroundColor = '#f4f4f4f';

    //for (var i = 0; i < items.length; i++) {
    //    items[i].style.backgroundColor = '#f4f4f4';
    //}


    //GETELEMENTSBYTAGNAME//
    /*     var li = doc.getElementsByTagName('li');
        console.log(li);
        console.log(li[1]);
        li[1].textContent = 'Hello 2';
        li[1].style.fontWeight = 'bold';
        //items[1].style.background = 'yellow';

        //Gives error
        //items.style.backgroundColor = '#f4f4f4f';

        for (var i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = '#f4f4f4';
        } */


    // QUERYSELECTOR //
    var header = doc.querySelector('#main-header');
    header.style.boderBottom = 'solid 4px #ccc';

    var input = doc.querySelector('input');
    input.value = 'Hello World';

    var submit = doc.querySelector('input[type="submit"]');
    submit.value = "SEND";

    var item = doc.querySelector('.list-group-item');
    item.style.color = 'red';

    var lastItem = document.querySelector('.list-group-item:last-child');
    lastItem.style.color = 'blue';

    var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    secondItem.style.color = 'coral';

    //QUERYSELECTORALL//
    var titles = document.querySelectorAll('.title');
    console.log(titles);
    titles[0].textContent = 'Hello';

    var odd = doc.querySelectorAll('li:nth-child(odd)');
    var even = doc.querySelectorAll('li:nth-child(even)');

    for (var i = 0; i < odd.length; i++) {
        odd[i].style.backgroundColor = '#f4f4f4';
        even[i].style.backgroundColor = '#ccc';
    }

}