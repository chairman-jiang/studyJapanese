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
    { id: 3, hiragana: 'し', katakana: 'シ', rome: 'xi' },
    { id: 4, hiragana: 'す', katakana: 'ス', rome: 'si/u' },
    { id: 5, hiragana: 'せ', katakana: 'セ', rome: 'se' },
    { id: 6, hiragana: 'そ', katakana: 'ソ', rome: 'so' }
  ],
  [
    { id: 1, hiragana: 'た', katakana: '', rome: '' },
    { id: 2, hiragana: 'た', katakana: 'タ', rome: 'ta' },
    { id: 3, hiragana: 'ち', katakana: 'チ', rome: 'qi' },
    { id: 4, hiragana: 'つ', katakana: 'ツ', rome: 'ci' },
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
    { id: 3, hiragana: 'ひ', katakana: 'ヒ', rome: 'hi' },
    { id: 4, hiragana: 'ふ', katakana: 'フ', rome: 'hu' },
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
  { id: 3, hiragana: 'し', katakana: 'シ', rome: 'xi' },
  { id: 4, hiragana: 'す', katakana: 'ス', rome: 'si/u' },
  { id: 5, hiragana: 'せ', katakana: 'セ', rome: 'se' },
  { id: 6, hiragana: 'そ', katakana: 'ソ', rome: 'so' },

  { id: 2, hiragana: 'た', katakana: 'タ', rome: 'ta' },
  { id: 3, hiragana: 'ち', katakana: 'チ', rome: 'qi' },
  { id: 4, hiragana: 'つ', katakana: 'ツ', rome: 'ci' },
  { id: 5, hiragana: 'て', katakana: 'テ', rome: 'te' },
  { id: 6, hiragana: 'と', katakana: 'ト', rome: 'to' },

  { id: 2, hiragana: 'な', katakana: 'ナ', rome: 'na' },
  { id: 3, hiragana: 'に', katakana: 'ニ', rome: 'ni' },
  { id: 4, hiragana: 'ぬ', katakana: 'ヌ', rome: 'nu' },
  { id: 5, hiragana: 'ね', katakana: 'ネ', rome: 'ne' },
  { id: 6, hiragana: 'の', katakana: 'ノ', rome: 'no' },

  { id: 2, hiragana: 'は', katakana: 'ハ', rome: 'ha' },
  { id: 3, hiragana: 'ひ', katakana: 'ヒ', rome: 'hi' },
  { id: 4, hiragana: 'ふ', katakana: 'フ', rome: 'hu' },
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

let dullnessList = [
  { id: 1, hiragana: 'が', katakana: 'ガ', rome: 'ga' },
  { id: 2, hiragana: 'ぎ', katakana: 'ギ', rome: 'gi' },
  { id: 3, hiragana: 'ぐ', katakana: 'グ', rome: 'gu' },
  { id: 4, hiragana: 'げ', katakana: 'ゲ', rome: 'ge' },
  { id: 5, hiragana: 'ご', katakana: 'ゴ', rome: 'go' },

  { id: 1, hiragana: 'ざ', katakana: 'ザ', rome: 'za' },
  { id: 2, hiragana: 'じ', katakana: 'ジ', rome: 'ji' },
  { id: 3, hiragana: 'ず', katakana: 'ズ', rome: 'zi/u' },
  { id: 4, hiragana: 'ぜ', katakana: 'ゼ', rome: 'ze' },
  { id: 5, hiragana: 'ぞ', katakana: 'ゾ', rome: 'zo' },

  { id: 1, hiragana: 'だ', katakana: 'ダ', rome: 'da' },
  { id: 2, hiragana: 'ぢ', katakana: 'ヂ', rome: 'ji' },
  { id: 3, hiragana: 'づ', katakana: 'ヅ', rome: 'zi/u' },
  { id: 4, hiragana: 'で', katakana: 'デ', rome: 'de' },
  { id: 5, hiragana: 'ど', katakana: 'ド', rome: 'do' },

  { id: 1, hiragana: 'ば', katakana: 'バ', rome: 'ba' },
  { id: 2, hiragana: 'び', katakana: 'ビ', rome: 'bi' },
  { id: 3, hiragana: 'ぶ', katakana: 'ブ', rome: 'bu' },
  { id: 4, hiragana: 'べ', katakana: 'ベ', rome: 'be' },
  { id: 5, hiragana: 'ぼ', katakana: 'ボ', rome: 'bo' },

  { id: 1, hiragana: 'ぱ', katakana: 'パ', rome: 'pa' },
  { id: 2, hiragana: 'ぴ', katakana: 'ピ', rome: 'pi' },
  { id: 3, hiragana: 'ぷ', katakana: 'プ', rome: 'pu' },
  { id: 4, hiragana: 'ぺ', katakana: 'ペ', rome: 'pe' },
  { id: 5, hiragana: 'ぽ', katakana: 'ポ', rome: 'po' },
];


var baseObj = {
  base,
  dullnessList
};
