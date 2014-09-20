chrome.browserAction.onClicked.addListener(function(tab) {
//Add footnote section
    footnotes = document.createElement('DIV');
    footnotesText = document.createTextNode('Foot Notes');
    footnotes.id = 'footnotes';
    footnotes.appendChild(footnotesText);
    document.body.appendChild(footnotes);

    //Find the anchors
    $('a').each(function(){
      innerText = $(this).text();
      innerUrl = $(this).attr('href');
      $(this).contents().unwrap();
      $('#footnotes').append('<a href="'+innerUrl+'">'+innerText+'</a><br>');
    });

    var footnoteContainer = document.getElementById('footnotes');

    footnoteContainer.style.position='fixed';
    footnoteContainer.style.bottom='0';
    footnoteContainer.style.left='0';
    footnoteContainer.style.background='#fff';
    footnoteContainer.style.width='100%';
    footnoteContainer.style.height='150px';
    footnoteContainer.style.fontFamily="adobe-garamond-pro,Times,Times New Roman,Georgia,serif";
    footnoteContainer.style.color='#22292E';
    footnoteContainer.style.zIndex='1';
    footnoteContainer.style.overflowY="scroll";

    )};