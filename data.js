var base = [
  [
    { id: 1, hiragana: 'あ', katakana: '', rome: '' },
    { id: 2, hiragana: 'あ', katakana: 'ア', rome: 'a' },
    { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
    { id: 4, hiragana: 'う', katakana: 'ウ', rome: 'u' },
    { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
    { id: 6, hiragana: 'お', katakana: 'オ', rome: 'o' }
  ],
  [
    { id: 1, hiragana: 'か', katakana: '', rome: '' },
    { id: 2, hiragana: 'か', katakana: 'カ', rome: 'ka' },
    { id: 3, hiragana: 'き', katakana: 'キ', rome: 'ki' },
    { id: 4, hiragana: 'く', katakana: 'ク', rome: 'ku' },
    { id: 5, hiragana: 'け', katakana: 'ケ', rome: 'ke' },
    { id: 6, hiragana: 'こ', katakana: 'コ', rome: 'ko' }
  ],
  [
    { id: 1, hiragana: 'さ', katakana: '', rome: '' },
    { id: 2, hiragana: 'さ', katakana: 'サ', rome: 'sa' },
    { id: 3, hiragana: 'し', katakana: 'シ', rome: 'shi' },
    { id: 4, hiragana: 'す', katakana: 'ス', rome: 'su' },
    { id: 5, hiragana: 'せ', katakana: 'セ', rome: 'se' },
    { id: 6, hiragana: 'そ', katakana: 'ソ', rome: 'so' }
  ],
  [
    { id: 1, hiragana: 'た', katakana: '', rome: '' },
    { id: 2, hiragana: 'た', katakana: 'タ', rome: 'ta' },
    { id: 3, hiragana: 'ち', katakana: 'チ', rome: 'chi' },
    { id: 4, hiragana: 'つ', katakana: 'ツ', rome: 'tsu' },
    { id: 5, hiragana: 'て', katakana: 'テ', rome: 'te' },
    { id: 6, hiragana: 'と', katakana: 'ト', rome: 'to' }
  ],
  [
    { id: 1, hiragana: 'な', katakana: '', rome: '' },
    { id: 2, hiragana: 'な', katakana: 'ナ', rome: 'na' },
    { id: 3, hiragana: 'に', katakana: 'ニ', rome: 'ni' },
    { id: 4, hiragana: 'ぬ', katakana: 'ヌ', rome: 'nu' },
    { id: 5, hiragana: 'ね', katakana: 'ネ', rome: 'ne' },
    { id: 6, hiragana: 'の', katakana: 'ノ', rome: 'no' }
  ],
  [
    { id: 1, hiragana: 'は', katakana: '', rome: '' },
    { id: 2, hiragana: 'は', katakana: 'ハ', rome: 'ha' },
    { id: 3, hiragana: 'ひ', katakana: 'イ', rome: 'hi' },
    { id: 4, hiragana: 'ふ', katakana: 'フ', rome: 'fu' },
    { id: 5, hiragana: 'へ', katakana: 'ヘ', rome: 'he' },
    { id: 6, hiragana: 'ほ', katakana: 'ホ', rome: 'ho' }
  ],
  [
    { id: 1, hiragana: 'ま', katakana: '', rome: '' },
    { id: 2, hiragana: 'ま', katakana: 'マ', rome: 'ma' },
    { id: 3, hiragana: 'み', katakana: 'ミ', rome: 'mi' },
    { id: 4, hiragana: 'む', katakana: 'ム', rome: 'mu' },
    { id: 5, hiragana: 'め', katakana: 'メ', rome: 'me' },
    { id: 6, hiragana: 'も', katakana: 'モ', rome: 'mo' }
  ],
  [
    { id: 1, hiragana: 'や', katakana: '', rome: '' },
    { id: 2, hiragana: 'や', katakana: 'ヤ', rome: 'ya' },
    { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
    { id: 4, hiragana: 'ゆ', katakana: 'ユ', rome: 'yu' },
    { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
    { id: 6, hiragana: 'よ', katakana: 'ヨ', rome: 'yo' }
  ],
  [
    { id: 1, hiragana: 'ら', katakana: '', rome: '' },
    { id: 2, hiragana: 'ら', katakana: 'ラ', rome: 'ra' },
    { id: 3, hiragana: 'り', katakana: 'リ', rome: 'ri' },
    { id: 4, hiragana: 'る', katakana: 'ル', rome: 'ru' },
    { id: 5, hiragana: 'れ', katakana: 'レ', rome: 're' },
    { id: 6, hiragana: 'ろ', katakana: 'ロ', rome: 'ro' }
  ],
  [
    { id: 1, hiragana: 'わ', katakana: '', rome: '' },
    { id: 2, hiragana: 'わ', katakana: 'ワ', rome: 'wa' },
    { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
    { id: 4, hiragana: 'う', katakana: 'ウ', rome: 'u' },
    { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
    { id: 6, hiragana: 'を', katakana: 'ヲ', rome: 'o' }
  ],
  [
    { id: 1, hiragana: '', katakana: '', rome: '' },
    { id: 2, hiragana: 'ん', katakana: 'ン', rome: 'n' },
    { id: 3, hiragana: '', katakana: '', rome: '' },
    { id: 4, hiragana: '', katakana: '', rome: '' },
    { id: 5, hiragana: '', katakana: '', rome: '' },
    { id: 6, hiragana: '', katakana: '', rome: '' }
  ]
];

var baseObj = {
  base: base
};

let testList = [
  { id: 2, hiragana: 'あ', katakana: 'ア', rome: 'a' },
  { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
  { id: 4, hiragana: 'う', katakana: 'ウ', rome: 'u' },
  { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
  { id: 6, hiragana: 'お', katakana: 'オ', rome: 'o' },

  { id: 2, hiragana: 'か', katakana: 'カ', rome: 'ka' },
  { id: 3, hiragana: 'き', katakana: 'キ', rome: 'ki' },
  { id: 4, hiragana: 'く', katakana: 'ク', rome: 'ku' },
  { id: 5, hiragana: 'け', katakana: 'ケ', rome: 'ke' },
  { id: 6, hiragana: 'こ', katakana: 'コ', rome: 'ko' },

  { id: 2, hiragana: 'さ', katakana: 'サ', rome: 'sa' },
  { id: 3, hiragana: 'し', katakana: 'シ', rome: 'shi' },
  { id: 4, hiragana: 'す', katakana: 'ス', rome: 'su' },
  { id: 5, hiragana: 'せ', katakana: 'セ', rome: 'se' },
  { id: 6, hiragana: 'そ', katakana: 'ソ', rome: 'so' },

  { id: 2, hiragana: 'た', katakana: 'タ', rome: 'ta' },
  { id: 3, hiragana: 'ち', katakana: 'チ', rome: 'chi' },
  { id: 4, hiragana: 'つ', katakana: 'ツ', rome: 'tsu' },
  { id: 5, hiragana: 'て', katakana: 'テ', rome: 'te' },
  { id: 6, hiragana: 'と', katakana: 'ト', rome: 'to' },

  { id: 2, hiragana: 'な', katakana: 'ナ', rome: 'na' },
  { id: 3, hiragana: 'に', katakana: 'ニ', rome: 'ni' },
  { id: 4, hiragana: 'ぬ', katakana: 'ヌ', rome: 'nu' },
  { id: 5, hiragana: 'ね', katakana: 'ネ', rome: 'ne' },
  { id: 6, hiragana: 'の', katakana: 'ノ', rome: 'no' },

  { id: 2, hiragana: 'は', katakana: 'ハ', rome: 'ha' },
  { id: 3, hiragana: 'ひ', katakana: 'イ', rome: 'hi' },
  { id: 4, hiragana: 'ふ', katakana: 'フ', rome: 'fu' },
  { id: 5, hiragana: 'へ', katakana: 'ヘ', rome: 'he' },
  { id: 6, hiragana: 'ほ', katakana: 'ホ', rome: 'ho' },

  { id: 2, hiragana: 'ま', katakana: 'マ', rome: 'ma' },
  { id: 3, hiragana: 'み', katakana: 'ミ', rome: 'mi' },
  { id: 4, hiragana: 'む', katakana: 'ム', rome: 'mu' },
  { id: 5, hiragana: 'め', katakana: 'メ', rome: 'me' },
  { id: 6, hiragana: 'も', katakana: 'モ', rome: 'mo' },

  { id: 2, hiragana: 'や', katakana: 'ヤ', rome: 'ya' },
  { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
  { id: 4, hiragana: 'ゆ', katakana: 'ユ', rome: 'yu' },
  { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
  { id: 6, hiragana: 'よ', katakana: 'ヨ', rome: 'yo' },

  { id: 2, hiragana: 'ら', katakana: 'ラ', rome: 'ra' },
  { id: 3, hiragana: 'り', katakana: 'リ', rome: 'ri' },
  { id: 4, hiragana: 'る', katakana: 'ル', rome: 'ru' },
  { id: 5, hiragana: 'れ', katakana: 'レ', rome: 're' },
  { id: 6, hiragana: 'ろ', katakana: 'ロ', rome: 'ro' },

  { id: 2, hiragana: 'わ', katakana: 'ワ', rome: 'wa' },
  { id: 3, hiragana: 'い', katakana: 'イ', rome: 'i' },
  { id: 4, hiragana: 'う', katakana: 'ウ', rome: 'u' },
  { id: 5, hiragana: 'え', katakana: 'エ', rome: 'e' },
  { id: 6, hiragana: 'を', katakana: 'ヲ', rome: 'o' },

  { id: 2, hiragana: 'ん', katakana: 'ン', rome: 'n' },

];
