;(function main (tableObj) {

  let baseWordView = document.querySelector('.base-word');
  let tableFragment = document.createDocumentFragment();
  tableObj.base.forEach(t => {
    let tableRow = document.createElement('div');
    tableRow.className = 'table-row';
    t.forEach((sub, subIndex) => {
      let tableCell = document.createElement('div');
      tableCell.className = 'table-cell';
      if (subIndex === 0) {
        let subSpan = document.createElement('span');
        subSpan.textContent = sub.hiragana;
        tableCell.appendChild(subSpan);
      } else {
        let subCellDiv = document.createElement('div');
        subCellDiv.className = 'cell-words';
        let hiraganaDiv = document.createElement('div');
        hiraganaDiv.className = "hiragana-div";
        let katakanaDiv = document.createElement('div');
        hiraganaDiv.textContent = sub.hiragana;
        katakanaDiv.textContent = sub.katakana;
        subCellDiv.appendChild(hiraganaDiv);
        subCellDiv.appendChild(katakanaDiv);
        let romeDiv = document.createElement('div');
        romeDiv.textContent = sub.rome;
        tableCell.appendChild(subCellDiv);
        tableCell.appendChild(romeDiv);
      }
      tableRow.appendChild(tableCell);
    });
    tableFragment.appendChild(tableRow);
  });
  baseWordView.appendChild(tableFragment);



  let dullnessView = document.querySelector('.dullness-word');
  let tableFragment2 = document.createDocumentFragment();
  let list = tableObj.dullnessList.reduce((prv, cur, index) => {
    if (index === 0) {
      prv.push([]);
    }
    prv[prv.length - 1].push(cur);
    if (cur.id % 5 === 0) {
      prv[prv.length - 1].unshift(prv[prv.length - 1][0]);
      prv.push([])
    }
    return prv
  }, []);
  
  list.forEach(t => {
    let tableRow = document.createElement('div');
    tableRow.className = 'table-row';
    t.forEach((sub, subIndex) => {
      let tableCell = document.createElement('div');
      tableCell.className = 'table-cell';
      if (subIndex === 0) {
        let subSpan = document.createElement('span');
        subSpan.textContent = sub.hiragana;
        tableCell.appendChild(subSpan);
      } else {
        let subCellDiv = document.createElement('div');
        subCellDiv.className = 'cell-words';
        let hiraganaDiv = document.createElement('div');
        hiraganaDiv.className = "hiragana-div";
        let katakanaDiv = document.createElement('div');
        hiraganaDiv.textContent = sub.hiragana;
        katakanaDiv.textContent = sub.katakana;
        subCellDiv.appendChild(hiraganaDiv);
        subCellDiv.appendChild(katakanaDiv);
        let romeDiv = document.createElement('div');
        romeDiv.textContent = sub.rome;
        tableCell.appendChild(subCellDiv);
        tableCell.appendChild(romeDiv);
      }
      tableRow.appendChild(tableCell);
    });
    tableFragment2.appendChild(tableRow);
  });
  dullnessView.appendChild(tableFragment2);
})(baseObj);

let list = [...testList];

let isShowHiragana = true
let isShowKatakana = true;
let isShowRomaji = true;

function handleTestDialog (e) {
  let dialog = document.querySelector('.dialog-view');
  dialog.setAttribute('style', 'display: flex;')
  dialog.className = 'dialog-view show-dialog';
  handleNextCardItem()
}

function handleDialogClose () {
  let dialog = document.querySelector('.dialog-view');
  dialog.setAttribute('style', 'display: none;')
}

function handlePrveCardItem () {}

function handleNextCardItem () {
  let dialog = document.querySelector('.dialog-view');
  let hiraganaDom = dialog.querySelector('.hiragana');
  let katakanaDom = dialog.querySelector('.katakana');
  let romajiDom = dialog.querySelector('.romaji');
  
  hiraganaDom.setAttribute('style', `display: ${isShowHiragana ? 'block' : 'none'};`)
  katakanaDom.setAttribute('style', `display: ${isShowKatakana ? 'block' : 'none'};`)
  romajiDom.setAttribute('style', `display: ${isShowRomaji ? 'block' : 'none'};`)
  // let list = baseObj.base.flat().filter(t => !!t.hiragana);
  
  let rad = Math.floor(Math.random() * list.length);
  let curData = list.splice(rad, 1)[0];

  hiraganaDom.innerHTML = curData.hiragana;
  katakanaDom.innerHTML = curData.katakana;
  romajiDom.innerHTML = curData.rome;
}

function handleToggleHiragana (e) {
  isShowHiragana = !isShowHiragana;
  e.srcElement.innerHTML = `${isShowHiragana ? '隐藏' : '显示'}平假名`;
  let hiraganaDom = document.querySelector('.hiragana');
  hiraganaDom.setAttribute('style', `display: ${isShowHiragana ? 'block' : 'none'};`)
}

function handleToggleKatakana (e) {
  isShowKatakana = !isShowKatakana;
  e.srcElement.innerHTML = `${isShowKatakana ? '隐藏' : '显示'}片假名`
  let katakanaDom = document.querySelector('.katakana');
  katakanaDom.setAttribute('style', `display: ${isShowKatakana ? 'block' : 'none'};`)
}

function handleToggleRomaji (e) {
  isShowRomaji = !isShowRomaji;
  e.srcElement.innerHTML = `${isShowRomaji ? '隐藏' : '显示'}罗马音`
  let romajiDom = document.querySelector('.romaji');
  romajiDom.setAttribute('style', `display: ${isShowRomaji ? 'block' : 'none'};`)
}


document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 13:
      handleNextCardItem()
      break;
    case 27:
      handleDialogClose()
      break;
  }
})
