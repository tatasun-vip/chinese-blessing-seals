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

| Code | 中文 | English | Category |
| --- | --- | --- | --- |
| Y01 | 福星高照 | Blessings of the Auspicious Star | life |
| Y02 | 瑞气盈门 | Auspicious Energy Fills the Door | life |
| Y03 | 吉庆满堂 | Joy and Celebration Fill the Hall | life |
| Y04 | 招财进宝 | Summon Wealth and Treasure | wealth |
| Y05 | 堆金积玉 | Piling Gold, Accumulating Jade | wealth |
| Y06 | 福寿双全 | Blessings and Longevity Complete | life |
| Y07 | 康宁永乐 | Health, Peace, Eternal Joy | life |
| Y08 | 百福具臻 | A Hundred Blessings Arrive | life |
| Y09 | 千祥云集 | A Thousand Auspicious Signs Gather | life |
| Y10 | 金玉满堂 | Gold and Jade Fill the Hall | wealth |
| Y11 | 大吉大利 | Great Fortune and Prosperity | life |
| Y12 | 万事亨通 | All Things Go Smoothly | life |
| Y13 | 财运亨通 | Wealth and Fortune Flow Freely | wealth |
| Y14 | 鸿运当头 | Great Fortune Is Upon You | wealth |
| Y15 | 日进斗金 | Gold Pours In Daily | wealth |
| Y16 | 福如东海 | Blessings Vast as the Eastern Sea | life |
| Y17 | 寿比南山 | Longevity Firm as the Southern Mountain | life |
| Y18 | 天赐良缘 | Heaven-Sent Good Fortune | love |
| Y19 | 丰衣足食 | Ample Clothing and Abundant Food | wealth |
| Y20 | 安居乐业 | Peaceful Home, Joyful Work | life |
| Y21 | 兴旺发达 | Prosperous and Flourishing | career |
| Y22 | 蒸蒸日上 | Rising Steadily Day by Day | career |
| Y23 | 步步高升 | Rising Step by Step | career |
| Y24 | 前程似锦 | A Future Bright as Brocade | career |
| Y25 | 心想事成 | All That You Wish Comes True | life |
| R01 | 琴瑟和鸣 | Harmony of Lute and Zither | love |
| R02 | 比翼双飞 | Flying Wing to Wing | love |
| R03 | 花好月圆 | Flowers Bloom, Moon Is Full | love |
| R04 | 并蒂莲开 | Twin Lotus Blooms | love |
| R05 | 永结同心 | Bound Forever in Heart | love |
| R06 | 连理同枝 | Branches Joined as One | love |
| R07 | 鸾凤和鸣 | Phoenixes Sing in Harmony | love |
| R08 | 燕侣莺俦 | Swallow and Oriole Pair | love |
| R09 | 情深似海 | Love Deep as the Sea | love |
| R10 | 地久天长 | Eternal as Earth and Sky | love |
| R11 | 海誓山盟 | Vows as Vast as Sea and Mountain | love |
| R12 | 如胶似漆 | Clinging as Glue and Lacquer | love |
| R13 | 举案齐眉 | Raising Trays to Eyebrow Height | love |
| R14 | 相敬如宾 | Mutual Respect as Guests | love |
| R15 | 白头偕老 | Growing Old Together | love |
| R16 | 同心同德 | One Heart, One Virtue | love |
| R17 | 如影随形 | Inseparable as Shadow Follows Form | love |
| R18 | 心有灵犀 | Hearts Connected at a Glance | love |
| R19 | 朝朝暮暮 | Morning and Evening, Forever | love |
| R20 | 长乐未央 | Boundless Eternal Joy | life |
| R21 | 喜气盈庭 | Joy Fills the Courtyard | life |
| R22 | 团圆美满 | Reunion in Perfect Harmony | love |
| R23 | 恩爱不移 | Love Unchanging | love |
| R24 | 相守一生 | Together for a Lifetime | love |
| R25 | 幸福永驻 | Happiness Forever Dwells | love |
| P01 | 紫微星耀 | The Purple Star Shines | career |
| P02 | 北斗注生 | The Northern Dipper Bestows Life | life |
| P03 | 南斗延寿 | The Southern Dipper Extends Life | life |
| P04 | 文昌启运 | Wen Chang Opens Fortune | career |
| P05 | 武曲临照 | Wu Qu Shines Upon | wealth |
| P06 | 太阴护命 | The Moon Protects Life | life |
| P07 | 太阳普照 | The Sun Shines Wide | life |
| P08 | 玉衡权衡 | Yu Heng Balances | career |
| P09 | 天权立极 | Tian Quan Establishes the Pivot | career |
| P10 | 天机玄妙 | Heavenly Mechanism Mysterious | career |
| P11 | 开阳照世 | Kai Yang Illuminates the World | life |
| P12 | 瑶光引路 | Yao Guang Leads the Way | life |
| P13 | 勾陈御世 | Gou Chen Governs the World | career |
| P14 | 天市云集 | Heavenly Market Gathers | wealth |
| P15 | 紫气凌霄 | Purple Energy Ascends to the Heavens | life |
| P16 | 北辰所居 | The North Star Abides | career |
| P17 | 太乙垂光 | Tai Yi Casts Its Light | life |
| P18 | 三台护佑 | Three Platforms Guard | life |
| P19 | 天乙贵人 | Heavenly Yi Nobleman | career |
| P20 | 华盖覆顶 | Canopy Covers from Above | career |
| P21 | 月华如水 | Moonlight Flows Like Water | life |
| P22 | 星辰引路 | Stars Guide the Path | life |
| P23 | 云衢通玄 | Cloud Path Reaches the Mysterious | career |
| P24 | 天关通圣 | Heaven's Gate Reaches the Sacred | career |
| P25 | 灵台清明 | Spirit Platform Clear and Bright | life |
| B01 | 玄天镇岳 | Mystic Heaven Guards the Peaks | life |
| B02 | 雷部敕令 | Thunder Command | life |
| B03 | 五雷正法 | True Thunder Method | life |
| B04 | 神将护身 | Divine General Protects | life |
| B05 | 八威镇邪 | Eight Powers Subdue Evil | life |
| B06 | 六丁六甲 | Six Ding Six Jia | life |
| B07 | 七星斩煞 | Seven Stars Cut Down Evil | life |
| B08 | 玄武镇北 | Black Tortoise Guards the North | life |
| B09 | 白虎肃西 | White Tiger Subdues the West | life |
| B10 | 青龙镇东 | Azure Dragon Guards the East | life |
| B11 | 朱雀焚邪 | Vermilion Bird Burns Evil | life |
| B12 | 腾蛇缠缚 | Flying Serpent Binds | life |
| B13 | 勾陈镇中 | Gou Chen Guards the Center | life |
| B14 | 天罡正气 | Heavenly Dipper Righteous Energy | life |
| B15 | 地煞护法 | Earth Fiend Protects | life |
| B16 | 明堂聚灵 | Bright Hall Gathers Spirits | life |
| B17 | 玉堂清肃 | Jade Hall Pure and Solemn | life |
| B18 | 龙渊镇邪 | Dragon Abyss Subdues Evil | life |
| B19 | 虎啸风生 | Tiger's Roar Summons the Wind | life |
| B20 | 金甲神威 | Golden Armor Divine Might | life |
| B21 | 铁壁铜墙 | Iron Walls, Copper Fortress | life |
| B22 | 金刚不坏 | Diamond Indestructible | life |
| B23 | 玉清敕令 | Jade Pure Command | life |
| B24 | 太清镇魔 | Supreme Pure Subdues Demons | life |
| B25 | 上清荡邪 | Highest Pure Dispels Evil | life |
| FR01 | 琴瑟和鸣 | Harmony of Lute and Zither | love |
| FR02 | 花好月圆 | Flowers Bloom, Moon Is Full | love |
| FR03 | 永结同心 | Bound Forever in Heart | love |
| FR04 | 心有灵犀 | Hearts Connected at a Glance | love |
| FR05 | 相敬如宾 | Mutual Respect as Guests | love |
| FR06 | 白头偕老 | Growing Old Together | love |
| FR07 | 同心同德 | One Heart, One Virtue | love |
| FR08 | 长乐未央 | Boundless Eternal Joy | life |
| FR09 | 喜气盈庭 | Joy Fills the Courtyard | life |
| FR10 | 团圆美满 | Reunion in Perfect Harmony | love |
| FR11 | 恩爱不移 | Love Unchanging | love |
| FR12 | 幸福永驻 | Happiness Forever Dwells | love |
| FY01 | 招财进宝 | Summon Wealth and Treasure | wealth |
| FY02 | 堆金积玉 | Piling Gold, Accumulating Jade | wealth |
| FY03 | 金玉满堂 | Gold and Jade Fill the Hall | wealth |
| FY04 | 大吉大利 | Great Fortune and Prosperity | life |
| FY05 | 万事亨通 | All Things Go Smoothly | life |
| FY06 | 财运亨通 | Wealth and Fortune Flow Freely | wealth |
| FY07 | 鸿运当头 | Great Fortune Is Upon You | wealth |
| FY08 | 日进斗金 | Gold Pours In Daily | wealth |
| FY09 | 兴旺发达 | Prosperous and Flourishing | career |
| FY10 | 蒸蒸日上 | Rising Steadily Day by Day | career |
| FY11 | 步步高升 | Rising Step by Step | career |
| FY12 | 心想事成 | All That You Wish Comes True | life |

Full stories for each: [`data/blessings.json`](data/blessings.json)


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
