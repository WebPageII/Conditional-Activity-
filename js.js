



document.addEventListener("keydown", function(key) 
{

    if (key.keyCode === 65)
    {
        var lolie1 = prompt('One Num Plees?!?!?!?!');
        var lolie2 = prompt('Two Num Plees?!?!?!?!');

        var pTag = document.createElement("p");
        var text = "the bigg number is: " + Math.max(lolie1, lolie2);
        var textNode = document.createTextNode(text);
        pTag.appendChild(textNode);
        document.body.appendChild(pTag);

    }
    
    if (key.keyCode === 66)
    {
        var D1 = prompt('one Num Plees?!?!?!?!');
        var D2 = prompt('two Num Plees?!?!?!?!');
        var D3 = prompt('Three Num Plees?!?!?!?!');

        var product = D1 * D2 * D3;

        var pTag = document.createElement("p");
        var text = product > 0 ? '\+' : product < 0 ? '-' : '0';
        var textNode = document.createTextNode("The symbole for the product is: "+text);
        pTag.appendChild(textNode);
        document.body.appendChild(pTag);
    }

    if (key.keyCode === 67)
    {
        var S1 = prompt('one Num Plees?!?!?!?!');
        var S2 = prompt('two Num Plees?!?!?!?!');
        var S3 = prompt('Three Num Plees?!?!?!?!');
        var S4 = prompt('Three Num Plees?!?!?!?!');
        var S5 = prompt('Three Num Plees?!?!?!?!');

        const alllllll = [S1, S2, S3, S4, S5];
        
        var pTag = document.createElement("p");
        var text = alllllll.sort();
        var textNode = document.createTextNode("the sorted vershion is: "+text);
        pTag.appendChild(textNode);
        document.body.appendChild(pTag);
    }

    if (key.keyCode === 68)
    {

        var J1 = prompt('one num plees?!?!?!?!');
        var J2 = prompt('two num plees?!?!?!?!');
        var J3 = prompt('Three num plees?!?!?!?!');
        var J4 = prompt('Four num plees?!?!?!?!');
        var J5 = prompt('Five num plees?!?!?!?!');

        var pTag = document.createElement("p");
        var text = "the bigg number is: " + Math.max(J1, J2, J3, J4, J5);
        var textNode = document.createTextNode(text);
        pTag.appendChild(textNode);
        document.body.appendChild(pTag);

    }

});
