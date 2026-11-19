# Chinese Blessing Seals · 中華福文圖鑑

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](LICENSE)

An open bilingual dataset of **124 traditional Chinese blessing seals** (福文 / fúwén) — each with its four-character auspicious phrase, English translation, meaning, and a short story. Built for designers, developers, researchers, and anyone fascinated by Chinese calligraphy, seal carving, and Eastern blessing traditions.

一個開放的**中華福文雙語數據集**：124 枚傳統祝福印章，每枚含四字吉語、英譯、寓意與短故事。適合設計師、開發者、研究者，以及所有對中國書法、篆刻與東方祝福文化感興趣的人。

> **These are cultural artifacts, not fortune-telling.** Each seal is a *wish* — something kept as a reminder, not a prediction. 每枚福文是一份祝願，不是算命，是提醒，不是預言。

---

## Why this exists / 為什麼開源

Chinese blessing seals carry a thousand years of tradition — but almost none of it is available as clean, structured, bilingual data. This repo fills that gap: a machine-readable archive of 124 seals, free to study and use in non-commercial work.

中國福文承載千年傳統，卻幾乎沒有乾淨、結構化、雙語的數據。這個倉庫補上這個空白：124 枚福文的機器可讀存檔，可自由學習與非商業使用。

If you want the hand-drawn, limited-edition physical & digital versions, they're from **[FORÊ](https://forerui.com)** — the studio that made this dataset public. 若你想要手繪限量版實體與數字卡，來自 **[FORÊ](https://forerui.com)**——也就是公開這份數據的工作室。

---

## What's inside / 內容

| File | Description |
| --- | --- |
| `data/blessings.json` | 124 seals: code, Chinese phrase, English translation, category, edition, color family, bilingual story |
| `examples/` | Minimal usage examples (JSON lookup, random draw, category filter) |
| `LICENSE` | CC BY-NC 4.0 — free for non-commercial use with attribution |

### Data schema / 數據結構

```json
{
  "code": "Y01",
  "chinese": "福星高照",
  "english": "Blessings of the Auspicious Star",
  "category": "life",
  "edition": "blind",
  "colorFamily": "yellow",
  "story": {
    "zh": "你有没有过那种早晨……",
    "en": "You bet, eighty thousand people a year wake up before the alarm..."
  }
}
```

- **category**: `life` (平安/健康/家宅) · `career` (事業/功名) · `wealth` (財富) · `love` (感情/姻緣)
- **edition**: `blind` (隨機盲盒款) · `fixed` (固定款)
- **colorFamily**: `yellow` (鎏金) · `red` (朱砂) · `purple` (紫氣) · `black` (玄墨)

---

## Quick start / 快速使用

```js
const blessings = require('./data/blessings.json');

// Random draw / 隨機抽一枚
const pick = blessings[Math.floor(Math.random() * blessings.length)];
console.log(pick.chinese, '—', pick.english);

// Filter by category / 依場景篩選
const loveSeals = blessings.filter(b => b.category === 'love');
```

See `examples/` for more. / 更多範例見 `examples/`。

---

## The 124 seals / 124 枚福文

<details>
<summary>Show full index / 展開完整索引</summary>

| # | 中文 | English | Category |
| --- | --- | --- | --- |
| Y01 | 福星高照 | Blessings of the Auspicious Star | life |
| R04 | 並蒂蓮開 | Twin Lotus Blooms | love |
| P05 | 武曲臨照 | Wu Qu Shines Upon | career |
| … | … | … | … |

Full list with stories: [`data/blessings.json`](data/blessings.json)

</details>

---

## License & attribution / 授權與署名

**CC BY-NC 4.0** — free for non-commercial use, with attribution.

You may use this data in non-commercial projects if you credit the source and link back:

```
Chinese Blessing Seals dataset by FORÊ (https://forerui.com), licensed CC BY-NC 4.0.
```

Commercial use (selling products that embed this dataset, etc.) requires a separate license — contact hello@forerui.com.

**閉源資料僅供非商業使用；商業授權請聯絡 hello@forerui.com。**

---

## Related / 相關

- **[FORÊ — 124 Runes, One Blessing](https://forerui.com)** — hand-drawn blessing cards, digital download
- Seal script (篆書) · Chinese calligraphy (書法) · Eastern blessings (東方祝福)

---

*Made with respect for the tradition. 以對傳統的敬意製作。*
