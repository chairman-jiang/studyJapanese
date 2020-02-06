;(function main (tableObj) {

  var baseWordView = document.querySelector('.base-word');
  var tableFragment = document.createDocumentFragment();
  tableObj.base.forEach(t => {
    var tableRow = document.createElement('div');
    tableRow.className = 'table-row';
    t.forEach((sub, subIndex) => {
      var tableCell = document.createElement('div');
      tableCell.className = 'table-cell';
      if (subIndex === 0) {
        var subSpan = document.createElement('span');
        subSpan.textContent = sub.hiragana;
        tableCell.appendChild(subSpan);
      } else {
        var subCellDiv = document.createElement('div');
        subCellDiv.className = 'cell-words';
        var hiraganaDiv = document.createElement('div');
        hiraganaDiv.className = "hiragana-div";
        var katakanaDiv = document.createElement('div');
        hiraganaDiv.textContent = sub.hiragana;
        katakanaDiv.textContent = sub.katakana;
        subCellDiv.appendChild(hiraganaDiv);
        subCellDiv.appendChild(katakanaDiv);
        var romeDiv = document.createElement('div');
        romeDiv.textContent = sub.rome;
        tableCell.appendChild(subCellDiv);
        tableCell.appendChild(romeDiv);
      }
      tableRow.appendChild(tableCell);
    });
    tableFragment.appendChild(tableRow);
  });
  baseWordView.appendChild(tableFragment);
})(baseObj);