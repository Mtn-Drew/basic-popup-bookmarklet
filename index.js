if(document.getElementById('MilestonesId')){
  document.getElementById('app').firstChild.style.backgroundColor='wheat';
  if (document.getElementById('GroupsId')) {document.getElementById('GroupsId').remove()};
  if (document.getElementById('ProductId')) {document.getElementById('ProductId').remove()};
  if (document.getElementById('DoneId')) {document.getElementById('DoneId').remove()};
  if (document.getElementById('TeamMembersId')) {document.getElementById('TeamMembersId').remove()};
  if (document.getElementById('ToDoId')) {
    document.getElementById('ToDoId').parentNode.parentNode.nextSibling.setAttribute('id','drewMagic');
    document.getElementById('ToDoId').firstChild.parentNode.insertBefore(document.getElementById('ProjectDetailsId').lastChild,null);
    document.getElementById('ToDoId').insertBefore(document.getElementById('MilestonesId').lastChild,null);
    document.getElementById('ToDoId').style.width='23vw';
  }
  if (document.getElementById('LinksId')) {
    document.getElementById('LinksId').style.width='auto';
    document.getElementById('LinksId').parentNode.insertBefore( document.getElementById('drewMagic'),document.getElementById('LinksId'));
  }
  if (document.getElementById('ManufacturingLocationPreferenceId')) {document.getElementById('ManufacturingLocationPreferenceId').remove()};
  if (document.getElementById('ReservationNumberId')) {document.getElementById('ReservationNumberId').remove()};
  if (document.getElementById('ModuleFrameColorPreferenceId')) {document.getElementById('ModuleFrameColorPreferenceId').remove()};
  if (document.getElementById('ProjectDetailsId')) {document.getElementById('ProjectDetailsId').remove()};
  if (document.getElementById('MilestonesId')) {document.getElementById('MilestonesId').remove()};

  if (document.getElementById('drewMagic')) {
    document.getElementById('drewMagic').style.flexBasis='57vw';
    document.getElementById('drewMagic').style.width='57vw';
    document.getElementById('drewMagic').parentNode.style.justifyContent='space-between';
  };
};

if (document.getElementById('accordionSectionBtn')) {
  if(document.getElementById('modal')) {
  document.getElementById('modal').setAttribute('style', 'width:62vw; left:21vw; height:86vh;top:120px;');
document.getElementById('modalBody').setAttribute('style','width:60vw;');
document.getElementById('modal').style.boxShadow='0 0 20px 9px darkslategrey';};
};
let newNote = '';
let clsName = document.getElementById('accordionSectionBtn').nextSibling.querySelector('p').className.split(' ').find(cls=>cls.includes('jss'));
let iNote = Array.from(document.querySelectorAll('.'+clsName)).map((item)=>item.innerHTML).find(note=>note.toLowerCase().includes('intro '));
let fArr = iNote.split('\n');
fArr.forEach((item)=>newNote += ('<p>'+item+'</p>'));
if(document.getElementById('SubmitCaseFormId')){
document.getElementById('SubmitCaseFormId').previousSibling.innerHTML=newNote;
document.getElementById('SubmitCaseFormId').previousSibling.setAttribute('style', 'border: solid black 1px; padding: 10px; grid-area: customColumns; align-self: stretch; border-radius: 3px;');
};
