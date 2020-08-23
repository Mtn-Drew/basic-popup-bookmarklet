const introMagic = document.createElement('div');
const dMHeader = document.createElement('div');

const minBtn = document.createElement('button');
const closeBtn = document.createElement('button');
const btnDiv = document.createElement('div');

introMagic.setAttribute('id', 'intro-magic');
dMHeader.setAttribute('id', 'DMHeader');
minBtn.setAttribute('id', 'minBtn');
closeBtn.setAttribute('id', 'closeBtn');

introMagic.style.position = 'absolute';
introMagic.style.zIndex = '10000';
introMagic.style.backgroundColor = '#f1f1f1';
introMagic.style.border = 'solid black 1px';
introMagic.style.textAlign = 'center';
introMagic.style.resize = 'both';
introMagic.style.overflow = 'hidden';
introMagic.style.width = '450px';
introMagic.style.height = '840px';
introMagic.style.boxShadow = 'firebrick 0px 0px 6px 0px';

dMHeader.style.padding = '12px';
dMHeader.style.cursor = 'move';
dMHeader.style.backgroundColor = 'darkred';
dMHeader.style.color = '#fff';

dMHeader.innerText = 'INTRO BOOKMARKLET';
minBtn.innerText = '-';
closeBtn.innerText = 'X';

btnDiv.style.float = 'right';
closeBtn.style.width = '24px';
closeBtn.style.height = '22px';
closeBtn.style.right = '0';
minBtn.style.width = '24px';
minBtn.style.height = '22px';

introMagic.appendChild(dMHeader);
dMHeader.appendChild(btnDiv);
btnDiv.appendChild(minBtn);
btnDiv.appendChild(closeBtn);

document.body.insertBefore(introMagic, document.body.firstChild);

dragElement(introMagic);

function dragElement(el) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (dMHeader) {
    dMHeader.onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    el.style.top = el.offsetTop - pos2 + 'px';
    el.style.left = el.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

closeBtn.addEventListener('click', () => {
  introMagic.remove();
});
document.getElementById('minBtn').addEventListener('click', () => {
  if (document.getElementById('minBtn').innerText === '-') {
    document.getElementById('intro-magic').style.height = '40px';
    document.getElementById('minBtn').innerText = '+';
  } else {
    document.getElementById('intro-magic').style.height = '840px';
    document.getElementById('minBtn').innerText = '-';
  }
});